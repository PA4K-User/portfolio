import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import ContactForm from "./index"

const fill = (label, value) =>
  fireEvent.change(screen.getByLabelText(new RegExp(label, "i")), { target: { value } })

const fillValid = () => {
  fill("Enter your name", "Somchai")
  fill("Enter your email", "somchai@example.com")
  fill("Phone number", "+66 81 234 5678")
  fill("Your message", "Hello!")
}

const submit = () => fireEvent.click(screen.getByRole("button", { name: /submit/i }))

describe("ContactForm Component", () => {
  let fetchMock

  beforeEach(() => {
    fetchMock = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: "true" }) }))
    vi.stubGlobal("fetch", fetchMock)
    render(<ContactForm />)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("should show an error under every empty field and not send", () => {
    submit()
    expect(screen.getByText("Please enter your name.")).toBeInTheDocument()
    expect(screen.getByText("Please enter your email.")).toBeInTheDocument()
    expect(screen.getByText("Please enter your phone number.")).toBeInTheDocument()
    expect(screen.getByText("Please enter a message.")).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it("should reject an invalid email", () => {
    fillValid()
    fill("Enter your email", "not-an-email")
    submit()
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it("should send to the owner's email when everything is filled in", async () => {
    fillValid()
    submit()
    expect(await screen.findByText(/your message has been sent/i)).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, options] = fetchMock.mock.calls[0]
    expect(url).toBe("https://formsubmit.co/ajax/siwaphon08@gmail.com")
    expect(JSON.parse(options.body)).toMatchObject({
      name: "Somchai",
      email: "somchai@example.com",
      phone: "+66 81 234 5678",
      message: "Hello!",
    })
  })

  it("should show an error message when sending fails", async () => {
    fetchMock.mockImplementationOnce(() => Promise.resolve({ ok: false, json: () => Promise.resolve({}) }))
    fillValid()
    submit()
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })
})

import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store"
import Header from "./index"

describe("Header Component", () => {
  beforeEach(() => {
    render(<Provider store={store}><Header /></Provider>)
  })

  it("should render header", () => {
    expect(screen.getByText(/Siwaphon/)).toBeInTheDocument()
  })

  it("should render resume button", () => {
    expect(screen.getByText(/Resume/)).toBeInTheDocument()
  })

})
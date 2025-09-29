import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "./index"

describe("Header Component", () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  it("should render about", () => {
    expect(screen.getByText(/About/)).toBeInTheDocument()
  })

  it("should render experience", () => {
    expect(screen.getByText(/Experience/)).toBeInTheDocument()
  })

})
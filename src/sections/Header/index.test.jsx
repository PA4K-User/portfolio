import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Header from "./index"

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />)
  })

  it("should render header", () => {
    expect(screen.getByText(/Siwaphon/)).toBeInTheDocument()
  })

  it("should render resume button", () => {
    expect(screen.getByText(/Resume/)).toBeInTheDocument()
  })

})
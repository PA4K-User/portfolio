import { render, screen } from "@testing-library/react";
import Contact from "./index";
import { describe, it, expect } from "vitest";

describe("Contact Component", () => {
  it("should render all social icons", () => {
    render(<Contact />);

    // หา anchor tag ทั้งหมด
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);

    // ตรวจสอบ href
    expect(links[0]).toHaveAttribute("href", "https://github.com/PA4K-User");
    expect(links[1]).toHaveAttribute("href", "https://www.linkedin.com/in/siwaphon-panisen-875925277/");
    expect(links[2]).toHaveAttribute("href", "https://www.facebook.com/sivaphon.panisan");
    expect(links[3]).toHaveAttribute("href", "https://www.tiktok.com/@vigilante848");

    // ตรวจสอบว่ามี target="_blank"
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});

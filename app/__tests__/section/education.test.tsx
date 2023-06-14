import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Education from "../../section/Education";

describe("Education", () => {
  beforeEach(() => {
    render(<Education/>)
  })

  it("should be to have header", () => {
    expect(screen.getByText("Top Education offers and deals are listed here")).toBeInTheDocument();
  })

  it("should be to load images", () => {
    expect(screen.getAllByAltText("img")).toBeDefined();
  })
})
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Reading from "../../section/Reading";
import {TechnologyInterface} from "../../interface/TechnologyInterface";

const mockTechnology: TechnologyInterface[] = [
  {img: "ux-ui.png", name: "UX/UI"},
  {img: "react.png", name: "React"},
  {img: "php.png", name: "PHP"},
  {img: "javascript.png", name: "JavaScript"},
]

describe("Reading", () => {
  beforeEach(() => {
    render(<Reading technology={mockTechnology}/>)
  })

  it("should be check header", () => {
    expect(screen.getByText(/Reading blog list/i)).toBeInTheDocument();
  })

  it("should be check length array of loading tech", () => {
    expect(screen.getAllByRole("tech")).toHaveLength(mockTechnology.length);
  })

  it("should be click on btn of first technology", () => {
    fireEvent.click(screen.getAllByRole("tech")[0]);
  })
})
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Comment from "../../section/Comment";

describe("Comment", () => {
  beforeEach(() => {
    render(<Comment/>);
  })

  it("should be a social ico", () => {
    expect(screen.getByAltText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByAltText(/instagram/i)).toBeInTheDocument();
  })

  it("should be load people face", () => {
    expect(screen.getAllByAltText(/people face/i)).toBeDefined();
  })

})
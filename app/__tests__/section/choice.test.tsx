import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Choice from "../../section/Choice";

describe("Choice", () => {
  beforeEach(() => {
    render(<Choice/>)
  })

  it("should be render choice", () => {
    expect(screen.getByAltText(/brush/i)).toBeInTheDocument();
    expect(screen.getByAltText(/desktop/i)).toBeInTheDocument();
    expect(screen.getByAltText(/storage/i)).toBeInTheDocument();
    expect(screen.getByAltText(/market/i)).toBeInTheDocument();
    expect(screen.getByAltText(/book/i)).toBeInTheDocument();
    expect(screen.getByAltText(/movie/i)).toBeInTheDocument();
  })
})
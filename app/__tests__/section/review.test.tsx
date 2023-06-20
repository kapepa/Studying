import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Review from "../../section/Review";

jest.mock("../../component/BtnDefault", () => jest.fn(({ text }) => {
  return <button data-testid={text}>{text}</button>
}))

describe("Review", () => {
  beforeEach(() => {
    render(<Review/>)
  })

  it("should be check header", () => {
    expect(screen.getByText(/Gloria Rose/i)).toBeInTheDocument();
  })

  it("should be click button 'Write your assessment'", () => {
    expect(screen.getByText(/Write your assessment/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Write your assessment/i));
  })

  it("should be check to number of stars", () => {
    expect(screen.getAllByAltText(/star/i)).toHaveLength(5);
  })
})
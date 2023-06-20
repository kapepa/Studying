import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Swift from "../../section/Swift";
import BtnDefault from "../../component/BtnDefault";

jest.mock("../../component/BtnDefault", () => jest.fn(({ text }) => {
  return <button data-testid={text}>{text}</button>
}) )

describe("Swift", () => {
  beforeEach(() => {
    render(<Swift/>)
  })

  it("should be check to have background", () => {
    expect(screen.getByAltText(/images/i)).toBeInTheDocument()
  })

  it("should be check to have background", () => {
    expect(screen.getByAltText(/avatar/i)).toBeInTheDocument()
  })

  it("should be click to button 'Follow'", () => {
    expect(screen.getByText(/Follow/i))
    fireEvent.click(screen.getByText(/Follow/i));
  })
})
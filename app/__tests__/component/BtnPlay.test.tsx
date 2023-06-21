import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import BtnPlay from "../../component/BtnPlay";

describe("BtnPlay", () => {
  const mockSize = 40;
  const mockCb = jest.fn();
  const mockTriangle = "small";

  beforeEach(() => {
    render(<BtnPlay size={mockSize} cb={mockCb} sizeTriangle={mockTriangle}/>);
  })

  it("should be to have in doc", () => {
    expect(screen.getByRole("btn")).toBeInTheDocument();
  })

  it("should be click on button", () => {
    expect(screen.getByRole("double")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("btn"));
    expect(mockCb).toHaveBeenCalled();
    expect(screen.getByRole("triangle")).toBeInTheDocument();
  })

  it("should be to have class 'btn-play__double-rectangle--small'", () => {
    expect(screen.getByRole("double")).toHaveClass("btn-play__double-rectangle--small");
  })
})
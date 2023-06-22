import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import XClose from "../../component/XClose";

describe("XClose", () => {
  const mockOnCd = jest.fn(() => {});

  beforeEach(() => {
    render(<XClose onCd={mockOnCd} />)
  })

  it("should be defined 'XClose'", () => {
    expect(screen.getByRole("close")).toBeInTheDocument();
  })

  it("should be click on button", () => {
    fireEvent.click(screen.getByRole("close"));
    expect(mockOnCd).toHaveBeenCalled();
  })
})
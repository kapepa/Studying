import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import BtnDefault from "../../component/BtnDefault";

describe("BtnDefault", () => {

  describe("button", () => {
    const mockTest = "text";
    const mockType = "button";
    const mockClick = jest.fn(() => {});
    const mockSize = "middle";
    const mockShape = "circle";
    const mockBg = "default";
    const mockDisabled = false;

    beforeEach(() => {
      render(<BtnDefault text={mockTest} type={mockType} click={mockClick} size={mockSize} shape={mockShape} bg={mockBg} disabled={mockDisabled}/>);
    })

    it("should be check text btn", () => {
      expect(screen.getByText(mockTest)).toBeInTheDocument();
    })

    it("should be check type", () => {
      expect(screen.getByRole("btn")).toHaveAttribute("type", mockType);
    })

    it('should be click on button', () => {
      fireEvent.click(screen.getByRole("btn"));
      expect(mockClick).toHaveBeenCalled();
    })

    it("should to have class 'btn-default--middle'", () => {
      expect(screen.getByRole("btn")).toHaveClass("btn-default--middle");
    })

    it("should to have class 'btn-default__shape--circle'", () => {
      expect(screen.getByRole("btn")).toHaveClass("btn-default__shape--circle");
    })

    it("should to have class 'btn-default__bg--def'", () => {
      expect(screen.getByRole("btn")).toHaveClass("btn-default__bg--def");
    })

    it("should to have btn disabled 'false'", () => {
      expect(screen.getByRole("btn")).not.toBeDisabled();
    })
  })

  describe("link", () => {
    const mockTest = "link";
    const mockHref = "/home";
    const mockSize = "small";
    const mockShape = "rounding";
    const mockBg = "red";

    beforeEach(() => {
      render(<BtnDefault text={mockTest} href={mockHref} size={mockSize} shape={mockShape} bg={mockBg}/>);
    })

    it("should be to have text", () => {
      expect(screen.getByText(mockTest)).toBeInTheDocument();
    })

    it("should be check link href", () => {
      fireEvent.click(screen.getByRole("link"));
      expect(screen.getByRole("link")).toMatchObject({ pathname: mockHref })
    })

    it("should be checked to have class 'btn-default--small'", () => {
      expect(screen.getByRole("link")).toHaveClass("btn-default--small");
    })

    it("should be checked to have class 'btn-default__shape--rounding'", () => {
      expect(screen.getByRole("link")).toHaveClass("btn-default__shape--rounding");
    })

    it("should be to checked class 'btn-default__bg--red'", () => {
      expect(screen.getByRole("link")).toHaveClass("btn-default__bg--red");
    })
  })

})
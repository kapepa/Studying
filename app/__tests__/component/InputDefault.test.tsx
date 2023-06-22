import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import InputDefault from "../../component/InputDefault";

describe("InputDefault",() => {
  let isRender;
  const mockId = "id";
  const mockType = "text";
  const mockTitle = "Paypal";
  const mockChange = jest.fn(() => {});
  const mockRequired = "";
  const mockRegister: any = () => {}
  const minLength = {value: 19, message: 'this card number is short'}
  const maxLength = {value: 19, message: 'this card number is long'}

  beforeEach(() => {
    isRender = render(<InputDefault
      id={mockId}
      type={mockType}
      label={"number"}
      title={mockTitle}
      errors={{}}
      register={mockRegister}
      isChange={mockChange}
      required={mockRequired}
      minLength={minLength}
      maxLength={maxLength}
    />);
  })

  it("should be to render 'InputDefault'", () => {
    expect(screen.getByRole("input")).toBeInTheDocument();
  })

  it("should be to have title", () => {
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  })

  it("should be to have id", () => {
    const mockVal: string = "mock-val"
    const { getByRole } = isRender;
    fireEvent.change(getByRole("input"), { target: { value: mockVal } });
    expect(getByRole("input")).toHaveValue(mockVal);
  })
})
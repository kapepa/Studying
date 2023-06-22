import "@testing-library/jest-dom";
import {render, screen, fireEvent, act, waitFor} from "@testing-library/react";
import FormDefault from "../../component/FormDefault";
import {InputType} from "../../type/InputType";

describe("FormDefault", () => {
  const mockTitle: string = "Title";
  const mockSubmitText: string = "SubmitText";
  const mockInput: InputType[] = [
    {name: "name", type: "text", label: "User name", placeholder: "Enter your User name", patterns: { required: { message: "Required", value: true }, minLength: {message: 'Min length', value: 5} }}
  ];

  const mockCb = jest.fn(() => {});
  let isRender;

  beforeEach(() => {
    isRender = render(<FormDefault cb={mockCb} inputs={mockInput} title={mockTitle} submitText={mockSubmitText}/>);
  })

  it("should be to check title", () => {
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it("should be check name submit button", () => {
    expect(screen.getByText(mockSubmitText)).toBeInTheDocument();
  })

  it("should be check fill out input", async () => {
    const mockValue = "MockValue";
    const {getByRole} = isRender;

    fireEvent.change(getByRole("input"), {target: {value: mockValue}});
    expect(getByRole("input")).toHaveValue(mockValue);
    await waitFor (() => {
      fireEvent.submit(getByRole("form"))
      expect(mockCb).toHaveBeenCalled();
    })
  })

  it("should be is short name", async () => {
    const mockValue = "Mock";
    const {getByRole} = isRender;

    fireEvent.change(await getByRole("input"), {target: {value: mockValue}});

    await waitFor (() => {
      fireEvent.submit(getByRole("form"))
      expect(getByRole("error")).toBeInTheDocument();
    })
  })

  it("should be is required", async () => {
    const {getByRole} = isRender;

    fireEvent.change(await getByRole("input"), {target: {value: ""}});

    await waitFor (() => {
      fireEvent.submit(getByRole("form"))
      expect(getByRole("error")).toBeInTheDocument();
    })
  })

})
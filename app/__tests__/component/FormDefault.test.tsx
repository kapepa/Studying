import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByRole, waitFor} from "@testing-library/react";
import FormDefault from "../../component/FormDefault";
import {InputType} from "../../type/InputType";

describe("FormDefault", () => {
  const mockTitle: string = "Title";
  const mockSubmitText: string = "SubmitText";
  const mockInput: InputType[] = [
    {
      label: "Name",
      name: "name",
      placeholder: "Entered your name.",
      type: "text",
      patterns: {
        required: {
          value: true,
          message: "Your name is required",
        },
        minLength: {
          value: 3,
          message: "Your name are short"
        },
        maxLength: {
          value: 20,
          message: "Your name are longs"
        },
      }
    }
  ]
  const mockCb = jest.fn();
  let isRender;

  beforeEach(() => {
    isRender = render(<FormDefault cb={mockCb} inputs={mockInput} title={mockTitle} submitText={mockSubmitText}/>);
    render(<input role={"input"}/> );
  })

  it("should be to check title", () => {
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it("should be check name submit button", () => {
    expect(screen.getByText(mockSubmitText)).toBeInTheDocument();
  })

  const setup = () => {
    const utils = render(<input role={"input-0"} name="name" value=""/>)
    const input = screen.getByRole('input-0')
    return {input, ...utils};
  }

  it("should be check fill out input", async () => {

  })
})
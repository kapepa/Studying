import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Learning from "../../section/Learning";

jest.mock("../../component/BtnDefault", () => jest.fn(({text, click}) => {
  return <button onClick={click} data-testid={text}>{text}</button>
}))

describe("Learning", () => {
  beforeEach(() => {
    render(<Learning/>)
  })

  it("should be to leading notebook images", () => {
    expect(screen.getByAltText(/notebook/i)).toBeInTheDocument();
  })

  it("should be click on button start learning", () => {
    fireEvent.click(screen.getByTestId("Start learning now"));
  })
})
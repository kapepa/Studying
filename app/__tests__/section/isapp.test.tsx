import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByTestId} from "@testing-library/react";
import IsApp from "../../section/IsApp";

jest.mock("../../component/BtnDefault", () => jest.fn(({text, click}) => {
  return <button onClick={click} data-testid={text}>{text}</button>
}))

describe("IsApp", () => {
  beforeEach(() => {
    render(<IsApp/>)
  })

  it("should be click on the android app", () => {
    fireEvent.click(screen.getByTestId('Android APP'));
  })

  it("should be click on the ios app", () => {
    fireEvent.click(screen.getByTestId('IOS APP'));
  })

  it("should be to have images", () => {
    expect(screen.getAllByAltText(/teacher/i)).toHaveLength(2);
  })

  it("should be click on teacher", () => {
    fireEvent.click(screen.getAllByAltText(/teacher/i)[0]);
  })
})
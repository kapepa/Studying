import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../../section/About";
import BtnDefault from "../../component/BtnDefault";

jest.mock("../../component/BtnDefault",() => jest.fn(({click, text}) => {
  return <button onClick={click} data-testid="mock-button">{text}</button>
}))

describe("About", () => {
  it("should be render About section", () => {
    const { getByTestId } = render(<About />);
    // const mockBtn = getByTestId("mock-button");

    expect(screen.getByText("Know about learning learning platform")).toBeInTheDocument();

  })
})
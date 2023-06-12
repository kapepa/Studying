import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import About from "../../section/About";

jest.mock("../../component/BtnDefault",() => jest.fn(({click, text}) => {
  return <button onClick={click} data-testid="mock-button">{text}</button>
}))

describe("About", () => {
  it("should be render About section", () => {
    const { container } = render(<About />);
    const button = container.querySelector('button');

    fireEvent.click(button)
    expect(screen.getByText("Know about learning learning platform")).toBeInTheDocument();
  })
})
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Presentation from "../../section/Presentation";

jest.mock("../../component/BtnDefault", () => jest.fn(({text}) => {
  return <button data-testid={text}>{text}</button>;
}))

jest.mock("../../component/BtnPlay", () => jest.fn(() => {
  return <button role="play"/>;
}))

describe("Presentation", () => {
  beforeEach(() => {
    render(<Presentation/>)
  })

  it("should be to have header", () => {
    expect(screen.getByText(/Online is now much easier/i)).toBeInTheDocument();
  })

  it("should be click on btn play", () => {
    expect(screen.getByRole("play")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("play"));
  })

  it("should be click on btn join in free", () => {
    expect(screen.getByTestId(/Join for free/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Join for free/i));
  });

  it("should be click on btn join now", () => {
    expect(screen.getByTestId(/Join Now/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Join Now/i));
  })
})
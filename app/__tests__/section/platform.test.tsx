import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Platform from "../../section/Platform";

jest.mock("../../component/BtnDefault",() => jest.fn(({text}) => {
  return <button data-testid={text}>{text}</button>
}))

jest.mock("../../component/BtnPlay",() => jest.fn(({text}) => {
  return <button role="play" />
}))

describe("Platform", () => {
  beforeEach(() => {
    render(<Platform/>)
  })

  it("should be to have header", () => {
    expect(screen.getByText(/What is/i)).toBeInTheDocument();
  })

  it("should be click on btn start", () => {
    expect(screen.getByText(/Start a class today/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Start a class today/i));
  })

  it("should be click on btn enter", () => {
    expect(screen.getByText(/Start a class today/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Enter access code/i));
  })

  it("should be click on btn video", () => {
    expect(screen.getByText(/Start a class today/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("play"));
  })
})
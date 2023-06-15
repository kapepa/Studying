import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Features from "../../section/Features";

jest.mock("../../component/BtnDefault", () => jest.fn(({bg, text, size, click}) => {
  return <button onClick={click} data-testid={text}>{text}</button>
}))

describe("Features", () => {
  beforeEach(() => {
    render(<Features/>)
  })

  it("should be check load people image", () => {
    expect(screen.findAllByAltText(/people/i)).toBeDefined();
  })

  it("should be press on button Present", () => {
    fireEvent.click(screen.getByTestId(/Present/i));
  })

  it("should be press on button Call", () => {
    fireEvent.click(screen.getByTestId(/Call/i));
  })

  it("should be press on button See more features", () => {
    fireEvent.click(screen.getByTestId(/See more features/i));
  })
})
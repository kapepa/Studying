import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Online from "../../section/Online";

jest.mock("../../component/BtnDefault", () => jest.fn(({text}) => {
  return <button role="btn">{text}</button>
}))

describe("Online",() => {
  beforeEach(() => {
    render(<Online/>)
  })

  it("should be check title", () => {
    expect(screen.getByText(/Online coaching lessons for remote learning\./i)).toBeInTheDocument();
  })

  it("should click on btn 'Start learning now'", () => {
    fireEvent.click(screen.getByRole("btn"));
  })
})
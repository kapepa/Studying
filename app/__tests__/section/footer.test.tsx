import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByTestId} from "@testing-library/react";
import Footer from "../../section/Footer";
import axios from "axios";

jest.mock("../../component/BtnDefault", () => jest.fn(({type, text, disabled}) => {
  return <button type={type} disabled={disabled} data-testid="btn">{text}</button>
}))

jest.mock('axios');

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer/>)
  })

  it("should be check to loading image", () => {
    expect(screen.getByAltText("logo")).toHaveAttribute("src", "/svg/logo.svg");
  })

  it("should be fill out input and send his", async () => {
    const mockEmail = "mock@mail.test";
    const request = jest.spyOn(axios, "post").mockImplementation(() => Promise.resolve());

    fireEvent.change(screen.getByTestId("input"), { target: { value: mockEmail } });
    expect(screen.queryByTestId("input")).toHaveValue(mockEmail);
    fireEvent.submit(screen.getByRole("form"));
    expect(request).toHaveBeenCalledTimes(1);
    expect(await screen.findByTestId("input")).toHaveValue("Your Email");
  })
})
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import PopupAuthentication from "../../component/PopupAuthentication";
import axios from "axios";

jest.mock("axios", () => ({post: jest.fn()}));

jest.mock("../../component/FormDefault", () => jest.fn(({title, cb}) => {
  return (
    <div>
      <h4 role="title">{title}</h4>
      <form role="form" onSubmit={cb}>
        <input />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}))

describe("PopupAuthentication", () => {
  let isRender;

  beforeEach(() => {
    isRender = render(<PopupAuthentication/>);
  });

  it("should be defined 'PopupAuthentication'", () => {
    expect(screen.getByRole("popup")).toBeInTheDocument();
  })

  it("should be click on register or Login form", () => {
    expect(screen.getByRole("title")).toHaveTextContent("Login");
    fireEvent.click(screen.getByText("Register"));
    expect(screen.getByRole("title")).toHaveTextContent("Register");
    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByRole("title")).toHaveTextContent("Login");
  })

  it("should be send form", () => {
    const post = jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve());
    fireEvent.submit(screen.getByRole("form"));
    expect(post).toHaveBeenCalled();
  })
})
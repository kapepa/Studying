import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Assistant from "../../section/Assistant";

jest.mock("../../component/BtnDefault", () => jest.fn(({ text, click }) => {
  return <button onClick={click}>{text}</button>
}))

describe("Assistant", () => {
  beforeEach(() => {
    render(<Assistant/>);
  })

  it('should be render BtnDefault', () => {
    expect(screen.getByText(/Enroll Now/i)).toBeInTheDocument();
  })

  it('should be render bg', () => {
    expect(screen.getByAltText(/bg/i)).toBeInTheDocument();
  })

  it("should be render social link", () => {
    expect(screen.getByAltText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByAltText(/youtube/i)).toBeInTheDocument();
    expect(screen.getByAltText(/instagram/i)).toBeInTheDocument();
  })
})
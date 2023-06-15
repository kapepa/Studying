import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Lesson from "../../section/Lesson";

jest.mock("../../component/SliderDefault", () => jest.fn(({ children }) => {
  return <div>{children}</div>
}))

describe("Lesson", () => {
  beforeEach(() => {
    render(<Lesson/>)
  })

  it("should be loading images", () => {
    expect(screen.getAllByAltText(/picture/i)).toHaveLength(4);
  })
})
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Students from "../../section/Students";

const students = Array(6).fill({
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  user: {name: "Simons", avatar: "avatar.png"},
})

jest.mock("react-slick", () => jest.fn(({children}) => {
  return children;
}))

describe("Students", () => {
  beforeEach(() => {
    render(<Students students={students}/>)
  })

  it("should be check count of students", () => {
    expect(screen.getAllByRole("student")).toHaveLength(students.length);
  })
})
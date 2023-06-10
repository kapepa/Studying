import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Courses from "../../pages/courses";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Lesson", () => jest.fn(() => "Lesson"));
jest.mock("../../section/Choice", () => jest.fn(() => "Choice"));
jest.mock("../../section/Recommended", () => jest.fn(() => "Recommended"));

describe("Courses", () => {
  it('should be render Courses', () => {
    const { debug } = render(<Courses/>);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Lesson/i)).toBeInTheDocument();
    expect(screen.getByText(/Choice/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommended/i)).toBeInTheDocument();
  })
})
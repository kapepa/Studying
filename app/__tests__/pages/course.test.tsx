import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Course from "../../pages/course/[id]";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Purchase", () => jest.fn(() => "Purchase"));
jest.mock("../../section/Recommended", () => jest.fn(() => "Recommended"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Course", () => {
  it('should be render Course', () => {
    const { debug } = render(<Course />);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Purchase/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommended/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  })
})
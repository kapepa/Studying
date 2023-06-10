import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Detail from "../../pages/detail";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Swift", () => jest.fn(() => "Swift"));
jest.mock("../../section/Related", () => jest.fn(() => "Related"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Detail", () => {
  it("renders a Blog", () => {
    render(<Detail />);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Swift/i)).toBeInTheDocument();
    expect(screen.getByText(/Related/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
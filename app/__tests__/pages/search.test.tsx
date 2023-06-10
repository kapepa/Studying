import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Search from "../../pages/search";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/About", () => jest.fn(() => "About"));
jest.mock("../../section/Real", () => jest.fn(() => "Real"));
jest.mock("../../section/Comment", () => jest.fn(() => "Comment"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Search", () => {
  it("should be render Search", () => {
    const { debug } = render(<Search/>);

    expect(screen.getByText("PanelNav")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Real")).toBeInTheDocument();
    expect(screen.getByText("Comment")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  })
})
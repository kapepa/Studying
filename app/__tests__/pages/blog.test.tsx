import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "../../pages/blog";
import React from "react";
import PanelNav from "../../component/PanelNav";
import Learning from "../../section/Learning";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => {return <div>{children}</div>}));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Learning", () => jest.fn(() => "Learning"));
jest.mock("../../section/Reading", () => jest.fn(() => "Reading"));
jest.mock("../../section/Related", () => jest.fn(() => "Related"));
jest.mock("../../section/Marketing", () => jest.fn(() => "Marketing"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Blog", () => {
  it("renders a Blog", () => {
    const nav = jest.fn()
    const { getByTestId, debug } = render(<Blog />);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Learning/i)).toBeInTheDocument();
    expect(screen.getByText(/Reading/i)).toBeInTheDocument();
    expect(screen.getByText(/Related/i)).toBeInTheDocument();
    expect(screen.getByText(/Marketing/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();

    expect(PanelNav).toHaveBeenCalled();
    expect(Learning).toHaveBeenCalled()
  });
});
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Literature from "../../pages/literature";
import Exhibition from "../../section/Exhibition";
import Footer from "../../section/Footer";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Assistant", () => jest.fn(() => "Assistant"));
jest.mock("../../section/Exhibition", () => jest.fn(() => "Exhibition"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Literature", () => {
  it("should be render Literature", () => {
    const { debug } = render(<Literature/>);

    expect(screen.getByText("PanelNav")).toBeInTheDocument();
    expect(screen.getByText("Assistant")).toBeInTheDocument();
    expect(screen.getByText("Exhibition")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  })
})
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Payment from "../../pages/payment";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Acquisition", () => jest.fn(() => "Acquisition"));
jest.mock("../../section/Education", () => jest.fn(() => "Education"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Payment", () => {
  it("should be render Payment", () => {
    const { debug } = render(<Payment />);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Acquisition/i)).toBeInTheDocument();
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  })
})
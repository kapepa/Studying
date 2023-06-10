import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Membership from "../../pages/membership";


jest.mock("../../core/layouts/default", () => jest.fn(({children}) => <div>{children}</div>));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Pricing", () => jest.fn(() => "Pricing"));
jest.mock("../../section/Online", () => jest.fn(() => "Online"));
jest.mock("../../section/Coaching", () => jest.fn(() => "Coaching"));
jest.mock("../../section/Students", () => jest.fn(() => "Students"));
jest.mock("../../section/IsApp", () => jest.fn(() => "IsApp"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

describe("Membership", () => {
  it("should be return Membership", () => {
    const { debug } = render(<Membership/>);

    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
    expect(screen.getByText(/Online/i)).toBeInTheDocument();
    expect(screen.getByText(/Coaching/i)).toBeInTheDocument();
    expect(screen.getByText(/Students/i)).toBeInTheDocument();
    expect(screen.getByText(/IsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  })
})
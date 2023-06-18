import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "../../pages/blog";
import React from "react";
import PanelNav from "../../component/PanelNav";
import Learning from "../../section/Learning";
import {OffersInterface} from "../../interface/OffersInterface";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => {return <div>{children}</div>}));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/Learning", () => jest.fn(() => "Learning"));
jest.mock("../../section/Reading", () => jest.fn(() => "Reading"));
jest.mock("../../section/Related", () => jest.fn(() => "Related"));
jest.mock("../../section/Marketing", () => jest.fn(() => "Marketing"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

const mockOffers: OffersInterface[] = [
  {
    img: "/image/news-two.png",
    term: "3 Month",
    profession: "Design",
    title: "Certified solutions Architect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    price: 100,
    discount: 20,
    user: {
      name: "Lina",
      avatar: "/image/avatar.png"
    }
  },
]

describe("Blog", () => {
  it("renders a Blog", () => {
    const nav = jest.fn()
    render(<Blog offers={mockOffers} />);

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
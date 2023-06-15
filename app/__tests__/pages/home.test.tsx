import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages/home";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import PanelNav from "../../component/PanelNav";
import React from "react";

jest.mock("../../core/layouts/default", () => jest.fn(({children}) => {return <div>{children}</div>}));
jest.mock("../../component/PanelNav", () => jest.fn(() => "PanelNav"));
jest.mock("../../section/OurSuccess", () => jest.fn(() => "OurSuccess"));
jest.mock("../../section/Software", () => jest.fn(() => "Software"));
jest.mock("../../section/Platform", () => jest.fn(() => "Platform"));
jest.mock("../../section/Features", () => jest.fn(() => "Features"));
jest.mock("../../section/Explore", () => jest.fn(() => "Explore"));
jest.mock("../../section/Review", () => jest.fn(() => "Review"));
jest.mock("../../section/News", () => jest.fn(() => "News"));
jest.mock("../../section/Footer", () => jest.fn(() => "Footer"));

// jest.mock('next/router', () => ({ useRouter: jest.fn(() => ({query: jest.fn()})) }))
// jest.mock('next/navigation', () => ({ useSearchParams: jest.fn(() => ({get: jest.fn()})) }))
// jest.mock('react-slick', () => jest.fn(() => null));

describe("Home", () => {
  const initialState = { local: {loader: false } };
  const mockStore = configureStore();
  const  store = mockStore(initialState);

  it("renders a Home", () => {
    const { debug } = render(
      <Provider store={store}>
        <Home news={[]} />
      </Provider>
    );
    expect(screen.getByText(/PanelNav/i)).toBeInTheDocument();
    expect(screen.getByText(/OurSuccess/i)).toBeInTheDocument();
    expect(screen.getByText(/Software/i)).toBeInTheDocument();
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore/i)).toBeInTheDocument();
    expect(screen.getByText(/Review/i)).toBeInTheDocument();
    expect(screen.getByText(/News/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
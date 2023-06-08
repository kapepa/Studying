import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages/home";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({query: jest.fn()}))
}))

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({get: jest.fn()}))
}))

describe("Home", () => {
  const initialState = { local: {loader: false } };
  const mockStore = configureStore();
  const  store = mockStore(initialState);

  it("renders a Home", () => {

    // jest.requireActual('react-redux');
    render(
      <Provider store={store}><Home /></Provider>
    );

    expect(screen.getByText(/div/)).toBeInTheDocument();


    // check if all components are rendered
    // expect(screen.getByTestId("result")).toBeInTheDocument();
    // expect(screen.getByTestId("num1")).toBeInTheDocument();
    // expect(screen.getByTestId("num2")).toBeInTheDocument();
    // expect(screen.getByTestId("add")).toBeInTheDocument();
    // expect(screen.getByTestId("subtract")).toBeInTheDocument();
    // expect(screen.getByTestId("multiply")).toBeInTheDocument();
    // expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
});
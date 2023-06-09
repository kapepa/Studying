import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Blog from "../../pages/blog";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({query: jest.fn()}))
}))

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({get: jest.fn()}))
}))

describe("Blog", () => {
  const initialState = { local: {loader: false } };
  const mockStore = configureStore();
  const  store = mockStore(initialState);

  it("renders a Blog", () => {
    render(
      <Provider store={store}><Blog /></Provider>
    );
  });
});
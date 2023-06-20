import "@testing-library/jest-dom";
import {render, screen, fireEvent, act, findByText, waitForElementToBeRemoved, waitFor} from "@testing-library/react";
import Scan from "../../section/Scan";
import axios from "axios";

jest.mock("../../component/InputSearch", () => jest.fn(({cd, toSearch}) => {
  return <input name="search" value="" key={toSearch} onChange={(e) => cd(e.currentTarget.value)} data-testid="input"/>
}))

jest.mock("axios");

describe("Scan", () => {
  beforeEach(() => {
    render(<Scan/>);
  })

  it("should be check loading of bg", () => {
    expect(screen.getByAltText(/bg/i).getAttribute("src")).toBeDefined();
  })

  it("should be click find key word", async () => {
    const request = jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({data: {  }}));

    await waitFor(() => {
      fireEvent.click(screen.getByText(/Subject/i));
      expect(request).toHaveBeenCalled();
    });
  })
})
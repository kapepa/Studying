import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Explore from "../../section/Explore";

describe("Explore", () => {
  beforeEach(() => {
    render(<Explore/>);
  })

  it('should be check to have header', () => {
    expect(screen.getByText(/Explore Course/i));
  })

  it('should be check to have ico', () => {
    expect(screen.getAllByAltText(/pain/i)).toHaveLength(3);
  })
})
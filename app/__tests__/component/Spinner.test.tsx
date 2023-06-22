import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Spinner from "../../component/Spinner";

describe("Spinner", () => {
  beforeEach(() => {
    render(<Spinner/>)
  })

  it("should be defined 'Spinner'", () => {
    expect(screen.getByRole("spinner")).toBeInTheDocument();
  })

  it("should be to have loading text", () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
})
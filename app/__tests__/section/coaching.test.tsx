import "@testing-library/jest-dom";
import {render, screen, fireEvent, findByRole} from "@testing-library/react";
import Coaching from "../../section/Coaching";

describe("Coaching", () => {
  beforeEach(() => {
    render(<Coaching/>);
  })

  it('should open and close accordion', async () => {
    expect(screen.getByRole("cell-accordion-open")).not.toHaveClass("coaching__stretch--open");
    fireEvent.click(screen.getByRole("cell-accordion-click"));
    expect(screen.getByRole("cell-accordion-open")).toHaveClass("coaching__stretch--open");
    fireEvent.click(screen.getByRole("cell-accordion-click"));
    expect(screen.getByRole("cell-accordion-open")).not.toHaveClass("coaching__stretch--open");
  })
})
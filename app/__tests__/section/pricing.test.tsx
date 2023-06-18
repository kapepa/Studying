import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Pricing from "../../section/Pricing";
import {PricingInterface} from "../../interface/PricingInterface";

const mockPricing: PricingInterface[] = [
  {
    type: "like",
    subtitle: "",
    term: "forever",
    price: 0,
    capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack"],
    detailed: "Try for free",
  },
  {
    type: "individual",
    subtitle: "best!",
    term: "month",
    price: 24,
    capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack", "Themed into 3 different styles", "Will help to learn Figma"],
    detailed: "Regular license",
  },
  {
    type: "corporate",
    subtitle: "",
    term: "editor",
    price: 24,
    capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack", "Themed into 3 different styles"],
    detailed: "Regular license",
  }
]

describe("Pricing", () => {
  beforeEach(() => {
    render(<Pricing pricing={mockPricing}/>)
  })

  it("should be to have header", () => {
    expect(screen.getByText(/Affordable pricing/i)).toBeInTheDocument();
  })

  it("should check loading card", () => {
    expect(screen.getAllByRole("card")).toHaveLength(3);
  })

  it("should be click on first card", () => {
    fireEvent.click(screen.getAllByRole("card")[0]);
  })
})
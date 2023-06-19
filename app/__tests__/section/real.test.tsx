import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import {RealInterface} from "../../interface/RealInterface";
import Real from "../../section/Real";

const real: RealInterface[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor, consectetur adipising elit.",
    user: { name: "Jane", avatar: "community_people_five.png" },
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor, consectetur adipising elit. Lorem ipsum dolor sit amet",
    user: { name: "Adam", avatar: "community_people_three.png" },
  },
  {
    text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
    user: { name: "Tomara", avatar: "community_people_two.png" },
  },
  {
    text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
    user: { name: "Jane", avatar: "community_people_five.png" },
  },
  {
    text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
    user: { name: "Adam", avatar: "community_people_three.png" },
  },
  {
    text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
    user: { name: "Tomara", avatar: "community_people_two.png" },
  },
]

describe("Real", () => {
  beforeEach(() => {
    render(<Real real={real} />);
  })

  it("should be check to have header", () => {
    expect(screen.getByText(/Classes tought by real creators/i)).toBeInTheDocument();
  })

  it("should check array length of real", () => {
    expect(screen.getAllByRole("real")).toHaveLength(real.length);
  })
})
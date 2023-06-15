import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Marketing from "../../section/Marketing";
import {OffersInterface} from "../../interface/OffersInterface";

const offer: OffersInterface = {
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
};

describe("Marketing", () => {
  const offers = new Array(2).fill(offer);

  beforeEach(() => {
    render(<Marketing offers={offers} />)
  })

  it("should to having card on page", () => {
    expect(screen.getAllByRole("card")).toHaveLength(2);
  })
})
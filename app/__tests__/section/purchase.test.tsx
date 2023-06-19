import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Purchase from "../../section/Purchase";
import {PurchaseInterface} from "../../interface/PurchaseInterface";

const purchase: PurchaseInterface = {
  rating: { 1: 3, 2: 4, 3: 6, 4: 5, 5: 1 },
  comments: [
    {
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively integrates exclusively",
      created_at: Date.now() - (1000 * 60 * 60 * 24 * 30),
      user: { name: "Lina", avatar: "avatar.png" }
    },
    {
      text: "Launched less than a year ago by Blackboards co-founder Michael Chasen, integrates exclusively. Less than a year ago by Blackboard",
      created_at: Date.now() - (1000 * 60 * 60 * 24 * 65),
      user: { name: "Alina", avatar: "avatar.png" }
    }
  ],
  price: {
    discount: 50,
    value: 100,
  }
};

jest.mock("../../component/BtnDefault", () => jest.fn(({text}) => {
  return <button data-testid={text}>{text}</button>
}))

describe("Purchase", () => {
  beforeEach(() => {
    render(<Purchase purchase={purchase}/>);
  })

  it("should be to have background", () => {
    expect(screen.getByAltText(/background/i)).toBeInTheDocument();
  })

  it("should click on btn 'Overview'", () => {
    expect(screen.getByTestId(/Overview/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Overview/i));
  })

  it("should click on btn 'Review'", () => {
    expect(screen.getByTestId(/Review/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Review/i));
  })

  it("should be check round rating star", () => {
    expect(screen.getByText(`4 out of 5`))
  })

  it("should to check the number of stars", () => {
    expect(screen.getAllByRole("star")).toHaveLength(5);
  })

  it("should to check the number of comments", () => {
    expect(screen.getAllByRole("comment")).toHaveLength(2);
  })

  it("should be check of price", () => {
    expect(screen.getByText(`$${ purchase.price.discount / 100 * purchase.price.value }`)).toBeInTheDocument();
    expect(screen.getByText(`${ purchase.price.value }`)).toBeInTheDocument();
    expect(screen.getByText(`${ purchase.price.discount } % Off`)).toBeInTheDocument();
  })

  it("should be check click 'Buy Now'", () => {
    expect(screen.getByTestId(/Buy Now/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/Buy Now/i));
  })
})
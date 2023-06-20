import "@testing-library/jest-dom";
import {render, screen, fireEvent, getAllByRole} from "@testing-library/react";
import Related from "../../section/Related";
import {RelatedInterface} from "../../interface/RelatedInterface";
import SliderDefault from "../../component/SliderDefault";

const related: RelatedInterface[] = [
  {
    id: Date.now().toString(),
    img: "card-one.png",
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    user: { name: "Lina", avatar: "avatar.png" },
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Blackboard co-founder.",
    looked: 1200,
  },
  {
    id: Date.now().toString(),
    img: "card-two.png",
    title: "Zoom-friendly edtech solution. Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    user: { name: "Alina", avatar: "avatar.png" },
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
    looked: 2200,
  },
  {
    id: Date.now().toString(),
    img: "card-one.png",
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    user: { name: "Lina", avatar: "avatar.png" },
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Blackboard co-founder.",
    looked: 1200,
  },
];

jest.mock("../../component/SliderDefault", () => jest.fn(({children}) => <div>{children}</div>));

describe("Related", () => {
  beforeEach(() => {
    render(<Related related={related}/>)
  })

  it("should be check header", () => {
    expect(screen.getByText(/Related Blog/i)).toBeInTheDocument();
  })

  it("should to have array length of related", () => {
    expect(screen.getAllByRole("related")).toHaveLength(3);
  })
})
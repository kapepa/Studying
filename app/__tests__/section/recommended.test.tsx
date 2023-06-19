import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByRole, getAllByRole} from "@testing-library/react";
import Recommended from "../../section/Recommended";
import {SlideInterface} from "../../interface/SlideInterface";

const slides: SlideInterface[] = [
  {
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolors sit amet, consectetur adipising elit, sed do eiusmod tempor',
    images: ['/image/news-two.png'],
    date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
    price: { cost: 100, discount: 80 },
    profile: { name: 'Lina', avatar: ['/image/avatar.png'], job: 'Design' },
  },
  {
    title: 'AWS Certified solutions',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    images: ['/image/notebook.png'],
    date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
    price: { cost: 100, discount: 80 },
    profile: { name: 'Sara', avatar: ['/image/avatar.png'], job: 'Manager' },
  }
]

jest.mock("../../component/SliderDefault",() => jest.fn(({ children }) => {
  return <div>{children}</div>
}))

describe("Recommended", () => {
  beforeEach(() => {
    render(<Recommended slides={slides}/>)
  })

  it("should be check array length of slide", () => {
    expect(screen.queryAllByRole("slide")).toHaveLength(slides.length * 3);
  })
})
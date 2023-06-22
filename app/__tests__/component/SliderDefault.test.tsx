import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import SliderDefault from "../../component/SliderDefault";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";
import React from "react";

jest.mock("react-slick", () => jest.fn(({children}) => {
  return <div rows="slider">{children}</div>
}));

describe("SliderDefault", () => {
  let isRender;
  const mockShowSlide = 1;
  const mockResponsive: ResponsiveInterface[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  beforeEach(() => {
    isRender = render(
      <SliderDefault slidesToShow={mockShowSlide} responsive={mockResponsive}>
        <div role="slide">slide</div>
        <div role="slide">slide</div>
        <div role="slide">slide</div>
      </SliderDefault>
    )
  })

  it("should be defined 'SliderDefault'", () => {
    expect(screen.getAllByRole("slide")).toHaveLength(3);
  })
})
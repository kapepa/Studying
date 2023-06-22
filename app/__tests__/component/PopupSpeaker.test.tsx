import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByRole} from "@testing-library/react";
import PopupSpeaker from "../../component/PopupSpeaker";
import XClose from "../../component/XClose";

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

jest.mock("../../component/XClose", () => jest.fn(({onCd}) => {
  return <button onClick={onCd} role="xclose">X</button>
}))

describe("PopupSpeaker", () => {
  let isRender;
  const mockLoader = false;
  const mockControlLoader = jest.fn(() => {});

  beforeEach(() => {
    isRender = render(<PopupSpeaker loader={mockLoader} controlLoader={mockControlLoader}/>)
  })

  it("should be defined 'PopupSpeaker'", () => {
    expect(screen.getByRole("popup")).toBeInTheDocument();
  })

  it("should be click close popup", () => {
    expect(screen.getByRole("xclose")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("xclose"))
  })

  it("should be loading img video", () => {
    expect(screen.getByAltText("video")).toBeInTheDocument();
  })

  it("should be loading img microphone", () => {
    expect(screen.getByAltText("microphone")).toBeInTheDocument();
  })

  it("should be loading img phone", () => {
    expect(screen.getByAltText("phone")).toBeInTheDocument();
  })

  it("should be loading img monitor", () => {
    expect(screen.getByAltText("monitor")).toBeInTheDocument();
  })

  it("should be loading img exit", () => {
    expect(screen.getByAltText("exit")).toBeInTheDocument();
  })
})
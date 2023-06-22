import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import PanelNav from "../../component/PanelNav";
import {BodyLayout} from "../../core/layouts/default";

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

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <BodyLayout.Provider value={providerProps}>{ui}</BodyLayout.Provider>,
  );
};

describe("PanelNav", () => {
  let isRender;

  beforeEach(() => {
    isRender = render(
      <BodyLayout.Provider value={{bodyClick: () => {}}}>
        <PanelNav theme={"light"}/>
      </BodyLayout.Provider>
    );
  })

  it("should be defined", () => {
    expect(screen.getByRole("nav")).toBeInTheDocument();
  })

  it("should be click on link '/home'", () => {
    fireEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toMatchObject({ pathname: "/home" });
  })

  it("should be click on link '/courses'", () => {
    fireEvent.click(screen.getByText("Courses"));
    expect(screen.getByText("Courses")).toMatchObject({ pathname: "/courses" });
  })

  it("should be click on link '/careers'", () => {
    fireEvent.click(screen.getByText("Careers"));
    expect(screen.getByText("Careers")).toMatchObject({ pathname: "/careers" });
  })

  it("should be click on link '/blog'", () => {
    fireEvent.click(screen.getByText("Blog"));
    expect(screen.getByText("Blog")).toMatchObject({ pathname: "/blog" });
  })

  it("should be click on link '/about'", () => {
    fireEvent.click(screen.getByText("About Us"));
    expect(screen.getByText("About Us")).toMatchObject({ pathname: "/about" });
  })

  it("should be click on login", () => {
    fireEvent.click(screen.getByRole("loging"));
    expect(screen.getByRole("loging")).toMatchObject({ pathname: "/home" })
  })
})
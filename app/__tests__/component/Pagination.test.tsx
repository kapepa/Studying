import "@testing-library/jest-dom";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import Pagination from "../../component/Pagination";

const setup = ({max = 15, currentPage = 5, changePage = jest.fn(() => {}) }) => {
  return render(<Pagination max={max} currentPage={currentPage} changePage={changePage}/>);
}

describe("Pagination", () => {

  it("should be to defined", () => {
    setup({});
    expect(screen.getByRole("pagination")).toBeInTheDocument();
  })

  it("should be click prev and next" , async () => {
    const cd = jest.fn(() => {});
    const {getByRole, getByText, findByRole} = setup({ currentPage: 5, max: 18, changePage: cd});

    expect(getByText("18")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();

    fireEvent.click(await findByRole("next"));
    expect(cd).toHaveBeenCalledWith(6);

    fireEvent.click(await findByRole("prev"));
    expect(cd).toHaveBeenCalledWith(5);
  })

  it("should be click first and last page" , async () => {
    const cd = jest.fn(() => {});
    const {getByRole, getByText, findByRole, findByText} = setup({ currentPage: 5, max: 18, changePage: cd});

    expect(getByText("18")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();

    fireEvent.click(await findByText("1"));
    expect(cd).toHaveBeenCalledWith(1);

    fireEvent.click(await findByText("18"));
    expect(cd).toHaveBeenCalledWith(18);
  })
})
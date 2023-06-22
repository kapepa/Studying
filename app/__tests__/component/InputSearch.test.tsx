import "@testing-library/jest-dom";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import InputSearch from "../../component/InputSearch";

describe("InputSearch", () => {
  let isRender;
  const mockCd = jest.fn((string: string) => {});
  const mockSearch = "search";

  beforeEach(() => {
    isRender = render(<InputSearch toSearch={mockSearch} cd={mockCd}/>);
  })

  it("should have to loading 'InputSearch'", () => {
    expect(screen.getByRole("input")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it("should be check preset value in input", () => {
    expect(screen.getByRole("input")).toHaveValue(mockSearch);
  })

  it("should be to set new value in input, and send value through cb", async () => {
    const mockValue = "something";
    const { getByRole } = isRender;

    fireEvent.change(getByRole("input"), { target: { value: mockValue } });
    expect(getByRole("input")).toHaveValue(mockValue);

    await waitFor(() => {
      fireEvent.click(getByRole("button"));
      expect(mockCd).toHaveBeenCalledWith(mockValue);
    })
  });
})
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Exhibition from "../../section/Exhibition";
import {LotInterface} from "../../interface/LotInterface";

jest.mock("../../component/Pagination",() => jest.fn(({max, changePage, currentPage}) => {
  return <div data-testid="pagination">Pagination</div>
}))

describe("Exhibition", () => {
  const subject: string = "subject"
  const lot: LotInterface[] = [{ name: "Lot name", price: 28, img: "8411c50b458c1e969e8ca5d03812d711.jpg" }];

  beforeEach(() => {
    render(<Exhibition subject={[subject]} lot={lot} lotLength={lot.length}  step={6}/>);
  })

  it("should be check button to have subject", () => {
    expect(screen.getByText(subject)).toBeInTheDocument();
  })

  it("should be check list gallery", async () => {
    expect(await screen.findByText(/Lot name/i)).toBeInTheDocument();
    expect(await screen.findAllByRole("lot")).toHaveLength(1);
    expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
  })

  it("should be check pagination", async () => {
    let arrLot: LotInterface[] = new Array(15).fill(lot[0])
    render(<Exhibition subject={[subject]} lot={arrLot} lotLength={arrLot.length}  step={6}/>);

    expect(await screen.findByTestId("pagination")).toBeInTheDocument();
  })
})
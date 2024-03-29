import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Acquisition from "../../section/Acquisition";
import axios from "axios";

jest.mock("../../component/InputDefault", () => jest.fn(({ id, type, title, isChange }) => {
  return <div>
    <label htmlFor={id}>{title}</label>
    <input id={id} type={type} onChange={isChange} defaultValue="" data-testid={id}/>
  </div>
}));

jest.mock("axios", () => ({post: jest.fn()}));

describe("Acquisition", () => {
  beforeEach(async () => {
    render(<Acquisition/>)
  })

  it("should be render Acquisition", () => {
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  })

  it("should be change payment", () => {
    fireEvent.click(screen.getByAltText(/visa/i));

    expect(screen.getByAltText(/visa/i)).toHaveClass('radio-pay__image--checked');
  })

  describe('should be test from payment', () => {
    beforeEach(() => {
      fireEvent.change(screen.getByTestId(/number/i), {target: {value: "1234567890123456"}});
      fireEvent.change(screen.getByTestId(/date/i), {target: {value: "1111"}});
      fireEvent.change(screen.getByTestId(/cvc/i), {target: {value: "123"}});
    })

    it("should be validate the inputs of form", () => {
      expect(screen.findByText('1234-5678-9012-3456'));
      expect(screen.findByText('11/11'));
      expect(screen.findByText('123'));
    })

    it('should be submit of form', async () => {
      const post = jest.spyOn(axios, "post").mockImplementationOnce(() => Promise.resolve());
      fireEvent.submit(screen.getByRole('form'))

      await expect(screen.findByText(''));
      await expect(screen.findByText(''));
      await expect(screen.findByText(''));

      expect(post).toHaveBeenCalledTimes(1);
    })
  })
})
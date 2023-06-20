import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Software from "../../section/Software";
import {SoftwareInterface} from "../../interface/SoftwareInterface";

const software: SoftwareInterface[] = [
  {
    img: "doc.svg",
    title: "Online Billing, Invoicing, & Contracts",
    text: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts, financial and legal",
  },
  {
    img: "date.svg",
    title: "Easy Scheduling & Attendance Tracking",
    text: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
  },
  {
    img: "community.svg",
    title: "Customer Tracking",
    text: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
  },
]

describe("Software", () => {
  beforeEach(() => {
    render(<Software software={software}/>)
  })

  it("should be check header", () => {
    expect(screen.getByText(/Cloud Software/i)).toBeInTheDocument();
  })

  it("should be count of software", () => {
    expect(screen.getAllByRole("software")).toHaveLength(software.length);
  })
})
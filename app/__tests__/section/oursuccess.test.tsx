import "@testing-library/jest-dom";
import {render, screen, fireEvent, getByText} from "@testing-library/react";
import OurSuccess from "../../section/OurSuccess";
import {AchievementInterface} from "../../interface/AchievementInterface";

const mockAchievement: AchievementInterface = {students: 15500, success: 75, questions: 35, experts: 26, experience: 16}

describe("OurSuccess", () => {
  beforeEach(() => {
    render(<OurSuccess achievement={mockAchievement}/>)
  })

  it("should be check header", () => {
    expect(screen.getByText(/Our Success/i)).toBeInTheDocument();
  })

  it("should be loading achievement students", () => {
    expect(screen.getByText("16K")).toBeInTheDocument();
  })

  it("should be loading achievement success", () => {
    expect(screen.getByText("75")).toBeInTheDocument();
  })

  it("should be loading achievement questions", () => {
    expect(screen.getByText("35")).toBeInTheDocument();
  })

  it("should be loading achievement questions", () => {
    expect(screen.getByText("26")).toBeInTheDocument();
  })

  it("should be loading achievement Years of experience", () => {
    expect(screen.getByText("16")).toBeInTheDocument();
  })
})
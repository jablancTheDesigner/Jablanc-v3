import { render, screen, cleanup } from "@testing-library/react";
import Hero from "../../components/Hero";
import "@testing-library/jest-dom/extend-expect";

describe("Hero", () => {
  it("should have hero heading render", () => {
    render(<Hero />);
    const heading = screen.getByTestId("heading");
    const subHeading = screen.getByTestId("sub-heading");
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });

  it("should have portfolio button render", () => {
    render(<Hero />);
    const workBtn = screen.getByTestId("work-btn");
    expect(workBtn).toBeInTheDocument();
  });
});

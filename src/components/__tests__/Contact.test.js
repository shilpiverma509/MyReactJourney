import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us test page", function () {
  it("should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should load button inside the contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load button inside the contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes in the Contact us component", () => {
    render(<Contact />);

    //Querying the contact
    const inputBoxes = screen.getAllByRole("textbox");
    console.log("Input boxes loaded", inputBoxes.length);

    //assertion
    expect(inputBoxes.length).not.toBe(3);
    //role of  a input is textbox
  });
});

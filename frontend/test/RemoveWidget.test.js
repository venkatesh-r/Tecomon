import "@testing-library/jest-dom";
import axios from "axios";
import { render, fireEvent, screen } from "@testing-library/react";
import RemoveWidget from "../components/RemoveWidget";

describe("RemoveWidget component", () => {
  it("delete widget axios call", async () => {
    const mockOnRemove = jest.fn();
    render(<RemoveWidget id={123} onRemove={mockOnRemove} />);

    jest.mock("axios");

    const button = screen.getByText("Delete");
    fireEvent.click(button);

    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5000/widgets/123"
    );

    await waitFor(() => {
      expect(mockOnRemove).toHaveBeenCalled();
    });
  });
});

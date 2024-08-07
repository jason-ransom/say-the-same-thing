import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, beforeEach, test, vi, Mock } from "vitest";
import RandomWordGetter from "./RandomWordGetter";
import { RandomWordResponse } from "@/types";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ word: "apple" } as RandomWordResponse),
  }),
) as Mock;

describe("RandomWordGetter", () => {
  beforeEach(() => {
    (fetch as Mock).mockClear();
  });

  test("displays a word fetched from the API", async () => {
    render(<RandomWordGetter />);
    await waitFor(() => expect(screen.getByText("apple")).toBeTruthy());
  });

  test("handles fetch errors gracefully", async () => {
    (fetch as Mock).mockImplementationOnce(() => Promise.reject("API is down"));
    render(<RandomWordGetter />);
    await waitFor(() =>
      expect(screen.getByText(/error fetching the word/i)).toBeTruthy(),
    );
  });
});

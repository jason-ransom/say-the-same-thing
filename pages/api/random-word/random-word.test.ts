import handler from "./random-word";
import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import { vi, describe, it, Mock, expect } from "vitest";

describe("/api/random-word API Endpoint", () => {
  it("should return a random word on success", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(["testword"]),
      }),
    ) as Mock;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ word: "testword" });
  });

  it("should return an error message on fetch failure", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>();
    global.fetch = vi.fn(() => Promise.reject("API is down")) as Mock;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({ error: "Failed to fetch the word" });
  });
});

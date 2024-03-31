import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/items", () => {
    console.log("GET /items");
  }),
];

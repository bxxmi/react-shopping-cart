import { http, HttpResponse } from "msw";

import db from "./db.json";

export const handlers = [
  http.get("/products", () => {
    return HttpResponse.json(db.products);
  }),
  http.get("/carts", () => {
    return HttpResponse.json(db.carts);
  }),
  http.get("/orders", () => {
    return HttpResponse.json(db.orders);
  }),
];

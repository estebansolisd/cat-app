import { render } from "@testing-library/react";
import CarCarousel from "./index";
import items from "./mock.json";
import { Cat } from "../../types";

test("renders the cat table", () => {
  const { baseElement } = render(<CarCarousel items={items as Cat[]} />);
  expect(baseElement).toBeTruthy();
});

import { render, screen } from "@testing-library/react";
import App from "./App";

// Replaces the default create-react-app test, which looked for a
// "learn react" link that this app has never had.
test("renders the homepage hero with the property name", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /colores de fuerteventura/i, level: 1 })
  ).toBeInTheDocument();
});

test("renders the primary navigation", () => {
  render(<App />);
  expect(
    screen.getByRole("navigation", { name: /primary navigation/i })
  ).toBeInTheDocument();
});

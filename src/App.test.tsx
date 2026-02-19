import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders main header", () => {
    render(<App />);
    expect(
      screen.getByText(/todo app/i)
    ).toBeInTheDocument();
  });

  it("adds a new task", async () => {
    const user = userEvent.setup();
    render(<App />);
    const addButton = screen.getByRole("button");
    await user.click(addButton);
    await user.type(
      screen.getByPlaceholderText(/enter the title/i),
      "My Task"
    );

    await user.click(
      screen.getByRole("button", { name: /add/i })
    );

    expect(
      screen.getByText("My Task")
    ).toBeInTheDocument();
  });


it("opens edit screen when edit is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button")); // FAB
  await user.type(
    screen.getByPlaceholderText(/enter the title/i),
    "Edit Me"
  );
  await user.click(
    screen.getByRole("button", { name: /add/i })
  );

  const editButton = screen.getByRole("button", {
    name: /edit/i,
  });

  await user.click(editButton);
  expect(
    screen.getByText(/edit task/i)
  ).toBeInTheDocument();
});

});

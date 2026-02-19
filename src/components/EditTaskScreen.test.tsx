import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditTaskScreen from "./EditTaskScreen";

const task = {
  id: "1",
  title: "Old title",
  description: "Old description",
  status: "pending" as const,
  createdAt: Date.now(),
};

describe("EditTaskScreen", () => {
  it("updates task when form is submitted", async () => {
    const user = userEvent.setup();
    const onUpdate = vi.fn();

    render(
      <EditTaskScreen
        task={task}
        onUpdate={onUpdate}
        onCancel={() => {}}
      />
    );

    const input = screen.getByDisplayValue(
      "Old title"
    );

    await user.clear(input);
    await user.type(input, "Updated title");

    await user.click(
      screen.getByText(/update/i)
    );

    expect(onUpdate).toHaveBeenCalled();
  });
});

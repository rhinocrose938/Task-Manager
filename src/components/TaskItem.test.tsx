import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

const task = {
  id: "1",
  title: "Test task",
  description: "Test description",
  status: "pending" as const,
  createdAt: Date.now(),
};

describe("TaskItem", () => {
  it("renders title and description", () => {
    render(
      <TaskItem
        task={task}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(
      screen.getByText("Test task")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Test description")
    ).toBeInTheDocument();
  });
});

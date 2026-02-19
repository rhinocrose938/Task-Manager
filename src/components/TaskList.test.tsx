import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

const tasks = [
  {
    id: "1",
    title: "Task One",
    description: "First task",
    status: "pending" as const,
    createdAt: Date.now(),
  },
  {
    id: "2",
    title: "Task Two",
    description: "Second task",
    status: "completed" as const,
    createdAt: Date.now(),
  },
];

describe("TaskList", () => {
  it("renders multiple tasks", () => {
    render(
      <TaskList
        tasks={tasks}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(
      screen.getByText("Task One")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Task Two")
    ).toBeInTheDocument();
  });
});

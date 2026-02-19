import { useEffect, useState } from "react";
import type { Task } from "./types/task";
import { loadTasks, saveTasks } from "./utils/storage";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import AddTaskScreen from "./components/AddTaskScreen";
import EditTaskScreen from "./components/EditTaskScreen";
import upArrow from "./assets/upArrow.svg";
import downArrow from "./assets/downArrow.svg";
import styles from "./App.module.scss";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [view, setView] = useState<"list" | "add" | "edit">("list");
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [openSections, setOpenSections] = useState({
    pending: true,
    inprogress: true,
    completed: true,
  });

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "pending",
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, newTask]);
    setView("list");
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => {
      const updated = prev.filter((t) => t.id !== id);

      if (updated.length === 0) {
        localStorage.removeItem("todo_tasks");
      }

      return updated;
    });
  };

  const updateTask = (updated: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setView("list");
  };

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filtered = tasks.filter((t) =>
    (t.title + " " + t.description)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const pending = filtered.filter((t) => t.status === "pending");
  const inProgress = filtered.filter((t) => t.status === "inprogress");
  const completed = filtered.filter((t) => t.status === "completed");

  const pendingCount = tasks.filter((t) => t.status === "pending");
  const inProgressCount = tasks.filter((t) => t.status === "inprogress");
  const completedCount = tasks.filter((t) => t.status === "completed");

  if (view === "add") {
    return <AddTaskScreen onAdd={addTask} onCancel={() => setView("list")} />;
  }

  if (view === "edit" && editingTask) {
    return (
      <EditTaskScreen
        task={editingTask}
        onUpdate={updateTask}
        onCancel={() => setView("list")}
      />
    );
  }

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>TODO APP</div>

      <div className={styles.container}>
        <SearchBar value={search} onChange={setSearch} />

        <div className={styles.section}>
          <div
            className={styles.sectionTitle}
            onClick={() => toggleSection("inprogress")}
          >
            <span className={styles.sectionText}>
              In Progress{" "}
              <span className={styles.sectionCount}>
                ({inProgressCount.length})
              </span>
            </span>
            <img src={openSections.inprogress ? upArrow : downArrow} />
          </div>

          {openSections.inprogress && (
            <TaskList
              tasks={inProgress}
              onDelete={deleteTask}
              onEdit={(task) => {
                setEditingTask(task);
                setView("edit");
              }}
            />
          )}
        </div>

        <div className={styles.section}>
          <div
            className={styles.sectionTitle}
            onClick={() => toggleSection("pending")}
          >
            <span className={styles.sectionText}>
              Pending{" "}
              <span className={styles.sectionCount}>
                ({pendingCount.length})
              </span>
            </span>
            <img src={openSections.pending ? upArrow : downArrow} />
          </div>

          {openSections.pending && (
            <TaskList
              tasks={pending}
              onDelete={deleteTask}
              onEdit={(task) => {
                setEditingTask(task);
                setView("edit");
              }}
            />
          )}
        </div>

        <div className={styles.section}>
          <div
            className={styles.sectionTitle}
            onClick={() => toggleSection("completed")}
          >
            <span className={styles.sectionText}>
              Completed{" "}
              <span className={styles.sectionCount}>
                ({completedCount.length})
              </span>
            </span>
            <img src={openSections.completed ? upArrow : downArrow} />
          </div>

          {openSections.completed && (
            <TaskList
              tasks={completed}
              onDelete={deleteTask}
              onEdit={(task) => {
                setEditingTask(task);
                setView("edit");
              }}
            />
          )}
        </div>
      </div>

      <button className={styles.fab} onClick={() => setView("add")} />
    </div>
  );
}

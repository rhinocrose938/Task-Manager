import type { Task } from "../types/task";

const STORAGE_KEY = "todo_tasks";

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function clearTasks() {
  localStorage.removeItem(STORAGE_KEY);
}

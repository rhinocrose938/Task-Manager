import { AnimatePresence } from "framer-motion";
import type { Task } from "../types/task";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export default function TaskList({
  tasks,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className={styles.taskList}>
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

import { motion } from "framer-motion";
import type { Task } from "../types/task";
import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";
import styles from "./TaskItem.module.scss";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export default function TaskItem({
  task,
  onDelete,
  onEdit,
}: Props) {
  const d = new Date(task.createdAt);

  const weekday = d.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const day = d.getDate();
  const monthYear = d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const date = `${weekday} ${day}, ${monthYear}`;

  const statusLabelMap: Record<
    Task["status"],
    string
  > = {
    pending: "Pending",
    inprogress: "In Progress",
    completed: "Completed",
  };

  return (
    <motion.div
      className={styles.taskCard}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.taskLeft}>
        <div className={styles.avatar}>
          {task.title[0].toUpperCase()}
        </div>

        <div className={styles.taskText}>
          <div className={styles.taskTitle}>
            {task.title}
          </div>

          <div className={styles.taskDesc}>
            {task.description || "No description"}
          </div>

          <div className={styles.taskDate}>
            {date}
          </div>
        </div>
      </div>

      <div className={styles.taskRight}>
        <div className={styles.statusBadge}>
          <span
            className={`${styles.dot} ${
              styles[task.status]
            }`}
          />
          {statusLabelMap[task.status]}
        </div>

        <div className={styles.taskActions}>
          <button
            className={styles.iconBtn}
            onClick={() => onEdit(task)}
          >
            <img src={pencil} alt="edit" />
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => onDelete(task.id)}
          >
            <img src={trash} alt="delete" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

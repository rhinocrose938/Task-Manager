import { useState } from "react";
import type { Task } from "../types/task";
import backPage from "../assets/backPage.svg";
import StatusDropdown from "./StatusDropdown";
import styles from "./EditTaskScreen.module.scss";

interface Props {
  task: Task;
  onUpdate: (task: Task) => void;
  onCancel: () => void;
}

export default function EditTaskScreen({
  task,
  onUpdate,
  onCancel,
}: Props) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] =
    useState(task.description);
  const [status, setStatus] =
    useState(task.status);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    onUpdate({
      ...task,
      title,
      description,
      status,
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <button
          className={styles.backBtn}
          onClick={onCancel}
        >
          <img src={backPage} alt="back" />
        </button>
        <span className={styles.headerTitle}>
          Edit Task
        </span>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <StatusDropdown
          value={status}
          onChange={setStatus}
        />

        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.outline}
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className={styles.primary}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

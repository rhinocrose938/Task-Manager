import { useState } from "react";
import backPage from "../assets/backPage.svg";
import styles from "./AddTaskScreen.module.scss";

interface Props {
  onAdd: (title: string, description: string) => void;
  onCancel: () => void;
}

export default function AddTaskScreen({
  onAdd,
  onCancel,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
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
          Add Task
        </span>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter the title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="Enter the description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
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
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

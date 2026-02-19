import { useState } from "react";
import type { TaskStatus } from "../types/task";
import styles from "./StatusDropdown.module.scss";

import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";

interface Props {
  value: string;
  onChange: (value: TaskStatus) => void;
}

const options = [
  { value: "pending", label: "Pending" },
  { value: "inprogress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

export default function StatusDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className={styles.statusDropdown}>
      <div
        className={styles.dropdownSelected}
        onClick={() => setOpen(!open)}
      >
        <span className={`${styles.dot} ${styles[value]}`} />
        {selected?.label}

        <img
          src={open ? upArrow : downArrow}
          alt="toggle"
          className={styles.caretIcon}
        />
      </div>

      {open && (
        <div className={styles.dropdownMenu}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.dropdownItem} ${
                value === opt.value ? styles.active : ""
              }`}
              onClick={() => {
                onChange(opt.value as TaskStatus);
                setOpen(false);
              }}
            >
              <span className={`${styles.dot} ${styles[opt.value]}`} />
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

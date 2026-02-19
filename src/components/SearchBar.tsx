import styles from "./SearchBar.module.scss";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.searchBar}>
      <span className={styles.searchIcon}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        placeholder="Search To-Do"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

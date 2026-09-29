import styles from "./AnnouncementBar.module.css";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
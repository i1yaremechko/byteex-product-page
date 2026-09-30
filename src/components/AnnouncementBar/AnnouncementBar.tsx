"use client";

import { useEffect, useState } from "react";

import styles from "./AnnouncementBar.module.css";

type AnnouncementBarProps = {
  messages: string[];
  interval?: number;
};

const DESKTOP_QUERY = "(min-width: 768px)";

export function AnnouncementBar({ messages, interval = 4000 }: AnnouncementBarProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (messages.length < 2 || paused) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    let timer: number | undefined;

    const sync = () => {
      window.clearInterval(timer);
      if (!desktop.matches) {
        timer = window.setInterval(
          () => setActive((i) => (i + 1) % messages.length),
          interval,
        );
      }
    };

    sync();
    desktop.addEventListener("change", sync);
    return () => {
      window.clearInterval(timer);
      desktop.removeEventListener("change", sync);
    };
  }, [messages.length, interval, paused]);

  return (
    <div
      className={styles.bar}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className={styles.list}>
        {messages.map((text, i) => (
          <li key={text} className={`${styles.item} ${i === active ? styles.active : ""}`}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
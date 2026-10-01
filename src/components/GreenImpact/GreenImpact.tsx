import Image from "next/image";

import type { ImpactContent } from "@/content/impact";
import styles from "./GreenImpact.module.css";

export function GreenImpact({ title, stats }: ImpactContent) {
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <h2 id="impact-title" className={styles.title}>
        {title}
      </h2>

      <ul className={styles.stats}>
        {stats.map(({ id, icon, value, label, desktopOnly }) => (
          <li key={id} className={`${styles.stat} ${desktopOnly ? styles.desktopOnly : ""}`}>
            <Image src={icon} alt="" width={42} height={42} />
            <p className={styles.value}>{value}</p>
            <p className={styles.label}>{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
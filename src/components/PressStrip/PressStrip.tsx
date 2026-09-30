import Image from "next/image";

import type { PressLogo } from "@/content/hero";
import styles from "./PressStrip.module.css";

type PressStripProps = { label: string; logos: PressLogo[] };

export function PressStrip({ label, logos }: PressStripProps) {
  return (
    <div className={styles.press}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.logos}>
        {logos.map(({ name, src, width, opacity }) => (
          <li key={name}>
            <Image src={src} alt={name} width={width} style={{ height: "auto", opacity }} />
          </li>
        ))}
      </ul>
      {/* Decorative pagination from the design (the strip is not a slider). */}
      <div className={styles.dots} aria-hidden="true">
        <span />
        <span className={styles.active} />
        <span />
      </div>
    </div>
  );
}
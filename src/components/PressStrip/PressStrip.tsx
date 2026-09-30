"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import type { PressLogo } from "@/content/hero";
import styles from "./PressStrip.module.css";

type PressStripProps = { label: string; logos: PressLogo[] };

const TOTAL_DOTS = 3;

export function PressStrip({ label, logos }: PressStripProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (!listRef.current) return;

    const container = listRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll <= 0) return;

    const progress = container.scrollLeft / maxScroll;
    const newIndex = Math.min(
      Math.max(Math.round(progress * (TOTAL_DOTS - 1)), 0),
      TOTAL_DOTS - 1
    );

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToDot = (index: number) => {
    if (!listRef.current) return;

    const container = listRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = (maxScroll / (TOTAL_DOTS - 1)) * index;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className={styles.press}>
      <p className={styles.label}>{label}</p>

      <ul ref={listRef} onScroll={handleScroll} className={styles.logos}>
        {logos.map(({ name, src, width, opacity }) => (
          <li key={name} className={styles.logoItem}>
            <Image
              src={src}
              alt={name}
              width={width}
              className={styles.logoImage}
              style={{ opacity }}
            />
          </li>
        ))}
      </ul>

      <div className={styles.dots} role="tablist" aria-label="Press logos pagination">
        {Array.from({ length: TOTAL_DOTS }).map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => scrollToDot(index)}
          />
        ))}
      </div>
    </div>
  );
}
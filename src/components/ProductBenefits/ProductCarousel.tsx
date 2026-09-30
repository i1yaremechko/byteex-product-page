"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProductSlide } from "@/content/benefits";
import styles from "./ProductCarousel.module.css";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={direction === "left" ? "M7 1 1 7.5 7 14" : "M1 1l6 6.5L1 14"} />
    </svg>
  );
}

export function ProductCarousel({ slides }: { slides: ProductSlide[] }) {
  const [active, setActive] = useState(0);
  const go = (step: number) => setActive((i) => (i + step + slides.length) % slides.length);

  return (
    <div>
      <div className={styles.carousel} role="group" aria-roledescription="carousel" aria-label="Products">
        <div className={styles.frame}>
          {slides.map((slide, i) => (
            <Image
              key={slide.name}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 428px) 303px, 72vw"
              className={styles.slide}
              hidden={i !== active}
            />
          ))}

          <div className={styles.thumbs}>
            {slides.map((slide, i) => (
              <button
                key={slide.name}
                type="button"
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={slide.name}
                aria-current={i === active}
              >
                <Image src={slide.src} alt="" fill sizes="22px" />
              </button>
            ))}
          </div>
        </div>

        <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => go(-1)} aria-label="Previous product">
          <Chevron direction="left" />
        </button>
        <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => go(1)} aria-label="Next product">
          <Chevron direction="right" />
        </button>
      </div>

      <p className={styles.caption} aria-live="polite">
        {slides[active].name}
      </p>
    </div>
  );
}
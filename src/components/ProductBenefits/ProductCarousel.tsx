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

type ProductCarouselProps = { slides: ProductSlide[]; initialSlide?: number };

export function ProductCarousel({ slides, initialSlide = 0 }: ProductCarouselProps) {
  const [active, setActive] = useState(initialSlide);
  const go = (step: number) => setActive((i) => (i + step + slides.length) % slides.length);

  return (
    <div>
      <div className={styles.carousel} role="group" aria-roledescription="carousel" aria-label="Products">
        <div className={styles.frame}>
          {slides.map((slide, i) => (
            <Image
              key={slide.id}
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
                key={slide.id}
                type="button"
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`${slide.name}, ${i + 1} of ${slides.length}`}
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
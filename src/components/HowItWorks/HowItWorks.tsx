"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import type { HowItWorksContent } from "@/content/how-it-works";
import styles from "./HowItWorks.module.css";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={direction === "left" ? "M7 1 1 7.5 7 14" : "M1 1l6 6.5L1 14"} />
    </svg>
  );
}

export function HowItWorks({ title, steps, cta }: HowItWorksContent) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  function updateEdges() {
    const track = trackRef.current;
    if (!track) return;
    setEdge({
      start: track.scrollLeft <= 1,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
    });
  }

  function scrollByStep(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * (track.clientWidth + gap),
      behavior: reduced ? "auto" : "smooth",
    });
  }

  return (
    <section className={styles.section} aria-labelledby="how-title">
      <h2 id="how-title" className={styles.title}>
        {title}
      </h2>

      <div className={styles.carousel}>
        <ul ref={trackRef} className={styles.track} aria-label={title} onScroll={updateEdges}>
          {steps.map((step) => (
            <li
              key={step.id}
              className={`${styles.card} ${step.highlighted ? styles.highlighted : ""}`}
            >
              <span className={styles.icon}>
                <Image src={step.icon} alt="" width={step.iconWidth} style={{ height: "auto" }} />
              </span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>
                {step.mobileText ? (
                  <>
                    <span className={styles.mobileOnly}>{step.mobileText}</span>
                    <span className={styles.desktopOnly}>{step.text}</span>
                  </>
                ) : (
                  step.text
                )}
              </p>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          onClick={() => scrollByStep(-1)}
          disabled={edge.start}
          aria-label="Previous step"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => scrollByStep(1)}
          disabled={edge.end}
          aria-label="Next step"
        >
          <Chevron direction="right" />
        </button>
      </div>

      <div className={styles.cta}>
        <CtaBlock {...cta} />
      </div>
    </section>
  );
}
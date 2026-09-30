"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import { CarouselArrow } from "@/components/ui/CarouselArrow/CarouselArrow";
import { StarRating } from "@/components/ui/StarRating/StarRating";
import type { FansContent } from "@/content/fans";
import styles from "./FanReviews.module.css";

export function FanReviews({ title, intro, photos, reviews, cta }: FansContent) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const last = reviews.length - 1;

  function stepWidth(track: HTMLElement) {
    const card = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    return (card?.offsetWidth ?? track.clientWidth) + gap;
  }

  function handleScroll() {
    const track = trackRef.current;
    if (track) setActive(Math.round(track.scrollLeft / stepWidth(track)));
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: Math.min(Math.max(index, 0), last) * stepWidth(track),
      behavior: reduced ? "auto" : "smooth",
    });
  }

  return (
    <section className={styles.section} aria-labelledby="fans-title">
      <div className={styles.intro}>
        <h2 id="fans-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.text}>{intro}</p>
      </div>

      <ul className={styles.photos} aria-label="Photos from our customers">
        {photos.map((photo) => (
          <li
            key={photo.id}
            className={styles.photo}
            style={{ "--desktop-order": photo.desktopOrder } as CSSProperties}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 9vw, 25vw" />
          </li>
        ))}
      </ul>

      <div className={styles.reviews}>
        <ul ref={trackRef} className={styles.track} aria-label="Customer reviews" onScroll={handleScroll}>
          {reviews.map((review) => (
            <li
              key={review.id}
              className={styles.card}
              style={{ "--desktop-order": review.desktopOrder } as CSSProperties}
            >
              <div className={styles.header}>
                <span className={styles.avatar} aria-hidden="true" />
                <div>
                  <div className={styles.stars}>
                    <StarRating rating={review.rating} size={10} gap={1} />
                  </div>
                  <p className={styles.name}>{review.name}</p>
                </div>
              </div>
              <p className={styles.review}>{review.text}</p>
            </li>
          ))}
        </ul>

        <CarouselArrow
          direction="prev"
          label="Previous review"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className={styles.prev}
        />
        <CarouselArrow
          direction="next"
          label="Next review"
          onClick={() => goTo(active + 1)}
          disabled={active === last}
          className={styles.next}
        />
      </div>

      <div className={styles.dots}>
        {reviews.map((review, i) => (
          <button
            key={review.id}
            type="button"
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1} of ${reviews.length}`}
            aria-current={i === active}
          />
        ))}
      </div>

      <div className={styles.cta}>
        <CtaBlock {...cta} />
      </div>
    </section>
  );
}
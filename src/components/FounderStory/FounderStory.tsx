import Image from "next/image";

import type { FounderContent, FounderPhoto } from "@/content/founder";
import styles from "./FounderStory.module.css";

type FrameProps = FounderPhoto & { className: string; sizes: string };

function Frame({ src, alt, focus, className, sizes }: FrameProps) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: focus }}
      />
    </figure>
  );
}

export function FounderStory({ title, photos, paragraphs }: FounderContent) {
  return (
    <section className={styles.section} aria-labelledby="founder-title">
      <h2 id="founder-title" className={styles.title}>
        {title}
      </h2>

      <div className={styles.collage}>
        <Frame {...photos.center} className={styles.center} sizes="(min-width: 428px) 240px, 56vw" />
        <Frame {...photos.topLeft} className={styles.topLeft} sizes="(min-width: 428px) 102px, 24vw" />
        <Frame {...photos.bottomRight} className={styles.bottomRight} sizes="(min-width: 428px) 110px, 26vw" />
      </div>

      <div className={styles.story}>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}
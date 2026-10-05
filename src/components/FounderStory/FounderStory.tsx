import Image from "next/image";

import { CtaButton } from "@/components/ui/CtaButton/CtaButton";
import type { FounderContent, FounderPhoto } from "@/content/founder";
import styles from "./FounderStory.module.css";

type FrameProps = FounderPhoto & { className: string; sizes: string };

function Frame({ src, desktopSrc, alt, focus, className, sizes }: FrameProps) {
  const fit = { objectFit: "cover", objectPosition: focus } as const;
  return (
    <figure className={`${styles.frame} ${className}`}>
      <Image
        className={desktopSrc ? styles.mobileOnly : undefined}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={fit}
      />
      {desktopSrc && (
        <Image className={styles.desktopOnly} src={desktopSrc} alt={alt} fill sizes={sizes} style={fit} />
      )}
    </figure>
  );
}

export function FounderStory({ title, photos, paragraphs, cta }: FounderContent) {
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

      <div className={styles.desktopCta}>
        <CtaButton href={cta.href}>{cta.label}</CtaButton>
      </div>
    </section>
  );
}

import Image from "next/image";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import { CtaButton } from "@/components/ui/CtaButton/CtaButton";
import type { CollectionContent, CollectionPhoto } from "@/content/collection";
import styles from "./Collection.module.css";

type FrameProps = CollectionPhoto & { className: string; sizes: string };

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

export function Collection({
  title,
  text,
  mobileText,
  photos,
  payments,
  paymentsAlt,
  badges,
  cta,
}: CollectionContent) {
  return (
    <section className={styles.section} aria-labelledby="collection-title">
      <h2 id="collection-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.text}>
        <span className={styles.mobileOnly}>{mobileText}</span>
        <span className={styles.desktopOnly}>{text}</span>
      </p>

      {/* The collage is built from three photos; on mobile the CTA is laid over its cream fade. */}
      <div className={styles.stage}>
        <div className={styles.collage}>
          <span className={`${styles.band} ${styles.bandLeft}`} aria-hidden="true" />
          <span className={`${styles.band} ${styles.bandRight}`} aria-hidden="true" />
          <Frame {...photos.left} className={styles.left} sizes="(min-width: 1024px) 210px, 22vw" />
          <Frame {...photos.center} className={styles.center} sizes="(min-width: 1024px) 250px, 34vw" />
          <Frame {...photos.right} className={styles.right} sizes="(min-width: 1024px) 210px, 22vw" />
        </div>
        <div className={`${styles.cta} ${styles.mobileOnly}`}>
          <CtaBlock {...cta} />
        </div>
      </div>

      {/* Desktop: plain button, payment methods and trust badges instead of the stars line. */}
      <div className={styles.desktopCta}>
        <CtaButton href={cta.href}>{cta.label}</CtaButton>
        <Image className={styles.payments} src={payments} alt={paymentsAlt} />
      </div>

      <ul className={styles.badges}>
        {badges.map(({ id, icon, text }) => (
          <li key={id} className={styles.badge}>
            <Image src={icon} alt="" width={33} height={33} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

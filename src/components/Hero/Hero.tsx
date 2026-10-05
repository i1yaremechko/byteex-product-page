import Image from "next/image";

import { PressStrip } from "@/components/PressStrip/PressStrip";
import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import { CtaButton } from "@/components/ui/CtaButton/CtaButton";
import type { GalleryImage, HeroContent } from "@/content/hero";
import styles from "./Hero.module.css";

type PhotoProps = GalleryImage & {
  className: string;
  sizes: string;
  priority?: boolean;
};

function Photo({ src, alt, className, sizes, priority }: PhotoProps) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </figure>
  );
}

export function Hero({ content }: { content: HeroContent }) {
  const { gallery, benefits, cta, review, desktopReview } = content;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        {content.title}
      </h1>

      <div className={styles.gallery}>
        <span className={`${styles.band} ${styles.bandLeft}`} aria-hidden="true" />
        <span className={`${styles.band} ${styles.bandRight}`} aria-hidden="true" />
        <Photo {...gallery.left} className={styles.left} sizes="(min-width: 428px) 100px, 24vw" />
        <Photo
          {...gallery.center}
          className={styles.center}
          sizes="(min-width: 428px) 140px, 36vw"
          priority
        />
        <Photo {...gallery.right} className={styles.right} sizes="(min-width: 428px) 100px, 24vw" />
      </div>

      <ul className={styles.benefits}>
        {benefits.map(({ icon, text }) => (
          <li key={text} className={styles.benefit}>
            <span className={styles.icon}>
              <Image src={icon} alt="" unoptimized />
            </span>
            <p className={styles.benefitText}>{text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <CtaButton href={cta.href}>{cta.label}</CtaButton>
      </div>

      <div className={`${styles.review} ${styles.mobileOnly}`}>
        <ReviewCard {...review} />
      </div>
      <div className={`${styles.review} ${styles.desktopOnly}`}>
        <ReviewCard {...desktopReview} />
      </div>

      <div className={styles.press}>
        <PressStrip {...content.press} />
      </div>
    </section>
  );
}

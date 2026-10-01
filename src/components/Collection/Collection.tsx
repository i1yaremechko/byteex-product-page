import Image from "next/image";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import { CtaButton } from "@/components/ui/CtaButton/CtaButton";
import type { CollectionContent } from "@/content/collection";
import styles from "./Collection.module.css";

export function Collection({
  title,
  text,
  mobileText,
  mobileImage,
  desktopImage,
  imageAlt,
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

      <div className={styles.stage}>
        <Image
          className={styles.mobileImage}
          src={mobileImage}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 1px, 100vw"
        />
        <Image className={styles.desktopImage} src={desktopImage} alt={imageAlt} />
        <div className={`${styles.cta} ${styles.mobileOnly}`}>
          <CtaBlock {...cta} />
        </div>
      </div>

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
import Image from "next/image";

import { ProductCarousel } from "./ProductCarousel";
import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import wave from "@/assets/images/vector-88.png";
import type { BenefitsContent } from "@/content/benefits";
import styles from "./ProductBenefits.module.css";

export function ProductBenefits({ title, slides, initialSlide, benefits, cta }: BenefitsContent) {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.wave} aria-hidden="true">
        <Image
          src={wave}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      <h2 id="benefits-title" className={styles.title}>
        {title}
      </h2>

      <ProductCarousel slides={slides} initialSlide={initialSlide} />

      <ul className={styles.list}>
        {benefits.map(({ icon, title: name, text }) => (
          <li key={name} className={styles.item}>
            <span className={styles.icon}>
              <Image src={icon} alt="" unoptimized />
            </span>
            <h3 className={styles.itemTitle}>{name}</h3>
            <p className={styles.itemText}>{text}</p>
          </li>
        ))}
      </ul>

      <CtaBlock {...cta} />
    </section>
  );
}
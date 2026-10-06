import Image from "next/image";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import type { BenefitsContent } from "@/content/benefits";
import { ProductCarousel } from "./ProductCarousel";
import styles from "./ProductBenefits.module.css";

export function ProductBenefits({ title, wave, slides, initialSlide, benefits, cta }: BenefitsContent) {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.wave} aria-hidden="true">
        <Image
          src={wave.src}
          alt={wave.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      <h2 id="benefits-title" className={styles.title}>
        {title}
      </h2>

      <div className={styles.carouselArea}>
        <ProductCarousel slides={slides} initialSlide={initialSlide} />
      </div>

      <ul className={styles.list}>
        {benefits.map(({ icon, iconWidth, desktopIcon, title: name, text }) => (
          <li key={name} className={styles.item}>
            <span className={styles.icon}>
              <Image
                className={desktopIcon ? styles.mobileOnly : undefined}
                src={icon}
                alt=""
                width={iconWidth}
                style={{ height: "auto" }}
                unoptimized
              />
              {desktopIcon && (
                <Image
                  className={styles.desktopOnly}
                  src={desktopIcon}
                  alt=""
                  width={iconWidth}
                  style={{ height: "auto" }}
                  unoptimized
                />
              )}
            </span>
            <h3 className={styles.itemTitle}>{name}</h3>
            <p className={styles.itemText}>{text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <CtaBlock {...cta} />
      </div>
    </section>
  );
}

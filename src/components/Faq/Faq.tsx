import Image from "next/image";

import { CtaBlock } from "@/components/CtaBlock/CtaBlock";
import type { FaqContent } from "@/content/faq";
import styles from "./Faq.module.css";

export function Faq({ title, items, photos, cta }: FaqContent) {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.layout}>
        <div>
          <h2 id="faq-title" className={styles.title}>
            {title}
          </h2>

          <div className={styles.list}>
            {items.map((item, i) => (
              <details key={item.id} name="faq" className={styles.item} open={i === 0}>
                <summary className={styles.summary}>
                  <span className={styles.question}>{item.question}</span>
                  <svg className={styles.icon} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 9h16" />
                    <path className={styles.vertical} d="M9 1v16" />
                  </svg>
                </summary>
                <p className={styles.answer}>
                  {item.mobileAnswer ? (
                    <>
                      <span className={styles.mobileOnly}>{item.mobileAnswer}</span>
                      <span className={styles.desktopOnly}>{item.answer}</span>
                    </>
                  ) : (
                    item.answer
                  )}
                </p>
              </details>
            ))}
          </div>

          <div className={styles.cta}>
            <CtaBlock {...cta} />
          </div>
        </div>

        <div className={styles.collage}>
          <span className={`${styles.panel} ${styles.panelLeft}`} aria-hidden="true" />
          <span className={`${styles.panel} ${styles.panelRight}`} aria-hidden="true" />
          <Image className={styles.top} src={photos.top.src} alt={photos.top.alt} />
          <Image className={styles.center} src={photos.center.src} alt={photos.center.alt} />
          <Image className={styles.bottom} src={photos.bottom.src} alt={photos.bottom.alt} />
        </div>
      </div>
    </section>
  );
}
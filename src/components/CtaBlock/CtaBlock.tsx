import { CtaButton } from "@/components/ui/CtaButton/CtaButton";
import { StarRating } from "@/components/ui/StarRating/StarRating";
import type { CtaContent } from "@/content/cta";
import styles from "./CtaBlock.module.css";

export function CtaBlock({ label, href, reviews }: CtaContent) {
  return (
    <div className={styles.block}>
      <CtaButton href={href}>{label}</CtaButton>
      <p className={styles.reviews}>
        <StarRating rating={reviews.rating} size={14} gap={3} />
        <span>{reviews.label}</span>
      </p>
    </div>
  );
}
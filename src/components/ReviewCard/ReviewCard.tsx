import Image, { type StaticImageData } from "next/image";

import { StarRating } from "@/components/ui/StarRating/StarRating";
import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  name: string;
  avatar: StaticImageData;
  rating: number;
  label: string;
  text: string;
};

export function ReviewCard({ name, avatar, rating, label, text }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt={`Photo of ${name}`}
        width={40}
        height={40}
      />
      <div>
        <div className={styles.rating}>
          <StarRating rating={rating} />
          <span className={styles.label}>{label}</span>
        </div>
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
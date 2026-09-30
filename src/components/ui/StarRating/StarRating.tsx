import styles from "./StarRating.module.css";

type StarRatingProps = {
  rating?: number;
  size?: number;
  gap?: number;
};

export function StarRating({ rating = 5, size = 11, gap = 1.5 }: StarRatingProps) {
  return (
    <span className={styles.stars} style={{ gap }} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i < rating ? styles.on : styles.off}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}
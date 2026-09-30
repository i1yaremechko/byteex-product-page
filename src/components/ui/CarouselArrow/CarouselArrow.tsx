import styles from "./CarouselArrow.module.css";

type CarouselArrowProps = {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export function CarouselArrow({ direction, label, onClick, disabled, className = "" }: CarouselArrowProps) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={direction === "prev" ? "M7 1 1 7.5 7 14" : "M1 1l6 6.5L1 14"} />
      </svg>
    </button>
  );
}
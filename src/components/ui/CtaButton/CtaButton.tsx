import Link from "next/link";

import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      <span>{children}</span>
      <svg
        width="24"
        height="10"
        viewBox="0 0 24 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M0 5h23M19 1l4 4-4 4" />
      </svg>
    </Link>
  );
}
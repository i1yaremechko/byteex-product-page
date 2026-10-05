import Link from "next/link";

import styles from "./CtaButton.module.css";
import arrow from "@/assets/icons/arrow.png";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      <span>{children}</span>
      <img src={arrow.src} alt="" aria-hidden="true" />
    </Link>
  );
}
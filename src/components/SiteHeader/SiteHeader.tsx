import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.svg";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Byteex home">
        <Image src={logo} alt="Byteex" priority />
      </Link>
    </header>
  );
}
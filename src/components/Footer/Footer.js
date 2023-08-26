import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <span className={styles["footer-content"]}>
        developed by{" "}
        <a href="https://zvl.dev" className={styles["footer-link"]}>
          zvl.dev ®
        </a>
      </span>
    </footer>
  );
}

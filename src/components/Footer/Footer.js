import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <span className={styles["footer-content"]}>
        developed by{" "}
        <a href="https://jesuszvl.com" className={styles["footer-link"]}>
          jesuszvl ®
        </a>
      </span>
    </footer>
  );
}

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer"]}>
        <p className={styles["footer-content"]}>
          developed by{" "}
          <a href="https://jesuszvl.com" className={styles["footer-link"]}>
            jesuszvl ®
          </a>
        </p>
      </div>
    </div>
  );
}

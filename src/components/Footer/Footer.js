import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer"]}>
        <p className={styles["footer-content"]}>
          developed by{" "}
          <a href="https://makah.co" className={styles["footer-link"]}>
            makahco ®
          </a>
        </p>
      </div>
    </div>
  );
}

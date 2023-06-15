import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles["about-container"]}>
      <h1>Contact Us</h1>
      <div className={styles["about-content"]}>
        <p>
          Ready to start? Send an email to <b>info@makahco.com</b>
        </p>
      </div>
    </div>
  );
}

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles["hero"]}>
      <h1 className={styles["hero-title"]}>
        <span>Ape-pealing</span>
        <span>To The</span>
        <span>Creative You!</span>
      </h1>
      <button className={styles["hero-cta"]}>SIGN UP NOW</button>
    </div>
  );
}

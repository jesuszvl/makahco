import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>About Us</h1>
      <div className={styles["about-content"]}>
        <p>
          Hello! We are a <b>Makahco</b>. A team of talented professionals who
          are passionate about helping our clients bring their creative visions
          to life. Our services include software engineering, music recording,
          and video production
        </p>
        <p>
          Whether you need a{" "}
          <b>
            custom software solution, high-quality audio recording, or
            professional video assets,
          </b>{" "}
          we have the skills and experience to help you go bananas over your
          project.
        </p>
        <p>
          So don&apos;t monkey around, get in touch with us today and let&apos;s
          ape-peal to your creative side!
        </p>
      </div>
    </div>
  );
}

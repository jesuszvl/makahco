import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>About Us</h1>
      <div className={styles["about-content"]}>
        <p>
          Welcome to <b>Makahco!</b> We are a team of talented professionals who
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
          So don't monkey around, get in touch with us today and let's ape-peal
          to your creative side!
        </p>
      </div>
    </div>
  );
}

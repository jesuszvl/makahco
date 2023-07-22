import { useState } from "react";

import LoginModal from "../LoginModal/LoginModal";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero"]}>
        <h1 className={styles["hero-title"]}>
          <span>Mata Al Karma Ahora, Hazlo Con Orden</span>
        </h1>
        <button
          className={styles["hero-cta"]}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          ÚNETE A LA MANADA
        </button>
        <LoginModal
          isOpen={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
}

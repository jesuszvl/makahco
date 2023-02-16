import Image from "next/image";
import styles from "./Hero.module.scss";

import makahcoPic from "../../../public/makahco.png";

export default function Hero() {
  return (
    <div className={styles["hero"]}>
      <Image src={makahcoPic} alt="makahco" width={200} height={230} />
    </div>
  );
}

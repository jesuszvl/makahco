import styles from "./Gallery.module.scss";
import Image from "next/image";

import officePic from "../../../public/office.png";
import outsidePic from "../../../public/outside.png";
import terracePic from "../../../public/terrace.png";

export default function Gallery() {
  return (
    <div className={styles["gallery"]}>
      <h1 className={styles["gallery-title"]}>Welcome to the Jungle</h1>
      <div className={styles["grid"]}>
        <Image className={styles["image"]} src={outsidePic} alt="outside" />
        <Image className={styles["image"]} src={terracePic} alt="terrace" />
        <Image className={styles["image"]} src={officePic} alt="office" />
      </div>
    </div>
  );
}

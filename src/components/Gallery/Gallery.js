import styles from "./Gallery.module.scss";
import Image from "next/image";

export default function Gallery({ title, images }) {
  return (
    <div className={styles["gallery"]}>
      <h1 className={styles["gallery-title"]}>{title}</h1>
      <div className={styles["grid"]}>
        {images.map((img, i) => {
          console.log("i", i);
          console.log("img", img);
          return (
            <Image key={i} className={styles["image"]} src={img} alt={i} />
          );
        })}
      </div>
    </div>
  );
}

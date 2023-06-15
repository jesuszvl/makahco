import Image from "next/image";
import styles from "./ServiceCard.module.scss";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-content"]}>
        <div className={styles["card-main"]}>
          <div className={styles["card-image"]}>
            <Image src={image} width={42} alt={title} />
          </div>
          <h1 className={styles["card-title"]}>{title}</h1>
        </div>

        <p className={styles["card-description"]}>{description}</p>
      </div>
    </div>
  );
}

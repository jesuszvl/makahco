import Image from "next/image";
import Link from "next/link";

import styles from "./ServiceCard.module.scss";

export default function ServiceCard({
  title,
  description,
  image,
  ctaText,
  href,
}) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-content"]}>
        <div className={styles["card-main"]}>
          <div className={styles["card-image"]}>
            <Image src={image} width={42} alt={title} />
          </div>
          <h1 className={styles["card-title"]}>{title}</h1>
        </div>
        <div className={styles["card-action"]}>
          <p className={styles["card-description"]}>{description}</p>
          <Link href={href}>
            <button className={styles["card-button"]}>{ctaText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import styles from "./Gallery.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default function Gallery({ title, images }) {
  return (
    <div className={styles["gallery-container"]}>
      <div className={styles["gallery"]}>
        {images.map((item, index) => {
          return <Image key={index} src={item.src} alt={item.caption} />;
        })}
      </div>
    </div>
  );
}

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
  autoplaySpeed: 3000,
};

export default function Gallery({ title, images }) {
  return (
    <div className={styles["gallery-container"]}>
      <div className={styles["gallery"]}>
        <h1 className={styles["gallery-title"]}>{title}</h1>
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src.src}
                alt={item.caption}
                width="700"
                height="700"
                layout="responsive"
                style={{
                  maxWidth: "700px",
                  width: "100%",
                }}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

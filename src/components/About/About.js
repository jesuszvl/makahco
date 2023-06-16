import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./About.module.scss";

import monkeys from "../../../public/monkeys.jpeg";
import headphones from "../../icons/headphones.png";
import shop from "../../icons/clothes.png";
import blog from "../../icons/blog.png";
import Image from "next/image";

const services = [
  {
    title: "Beats",
    image: headphones,
    ctaText: "TUNE IN!",
    href: "/beats",
    description:
      "Unlock your creativity with our extensive collection of 1000+ beats curated from talented Makahco producers and independent artists. Immerse yourself in the mesmerizing rhythms, whether you're seeking relaxation or in need of the perfect study companion. These beats are not just for personal enjoyment; they are also the ideal tool for crafting that long-awaited demo or unleashing your freestyle skills. Best of all, it's all completely free!",
  },
  {
    title: "Shop",
    image: shop,
    ctaText: "GO SHOPPING!",
    href: "/shop",
    description:
      "Find your ultimate style with our amazing range of trendy clothes and accessories, specially crafted by the talented designers at Makahco. Get ready to go bananas as you browse through our handpicked collection, designed to bring out your unique fashion sense. Enjoy a hassle-free shopping experience with secure purchases and convenient home delivery services.",
  },
  {
    title: "Blog",
    image: blog,
    ctaText: "START READING!",
    href: "/blog",
    description:
      "Explore an abundance of exciting hands-on experiences in our captivating blog. Unleash your next hit with top-notch music production advice, elevate your visual storytelling skills with invaluable tips on video and photo editing and stay ahead of the curve with the latest trends in software engineering. Packed with inspiration and expertise, our community awaits your participation.",
  },
];

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["image-container"]}>
        <Image src={monkeys} layout="fill" objectFit="cover" alt="music" />
      </div>
      <div className={styles["services"]}>
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              ctaText={service.ctaText}
              href={service.href}
            />
          );
        })}
      </div>
    </div>
  );
}

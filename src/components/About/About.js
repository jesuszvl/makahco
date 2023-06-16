import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./About.module.scss";

import headphones from "../../icons/headphones.png";
import shop from "../../icons/clothes.png";
import blog from "../../icons/blog.png";

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
      <h1>About Our Troop</h1>
      <div className={styles["about-content"]}>
        <p>
          Hello! We are a <b>Makahco</b>. A team of talented professionals who
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
          So don&apos;t monkey around, get in touch with us today and let&apos;s
          ape-peal to your creative side!
        </p>
      </div>
    </div>
  );
}

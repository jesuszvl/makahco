import beats from "../../icons/beats.png";
import blog from "../../icons/blog.png";
import shop from "../../icons/clothes.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./About.module.scss";

const services = [
  {
    title: "Beats",
    image: beats,
    ctaText: "DALE PLAY",
    href: "/beats",
    description:
      "¡Dale rienda suelta a tu creatividad con nuestra colección de 1000+ beats seleccionados de talentosos productores de Makahco y artistas independientes! Sumérgete en los ritmos alucinantes, ya sea para relajarte o estudiar. ¡Son ideales para crear demos o soltar tus habilidades de freestyle! ¡Lo mejor? ¡Todo es gratis!",
  },
  {
    title: "Shop",
    image: shop,
    ctaText: "COMPRA YA",
    href: "/shop",
    description:
      "¡Descubre tu estilo único con nuestra alucinante selección de ropa y accesorios de moda, diseñados por los talentosos diseñadores de Makahco! ¡Tómate un tiempo para chacharear entre nuestras piezas escogidas especialmente para ti! Compra sin broncas con seguridad y entrega a domicilio.",
  },
  {
    title: "Blog",
    image: blog,
    ctaText: "EMPIEZA A LEER",
    href: "/blog",
    description:
      "Encuentra consejos de producción musical, tips para mejorar tu narración visual en video y fotografía, y mantente actualizado con las últimas tendencias en ingeniería de software. Únete a nuestra comunidad llena de inspiración y conocimiento",
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
    </div>
  );
}

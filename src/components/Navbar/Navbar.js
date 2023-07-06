import { useState } from "react";
import ReactGA from "react-ga4";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";
import Image from "next/image";
import makahco from "../../icons/makahco.svg";
import classNames from "classnames";
import { righteous } from "../../../fonts";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const links = [
    { name: "Beats", href: "/beats" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Free", href: "/free" },
  ];

  const trackLinkClick = (linkName) => {
    ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
    ReactGA.event({
      category: "Navbar",
      action: `Clicked ${linkName} link`,
    });
  };

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-menu"]}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles["dropdown-menu-link"]}
            onClick={() => {
              trackLinkClick(link.name);
              setIsMenuActive(!isMenuActive);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={makahco} alt="Makahco" width={36} height={36} />
            <span className={classNames([styles.company, righteous.className])}>
              makahco
            </span>
          </div>
        </Link>

        <div className={styles.menu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => trackLinkClick(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={styles["menu-icon"]}
          onClick={() => {
            trackLinkClick("Menu");
            setIsMenuActive(!isMenuActive);
          }}
        >
          {!isMenuActive ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
      {isMenuActive && renderDropdownMenu()}
    </>
  );
};

export default Navbar;

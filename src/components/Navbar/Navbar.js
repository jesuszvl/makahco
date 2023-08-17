import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CloseIcon from "../../icons/CloseIcon";
import makahco from "../../icons/makahco.svg";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./Navbar.module.scss";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const links = [
    { name: "Beats", href: "/beats" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
  ];

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-menu"]}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles["dropdown-menu-link"]}
            onClick={() => {
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
            <span className={styles["company"]}>makahco</span>
          </div>
        </Link>

        <div className={styles.menu}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={styles["menu-icon"]}
          onClick={() => {
            setIsMenuActive(!isMenuActive);
          }}
        >
          {!isMenuActive ? (
            <MenuIcon stroke="white" />
          ) : (
            <CloseIcon stroke="white" />
          )}
        </div>
      </div>
      {isMenuActive && renderDropdownMenu()}
    </>
  );
};

export default Navbar;

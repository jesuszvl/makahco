import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CloseIcon from "../../icons/CloseIcon";
import makahco from "../../icons/makahco.svg";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={makahco} alt="Makahco" width={36} height={36} />
            <span className={styles["company"]}>makah.co</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

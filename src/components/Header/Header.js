import Link from "next/link";

import MenuIcon from "../../icons/MenuIcon";
import styles from "./Header.module.scss";

export default function Header({ showMenu }) {
  return (
    <>
      <div className={styles.container}>
        {showMenu && (
          <div className={styles.menu}>
            <MenuIcon />
          </div>
        )}

        <div className={styles.header}>
          <Link href="/">
            <h1 className={styles.title}>MAKAHCO</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

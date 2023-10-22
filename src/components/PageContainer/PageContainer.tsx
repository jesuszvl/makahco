import styles from "./PageContainer.module.scss";

import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={styles["container"]}>
      <header>
        <span>makahco</span>
      </header>
      <main>{children}</main>
      <footer>
        <span>
          desarrollado por{" "}
          <a href="https://zvl.dev" className={styles["footer-link"]}>
            zvl.dev
          </a>
        </span>
      </footer>
    </div>
  );
};

export default PageContainer;

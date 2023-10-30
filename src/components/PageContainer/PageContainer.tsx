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
    </div>
  );
};

export default PageContainer;

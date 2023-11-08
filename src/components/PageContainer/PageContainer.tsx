import ModalManager from "../Modals/ModalManager/ModalManager";
import styles from "./PageContainer.module.scss";

import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <ModalManager />
      <div className={styles["container"]}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default PageContainer;

import ModalManager from '../Modals/ModalManager/ModalManager';
import './PageContainer.css';

import { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <ModalManager />
      <main className="page-container">{children}</main>
    </>
  );
};

export default PageContainer;

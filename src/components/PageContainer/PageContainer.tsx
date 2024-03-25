import { useModalStore } from '../../store/modalStore';
import MenuModal from '../Modals/MenuModal/MenuModal';

import './PageContainer.css';

import { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  const { isOpen } = useModalStore();

  return (
    <>
      <MenuModal isOpen={isOpen} />
      <main className="page-container">{children}</main>
    </>
  );
};

export default PageContainer;

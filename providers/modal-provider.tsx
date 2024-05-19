'use client';

import CoverImageModal from '@/components/modals/cover-image-modal';
import SettingsModal from '@/components/modals/settings-modal';
import React, { FC, useEffect, useState } from 'react';

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <React.Fragment>
      <SettingsModal />
      <CoverImageModal />
    </React.Fragment>
  );
};

export default ModalProvider;

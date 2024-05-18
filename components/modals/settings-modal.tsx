'use client';

import React, { FC } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useSettings } from '@/hooks/use-settings';

interface SettingsModalProps {}

const SettingsModal: FC<SettingsModalProps> = ({}) => {
  const setting = useSettings();

  return <Dialog open={setting.isOpen} onOpenChange={setting.onClose}></Dialog>;
};

export default SettingsModal;

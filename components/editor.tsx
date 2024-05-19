'use client';

import React, { FC } from 'react';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useTheme } from 'next-themes';
import { useEdgeStore } from '@/lib/edgestore';

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor: FC<EditorProps> = ({ onChange, initialContent, editable }) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });

    return response.url;
  };

  return <div></div>;
};

export default Editor;

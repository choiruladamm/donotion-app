'use client';

import React, { FC, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useSearch } from '@/hooks/use-search';

interface SearchCommandProps {}

const SearchCommand: FC<SearchCommandProps> = ({}) => {
  const { user } = useUser();
  const router = useRouter();
  // const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  return <div>SearchCommand</div>;
};

export default SearchCommand;

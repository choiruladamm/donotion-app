'use client';

import { SignOutButton, useUser } from '@clerk/clerk-react';
import React, { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { ChevronsLeftRight } from 'lucide-react';

interface UserItemProps {}

const UserItem: FC<UserItemProps> = ({}) => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className='flex items-center text-sm p-3 w-full hover:bg-primary/5'
          role='button'
        >
          <div className='gap-x-2 flex items-center max-w-[150px]'>
            <Avatar className='w-5 h-5'>
              <AvatarImage className='rounded-full' src={user?.imageUrl} />
            </Avatar>
            <span className='text-start font-medium line-clamp-1'>
              {user?.fullName}&apos;s Jotion
            </span>
          </div>
          <ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground w-4 h-4' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-80'
        align='start'
        alignOffset={11}
        forceMount
      >
        <div className='flex flex-col space-y-4 p-2'>
          <p className='text-xs font-medium leading-none text-muted-foreground'>
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className='flex gap-x-2 items-center'>
            <div className='rounded-md bg-secondary p-1'>
              <Avatar className='size-6'>
                <AvatarImage className='rounded-full size-6' src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className='space-y-1'>
              <p className='text-sm line-clamp-1'>
                {user?.fullName}&apos;s Jotion
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='w-full cursor-pointer text-muted-foreground'
          asChild
        >
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;

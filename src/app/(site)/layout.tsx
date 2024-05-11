import React, { FC } from 'react';

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
	return <main>{children}</main>;
};

export default HomeLayout;

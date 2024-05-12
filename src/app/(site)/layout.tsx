import Header from '@/components/landing-page/header';
import React, { FC } from 'react';

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};

export default HomeLayout;

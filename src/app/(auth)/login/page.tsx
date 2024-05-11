'use client'

import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
	const router = useRouter()

	return <div>LoginPage</div>;
};

export default LoginPage;

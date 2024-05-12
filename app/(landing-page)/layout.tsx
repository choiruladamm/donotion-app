import React, { FC } from 'react';

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default LandingPageLayout;

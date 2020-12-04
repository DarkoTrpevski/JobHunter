import React from 'react'
import Header from '../../components/Header/Header'

interface LandingLayoutProps {}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isLandingPage = {true} />
        {children}
    </>
  );
}
export default LandingLayout;
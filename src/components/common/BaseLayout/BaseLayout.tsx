import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation';
import { ContentWrapper } from './BaseLayout.styled';

const BaseLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default BaseLayout;

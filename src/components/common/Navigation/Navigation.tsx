import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import React from 'react';
import { NavigationSC } from './Navigation.styled';
import NavLinks from './components/NavLinks/NavLinks';
import { Container } from '@mui/material';
import Link from '@components/ui/Link/Link';
const Navigation: React.FC = () => {
  return (
    <NavigationSC as="nav">
      <Container className="nav-wrapper">
        <Link href="/">
          <LocalMoviesIcon color="primary" />
        </Link>
        <NavLinks />
      </Container>
    </NavigationSC>
  );
};

export default Navigation;

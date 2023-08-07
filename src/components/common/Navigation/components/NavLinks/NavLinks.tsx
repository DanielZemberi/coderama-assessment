import Link from '@components/ui/Link/Link';
import React from 'react';
import { NavLinksSC } from './NavLinks.styled';
import { Badge } from '@mui/material';
import useMovieFavorite from '@hookes/app/useMovieFavorite';

const NavLinks: React.FC = () => {
  const { favoriteMovies } = useMovieFavorite();

  return (
    <NavLinksSC>
      <Link href="/">Home</Link>
      <Badge badgeContent={favoriteMovies.length} color="error">
        <Link href="/favorite">Favorites</Link>
      </Badge>
    </NavLinksSC>
  );
};

export default NavLinks;

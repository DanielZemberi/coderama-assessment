import Link from '@components/ui/Link/Link';
import React from 'react';
import { NavLinksSC } from './NavLinks.styled';

const NavLinks: React.FC = () => {
  return (
    <NavLinksSC>
      <Link href="/">Home</Link>
      <Link href="/favorite">Favorites</Link>
    </NavLinksSC>
  );
};

export default NavLinks;

import React from 'react';
import { FooterSC } from './Footer.styled';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <FooterSC as="footer">
      <Typography variant="caption">© {new Date().getFullYear()}</Typography>
    </FooterSC>
  );
};

export default Footer;

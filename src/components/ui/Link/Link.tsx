import React from 'react';
import { LinkProps, Link as MuiLink } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link: React.FC<LinkProps> = (props) => {
  const { href, ...rest } = props;

  return <MuiLink {...rest} component={ReactRouterLink} to={href ?? '#'} />;
};

export default Link;

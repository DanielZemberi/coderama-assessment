import { Box } from '@mui/material';
import React from 'react';

interface ErrorProps {
  status: '404' | '500';
  errorText?: string;
}

const Error: React.FC<ErrorProps> = ({ status, errorText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 220px)"
    >
      <h1>{status}</h1>
      {errorText ? <p>{errorText}</p> : null}
    </Box>
  );
};

export default Error;

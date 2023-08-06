import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <Backdrop
      open={loading}
      sx={{ color: '#fff', position: 'absolute', background: 'rgba(0,0,0,0.3)' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;

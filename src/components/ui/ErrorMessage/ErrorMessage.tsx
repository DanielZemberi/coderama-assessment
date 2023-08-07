import { Box, Typography } from '@mui/material';
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { isAxiosError } from 'axios';

interface ErrorMessageProps {
  error: unknown;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const errorMessage = isAxiosError(error)
    ? error.response?.data.Error
    : 'Unknown error occured. Please try again later.';

  return (
    <Box
      sx={{ background: 'white' }}
      padding={4}
      display="flex"
      alignItems="center"
      gap={2}
      justifyContent="center"
    >
      <ErrorIcon color="error" fontSize="large" />
      <Typography>{errorMessage}</Typography>
    </Box>
  );
};

export default React.memo(ErrorMessage);

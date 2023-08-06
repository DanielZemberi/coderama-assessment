import { Typography } from '@mui/material';
import React from 'react';
import { EmptyScreenSC } from './EmptyScreen.styled';

interface EmptyScreenProps {
  search: string;
}

const EmptyScreen: React.FC<EmptyScreenProps> = ({ search }) => {
  if (search === '') {
    return (
      <EmptyScreenSC>
        <Typography variant="h5">Fill in the search box to browse movie database</Typography>
        <img src="/assets/png/search.png" alt="serach" />
      </EmptyScreenSC>
    );
  }
  return (
    <EmptyScreenSC>
      <Typography variant="h5">No results found</Typography>
      <img src="/assets/png/no-results.png" alt="serach" />
    </EmptyScreenSC>
  );
};

export default EmptyScreen;

import { Typography } from '@mui/material';
import React from 'react';

interface InfoRowProps {
  label: string;
  value?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <Typography variant="body1">
      <span style={{ fontWeight: 'bold' }}>{label}: </span>
      {value ?? 'N/A'}
    </Typography>
  );
};

export default InfoRow;

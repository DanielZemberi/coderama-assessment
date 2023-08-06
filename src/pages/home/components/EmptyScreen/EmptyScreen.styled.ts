import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EmptyScreenSC = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};

  img {
    max-width: 100%;
    width: 300px;
    height: auto;
    opacity: 0.2;
  }
`;

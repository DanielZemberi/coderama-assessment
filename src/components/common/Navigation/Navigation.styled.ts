import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationSC = styled(Box)`
  background: ${({ theme }) => theme.palette.background.paper};
  height: 70px;
  position: sticky;
  top: 0;
  padding: 0 ${({ theme }) => theme.spacing(2)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

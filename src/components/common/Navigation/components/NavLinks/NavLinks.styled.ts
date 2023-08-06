import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavLinksSC = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

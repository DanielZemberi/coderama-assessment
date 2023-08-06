import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentWrapper = styled(Container)`
  min-height: calc(100vh - 140px);
  padding: ${({ theme }) => theme.spacing(5)} 0;
`;

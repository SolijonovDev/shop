'use client';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')({
  padding: '20px 0',
  backgroundColor: '#fafafa',
  boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)',
});

const StyledContainer = styled(Container)({
  display: 'flex',
  alighItems: 'center',
  justifyContent: 'space-between',
});

const StyledText = styled(Typography)({
  color: '#737373',
});

const StyledA = styled('a')({
  color: '#aaa',
  textDecoration: 'none',
});

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer maxWidth="lg">
        <StyledText>&copy; 2023 All right reserved.</StyledText>
        <StyledText variant="body1">
          Made by{' '}
          <StyledA href="https://solijonov.vercel.app/" target="_blank">
            Solijonov
          </StyledA>
        </StyledText>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

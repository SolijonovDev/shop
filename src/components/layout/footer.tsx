'use client';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')({
  padding: '20px 0',
  backgroundColor: 'blue',
  boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)',
});

const StyledText = styled(Typography)({
  color: '#fff',
  textAlign: 'center',
});

const StyledA = styled('a')({
  color: '#aaa',
  textDecoration: 'none',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <StyledText variant="body1">
          Made by{' '}
          <StyledA href="https://solijonov.vercel.app/" target="_blank">
            Solijonov
          </StyledA>
        </StyledText>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react';

import { styled } from '@mui/material';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  fontSize: '22px',
  color: '#000',
  fontWeight: 700,
  cursor: 'pointer',
});

export const Logo = () => {
  return <StyledLink href="/">Shopping</StyledLink>;
};

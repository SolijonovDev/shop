'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import { ToggleSidebar } from './ToggleSidebar';
import { Logo } from '@/components/Logo';
import { MenuItems } from './MenuItems';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fafafa',
  color: '#000',
  boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)',
});

const StyledToolBar = styled('div')({
  minHeight: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '-15px',
  '@media (min-width: 600px)': {
    minHeight: '60px',
    marginLeft: 0,
  },
});

export default function Header() {
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container maxWidth="lg">
        <StyledToolBar>
          <Grid container spacing={2}>
            <Grid container item sm={3} sx={{ alignItems: 'center' }}>
              <Grid item sx={{ display: { xs: 'block', sm: 'none' } }}>
                <ToggleSidebar />
              </Grid>
              <Grid item>
                <Logo />
              </Grid>
            </Grid>
            <Grid container spacing={2} item sm={9}>
              <MenuItems/>
            </Grid>
          </Grid>
        </StyledToolBar>
      </Container>
    </StyledAppBar>
  );
}

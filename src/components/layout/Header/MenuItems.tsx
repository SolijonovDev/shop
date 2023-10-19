import Link from 'next/link';

import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '14px',
  color: '#737373',
  fontWeight: 400,
  '&:hover': {
    color: '#000',
  },
}));

const menuItems = [
  {
    id: 1,
    name: 'All',
    href: '/category/all',
  },
  {
    id: 2,
    name: 'Books',
    href: '/category/books',
  },
];

export const MenuItems = () => {
  const matches = useMediaQuery('(min-width:600px)');

  if (!matches) return null;

  return menuItems.map(({ id, name, href }: { id: number; name: String; href: any }) => (
    <Grid item key={id} component="li">
      <StyledLink href={href}>{name}</StyledLink>
    </Grid>
  ));
};

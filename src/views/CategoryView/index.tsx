import React from 'react';
import { Container, Typography } from '@mui/material';

export const CategoryView = ({ data }: { data: any }) => {
  return (
    <div>
      <Container>
        <Typography>Category page</Typography>
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>
              {item.id} {item.title}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

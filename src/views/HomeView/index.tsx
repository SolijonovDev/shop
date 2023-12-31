'use client';
import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';

export const HomeViews = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <div>
      <Container>
        <Typography>Home page</Typography>
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

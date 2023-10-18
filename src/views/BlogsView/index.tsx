'use client';

import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import { Text } from '@/components/Text';
import Link from 'next/link';

export const BlogsView = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <div>
      <Container>
        <Text>BlogViews</Text>
        <Link href="/">Home page</Link>
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

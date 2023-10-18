'use client';
import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Link from 'next/link';

import { Text } from '@/components/Text';

export const HomeViews = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log(data);
  });

  return (
    <div>
      <Container>
        <Text>HomeViews</Text>
        <Link href="/blogs">Blogs page</Link>
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

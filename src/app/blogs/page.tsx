import React, { Fragment } from 'react';
import { BlogsView } from '@/views/BlogsView';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function BlogsPage() {
  const data = await getData();

  return (
    <Fragment>
      <BlogsView data={data} />
    </Fragment>
  );
}

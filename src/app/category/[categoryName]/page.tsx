import { CategoryView } from '@/views/CategoryView';
import { Fragment } from 'react';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <Fragment>
      <CategoryView data={data} />
    </Fragment>
  );
}

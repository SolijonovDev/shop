import { Fragment } from 'react';
import { HomeViews } from '@/views/HomeView';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <Fragment>
      <HomeViews data={data} />
    </Fragment>
  );
}

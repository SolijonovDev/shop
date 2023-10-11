import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Register</Link>
    </div>
  );
}

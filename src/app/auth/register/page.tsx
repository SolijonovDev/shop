import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div>
      RegisterPage page
      <Link href="/">Back</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}

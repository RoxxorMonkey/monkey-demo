import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/banana">
        </Link>
    </div>
  );
};
export default NotFoundPage;

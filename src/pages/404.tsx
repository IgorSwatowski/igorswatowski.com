import Link from 'next/link';

const Custom404 = () => {
  return (
    <main className="not-found container">
      <h1 className="heading-primary">404</h1>
      <h3 className="heading-third">Page Not Found</h3>
      <Link href="/" className="btn-secondary">
        Go back home
      </Link>
    </main>
  );
};

export default Custom404;

import Link from 'next/link';

export default function Pagination(props: any) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === '2'
      ? '/blog'
      : `/blog/page/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <ol>
      <li>
        {prevDisabled && <span>Previous page</span>}
        {!prevDisabled && <Link href={prevPageUrl}>Previous page</Link>}
      </li>
      <li>
        Page {currentPage} of {totalPages}
      </li>
      <li>
        {nextDisabled && <span>Next page</span>}
        {!nextDisabled && <Link href={nextPageUrl}>Next page</Link>}
      </li>
    </ol>
  );
}

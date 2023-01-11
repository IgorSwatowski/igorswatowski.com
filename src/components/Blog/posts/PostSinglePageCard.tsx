import Link from 'next/link';
import { Post } from '../../../types/post';

const PostSinglePageCard = ({ title, content, date, path }) => {
  const shortText = content?.substring(0, 145) + ' ' + '[...]';

  const convertDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const convertedDate = convertDate(date);

  return (
    <Link href={path} className="blog-banner-wrapper-blogs-item">
      <div className="blog-banner-wrapper-blogs-item-heading">
        <h3 className="heading-third"> {title}</h3>
      </div>
      <div className="blog-banner-wrapper-blogs-item-paragraph">
        <p className="paragraph-primary">{shortText}</p>
      </div>
      <div className="line"></div>
      <div className="blog-banner-wrapper-blogs-item-date">
        <p className="paragraph-primary">Date: {convertedDate}</p>
      </div>
      <div className="blog-banner-wrapper-blogs-item-date">
        <p className="paragraph-primary">Category: {convertedDate}</p>
      </div>
      <div className="blog-banner-wrapper-blogs-item-category">
        <p className="paragraph-primary"></p>
      </div>
    </Link>
  );
};

export default PostSinglePageCard;

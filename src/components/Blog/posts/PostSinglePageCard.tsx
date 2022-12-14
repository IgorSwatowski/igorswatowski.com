import Link from 'next/link';
import { Post } from '../../../types/post';

const PostSinglePageCard = ({ id, title, slug, pageContent, createdAt, path }: Post) => {
  const shortText = pageContent?.text?.substring(0, 145) + ' ' + '[...]';

  const convertDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const convertedDate = convertDate(createdAt);

  return (
    <Link href={path} className="blog-banner-wrapper-blogs-item">
      <div className="blog-banner-wrapper-blogs-item-heading">
        <h3 className="heading-third"> {title}</h3>
      </div>
      <div className="blog-banner-wrapper-blogs-item-paragraph">
        <p className="paragraph-primary">{shortText}</p>
      </div>
      <div className="blog-banner-wrapper-blogs-item-date">
        <p className="paragraph-primary">{convertedDate}</p>
      </div>
      <div className="blog-banner-wrapper-blogs-item-category">
        <p className="paragraph-primary"></p>
      </div>
    </Link>
  );
};

export default PostSinglePageCard;

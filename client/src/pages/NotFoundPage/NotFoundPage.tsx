import React from 'react'
import { Link } from 'react-router-dom';

interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <section className = "NotFound">
      <p>
        <span>
          404
        </span>
        <Link to="/">Go back</Link>
      </p>
      <div>
      </div>
    </section>
  );
}
export default NotFoundPage;
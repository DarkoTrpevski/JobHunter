import React from 'react'
import { Link } from 'react-router-dom';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
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
export default NotFound;
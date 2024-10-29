import React from 'react';
import { NavBar, Footer, BlogContent } from '../components';
const BlogContentPage = ({ blogs }) => {
  return (
    <div>
      <NavBar />
      <BlogContent blogs={blogs} />
      <Footer />
    </div>
  );
};

export default BlogContentPage;

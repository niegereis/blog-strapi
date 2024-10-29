import React from 'react';
import { NavBar, Blogs, Footer } from '../components';
const HomePage = ({ blogs }) => {
  return (
    <div>
      <NavBar />
      <Blogs blogs={blogs ? blogs : ''} />
      <Footer />
    </div>
  );
};

export default HomePage;

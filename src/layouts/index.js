import React from 'react';
import Layout from '../components/layout';

export default ({ children, pageContext }) => (
  <Layout photoCarouselSlideCount={pageContext.photoCarouselSlideCount}>
    {children}
  </Layout>
);

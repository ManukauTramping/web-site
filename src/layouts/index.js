import React from 'react';
import Layout from '../components/layout';

export default ({ children, pageContext }) => (
  <Layout withCarousel={pageContext.withCarousel}>
    {children}
  </Layout>
);

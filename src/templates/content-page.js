import React from 'react';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


import Layout from '../components/layout';

const Page = ({ data }) => {
  const json = data.page.content.json

  return (
    <Layout>
       {documentToReactComponents(json)}
    </Layout>
  )
}

export const getPageContent = graphql`
  query getPageContent($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      content {
        json
      }
    }
  }
`

export default Page;

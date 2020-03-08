import React from 'react';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/layout';
import PlannedTrips from '../components/plannedTrips';
import ExecutiveList from '../components/executiveList';
import UsefulLinks from '../components/usefulLinks';
import RichTextDisplay from '../components/richTextDisplay';

const Page = ({ data }) => {
  const json = data.page.content.json

  return (
    <Layout>
      <article className="content">
        <RichTextDisplay json={json} />
      </article>
      {data.page.displayListOfPlannedTrips && 
        <PlannedTrips/>
      }
      {data.page.displayExecutiveList && 
        <ExecutiveList/>
      }
      {data.page.displayListOfLinks && 
        <UsefulLinks/>
      }
    </Layout>
  )
}

export const getPageContent = graphql`
  query getPageContent($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      displayListOfPlannedTrips
      displayExecutiveList
      displayListOfLinks
      content {
        json
      }
    }
  }
`

export default Page;

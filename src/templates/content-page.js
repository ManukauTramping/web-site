import React from 'react';
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/layout';
import PlannedTrips from '../components/plannedTrips';
import ExecutiveList from '../components/executiveList';

const Page = ({ data }) => {
  const json = data.page.content.json
  const displayListOfPlannedTrips = data.page.displayListOfPlannedTrips
  const displayExecutiveList = data.page.displayExecutiveList

  return (
    <Layout>
      <article className="content">
        {documentToReactComponents(json)}
      </article>
      {displayListOfPlannedTrips && 
        <PlannedTrips/>
      }
      {displayExecutiveList && 
        <ExecutiveList/>
      }
    </Layout>
  )
}

export const getPageContent = graphql`
  query getPageContent($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      displayListOfPlannedTrips
      displayExecutiveList
      content {
        json
      }
    }
  }
`

export default Page;

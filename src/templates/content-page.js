import React from 'react';
import { graphql } from "gatsby"

import ExecutiveList from '../components/executiveList';
import PhotoLinks from '../components/photoLinks';
import PlannedTrips from '../components/plannedTrips';
import RichTextDisplay from '../components/richTextDisplay';
import UsefulLinks from '../components/usefulLinks';

const Page = ({ data }) => {
  const json = data.page.content.json
  //console.log(json)

  return (
    <>
      <article className="content">
        <RichTextDisplay json={json} />
      </article>
      {data.page.photoLinks &&
        <PhotoLinks links={data.page.photoLinks} />
      }
      {data.page.displayListOfPlannedTrips && 
        <PlannedTrips className="is-clearfix" />
      }
      {data.page.displayExecutiveList && 
        <ExecutiveList/>
      }
      {data.page.displayListOfLinks && 
        <UsefulLinks/>
      }
    </>
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
      photoLinks {
        caption
        page {
          slug
        }
        photo {
          id
          fluid(maxWidth:800, maxHeight: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default Page;

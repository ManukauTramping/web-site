import React from 'react';
import { graphql } from "gatsby"

import ExecutiveList from '../components/executiveList';
import PhotoLinks from '../components/photoLinks';
import PlannedTrips from '../components/plannedTrips';
import RichTextDisplay from '../components/richTextDisplay';
import UsefulLinks from '../components/usefulLinks';

const Page = ({ data }) => {
  const json = data.page.content.json

  return (
    <>
      <article className="content has-background-info-light">
        <RichTextDisplay json={json} />
      </article>
      <div className={'is-clearfix'}>
        {data.page.photoLinks &&
          <PhotoLinks links={data.page.photoLinks}/>
        }
        {data.page.displayListOfPlannedTrips &&
          <PlannedTrips/>
        }
        {data.page.displayExecutiveList &&
          <ExecutiveList/>
        }
        {data.page.displayListOfLinks &&
          <UsefulLinks/>
        }
      </div>
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

import React from 'react';
import { graphql } from "gatsby"

import ExecutiveList from '../components/executiveList';
import PhotoLinks from '../components/photoLinks';
import PlannedTrips from '../components/plannedTrips';
import RichTextDisplay from '../components/richTextDisplay';
import UsefulLinks from '../components/usefulLinks';
import PhotoCarousel from "../components/photoCarouselSlick";

const Page = ({ data }) => {

  const json = data.page.content.json
  const includedList = data.page.includedList

  const generatedMarkup = includedList === 'Trips'
    ? <PlannedTrips />
    : includedList === 'Committee Members'
      ? <ExecutiveList />
      : includedList === 'Useful Links'
        ? <UsefulLinks />
        : <></>

  return (
    <>
      <section className="content is-clearfix">
        {data.page.photoCarousel &&
          <PhotoCarousel photos={data.page.photoCarousel} />
        }
        <RichTextDisplay json={json} />
      </section>
      <section>
        {data.page.photoLinks &&
          <PhotoLinks links={data.page.photoLinks}/>
        }
        {generatedMarkup}
      </section>
    </>
  )
}

export const getPageContent = graphql`
  query getPageContent($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      includedList
      content {
        json
      }
      photoCarousel {
        id
        title
        fluid(maxWidth:800, maxHeight: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
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

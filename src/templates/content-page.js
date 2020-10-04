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
  const photoLinks = data.page.photoLinks
  const includedList = data.page.includedList


  let generatedMarkup = null
  switch(includedList)
  {
    case 'Trips':
      generatedMarkup = <PlannedTrips />
      break
    case 'Committee Members':
      generatedMarkup = <ExecutiveList />
      break
    case 'Useful Links':
      generatedMarkup = <UsefulLinks />
      break
    default:
      generatedMarkup = <div className={'pb-0'} />
      break
  }

  return (
    <section className="content p-3 has-background-info-light is-size-6">
      <article className="is-clearfix pb-5">
        {data.page.photoCarousel &&
          <PhotoCarousel photos={data.page.photoCarousel} />
        }
        <RichTextDisplay json={json} />
      </article>
      {(photoLinks || generatedMarkup) &&
        <>
          {data.page.photoLinks &&
            <PhotoLinks links={data.page.photoLinks}/>
          }
          {generatedMarkup}
        </>
      }
    </section>
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

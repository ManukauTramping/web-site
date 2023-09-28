import React from 'react';
import { graphql } from "gatsby"

import ExecutiveList from '../components/executiveList';
import PhotoLinks from '../components/photoLinks';
import PlannedTrips from '../components/plannedTrips';
import RichTextDisplay from '../components/richTextDisplay';
import UsefulLinks from '../components/usefulLinks';
import PhotoCarousel from "../components/photoCarouselSlick";

const Page = ({ data }) => {

  const content = data.page.content
  const photoLinks = data.page.photoLinks
  const includedList = data.page.includedList

  let generatedMarkup = null
  switch(includedList)
  {
    case 'Trips':
      generatedMarkup = <PlannedTrips />
      break
    case 'Tuesday Tramps':
      generatedMarkup = <PlannedTrips daysOfWeek={[2]} />
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
    <section className="content p-3 is-size-6">
      <article className="is-clearfix pb-5">
        {data.page.photoCarousel &&
          <PhotoCarousel photos={data.page.photoCarousel} />
        }
        <RichTextDisplay richText={content} />
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
        raw
      }
      photoCarousel {
        id
        title
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 500)
      }
      photoLinks {
        caption
        page {
          slug
        }
        photo {
          id
          gatsbyImageData(layout: CONSTRAINED, width: 800, height: 500)
        }
      }
    }
  }
`

export default Page;

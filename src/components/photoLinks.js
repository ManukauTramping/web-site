import React from 'react';
import { Link } from 'gatsby'
import Img from "gatsby-image";

const PhotoLinks = ({ links }) => {

	return (
    <div className={'columns is-multiline'}>
      {links.map(({ caption, page, photo }) =>
        <div key={caption} className={'column is-half-tablet is-one-quarter-desktop'}>
          <Link key={page.slug} to={`/${page.slug}`}>
            <div className={'is-relative'}>
              <Img key={photo.id} fluid={photo.fluid} title={caption} fadeIn={false} />
              <div className={'is-size-3 has-text-centered has-text-white is-overlay italics-on-hover'}>
                {caption}
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default PhotoLinks;

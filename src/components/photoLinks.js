import React from 'react';
import Img from "gatsby-image";

const PhotoLinks = ({ links }) => {

	return (
    <div className={'columns is-multiline'}>
      {links.map(({ caption, page, photo }) =>
        <div key={caption} className={'column is-half is-relative'}>
          <a key={page.slug} href={`/${page.slug}`}>
            <Img key={photo.id} fluid={photo.fluid} title={caption} fadeIn={false} />
            <div className={'is-size-3 has-text-centered has-text-black'}>
              {caption}
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default PhotoLinks;

import React from 'react';
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const PhotoLinks = ({ links }) => {

	return (
      <div className={'columns is-multiline'}>
        {links.map(({ caption, page, photo }) =>
          <div key={caption} className={'column is-half-tablet is-one-quarter-desktop'}>
            <Link key={page.slug} to={`/${page.slug}`}>
              <div className={'is-relative'}>
                <GatsbyImage
                  image={photo.gatsbyImageData}
                  key={photo.id}
                  title={caption}
                  fadeIn={false}
                  alt={caption}
                />
                <div className={'is-size-3 has-text-centered has-text-white is-overlay photolink-text'}>
                  {caption}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
}

export default PhotoLinks;

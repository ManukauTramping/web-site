import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import './style.scss';

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="background-section"
          fluid={imageData}
          loading="eager">
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
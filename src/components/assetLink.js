import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useStaticQuery, graphql } from "gatsby"
import MediaLink from "./mediaLink"

const AssetLink = ({ id, content }) => {
  const data = useStaticQuery(graphql`
    query AssetQuery {
      allContentfulAsset {
        nodes {
          contentful_id
          file {
            contentType
            url
          }
        }
      }
    }
  `)

  const asset = data.allContentfulAsset.nodes.find(node => node.contentful_id === id)

  return (
    asset
    ? <MediaLink file={asset.file} content={content} />
    : <></>
  )
}

export default AssetLink;

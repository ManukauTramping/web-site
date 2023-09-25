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

  const asset = data.allContentfulAsset.nodes.find(node => id.endsWith(node.contentful_id))

  return (
    asset
    ? <MediaLink file={asset.file} content={content} />
    : <>{renderRichText(content)}</>
  )
}

export default AssetLink;

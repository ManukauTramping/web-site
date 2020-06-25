import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
    : <>{documentToReactComponents(content)}</>
  )
}

export default AssetLink;

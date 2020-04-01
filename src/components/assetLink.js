import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"

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
    ? asset.file.contentType.startsWith('image')
      ? <img src={asset.file.url} alt="">
          {documentToReactComponents(content)}
      </img>
      : <a href={asset.file.url} download type={asset.file.contentType}>
          {documentToReactComponents(content)}
        </a>
    : <>{documentToReactComponents(content)}</>
  )
}

export default AssetLink;

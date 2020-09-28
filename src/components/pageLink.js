import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"

const PageLink = ({ id, content }) => {
  const data = useStaticQuery(graphql`
    query PageLinkQuery {
      allContentfulPage {
        nodes {
          name
          slug
        }
      }
    }
  `)

  return <>{documentToReactComponents(content)}</>

  // const asset = data.allContentfulPage.nodes.find(node => id.endsWith(node.contentful_id))

  // return (
  //   asset
  //   ? <MediaLink file={asset.file} content={content} />
  //   : <>{documentToReactComponents(content)}</>
  // )
}

export default PageLink;

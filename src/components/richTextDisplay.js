import React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import {GatsbyImage} from "gatsby-plugin-image";

const RichTextDisplay = ({ richText }) => {

  const options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: node => {
        const { file } = node.data.target;
        return RenderFileLink(file, node.content[0].value)
      },

      [INLINES.HYPERLINK]: node => {
        const uri = node.data.uri
        const name = node.content[0].value
        return (
          <>
            {uri.startsWith('/')
              ? <Link to={uri} key={uri} className={'link-color'}>{name}</Link>
              : <a href={uri} key={uri} className={'link-color'}>{name}</a>
            }
          </>
        )
      },

      [INLINES.ENTRY_HYPERLINK]: node => {
        const { slug } = node.data.target
        return <Link to={`/${slug}`} key={slug} className={'link-color'}>{node.content[0].value}</Link>
      },

      [INLINES.EMBEDDED_ENTRY]: node => {

      },

      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, file, title } = node.data.target
        if (!gatsbyImageData) {
          return RenderFileLink( file, title )
        }
        return <GatsbyImage image={gatsbyImageData} alt={title} />
      },

      [INLINES.RESOURCE_HYPERLINK]: node => <></>,
      [INLINES.EMBEDDED_RESOURCE]: node => <></>,
      [BLOCKS.EMBEDDED_RESOURCE]: node => <></>,
      [BLOCKS.EMBEDDED_ENTRY]: node => <></>,
    },
  }

  return renderRichText(richText, options)
}

const RenderFileLink = (file, title) => {
  if (file) {
    return <a
      href={file.url}
      className="link-color"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  } else {
    return <></>
  }
}


export default RichTextDisplay
import React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import MediaLink from "./mediaLink"
import AssetLink from "./assetLink"

const RichTextDisplay = ({ richText }) => {

  const options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: node => {
        const target = node.data.target
        return <AssetLink id={target.sys.id} content={node.content[0].value} />
      },

      [INLINES.HYPERLINK]: node => {
        const uri = node.data.uri
        const name = node.content[0].value   //documentToReactComponents(node.content, {})
        return (
          <>
            {uri.startsWith('/')
              ? <Link to={uri} key={uri} className={'link-color'}>{name}</Link>
              : <a href={uri} key={uri} className={'link-color'}>{name}</a>
            }
          </>
        )
      },

      [BLOCKS.EMBEDDED_ASSET]: node => {
        const target = node.data.target
        return <AssetLink id={target.sys.id} content={''} />
      },

      [INLINES.EMBEDDED_RESOURCE]: node => {return <></>},
      [BLOCKS.EMBEDDED_RESOURCE]: node => {return <></>},
      [BLOCKS.EMBEDDED_ENTRY]: node => {return <></>},
      [INLINES.EMBEDDED_ENTRY]: node => {return <></>},
      //   const target = node.data.target
      //   //const contentTypeId = target.sys.contentType.sys.id
      //
      //   // if (contentTypeId === 'information-page')
      //   //   return RenderPageEntry(target.fields)
      //   // else if (contentTypeId === 'contact')
      //   //   return RenderContactEntry(target.fields)
      //   // else
      //     return <></> //documentToReactComponents(node.content)
      // },
    },
  }

  return renderRichText(richText, options)
}

export default RichTextDisplay
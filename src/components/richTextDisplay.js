import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"
import AssetLink from "./assetLink"

const RichTextDisplay = ({ json }) => {
  const options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: node => {
        const target = node.data.target
        if (target.fields)
        {
          const file = target.fields.file['en-NZ']

          return (
            file.contentType.startsWith('image')
            ? <img src={file.url}></img>
            : <a href={file.url} download type={file.contentType}>
                {documentToReactComponents(node.content[0])}
              </a>
          )
        }
        else
        {
          return (
            <AssetLink id={target.sys.id} content={node.content[0]} />
          )
        }
      },
    },
  }

  return documentToReactComponents(json, options)
}

export default RichTextDisplay
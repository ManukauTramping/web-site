import React from "react"
import Link from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"
import MediaLink from "./mediaLink"
import AssetLink from "./assetLink"
import PageLink from "./pageLink"

const RichTextDisplay = ({ json }) => {

  const options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: node => {
        const target = node.data.target
        return target.fields
          ? <MediaLink file={target.fields.file['en-NZ']} content={node.content[0]} />
          : <AssetLink id={target.sys.id} content={node.content[0]} />
      },

      [INLINES.EMBEDDED_ENTRY]: node => {
        const target = node.data.target
        //const contentTypeId = target.sys.contentType.sys.id

        // if (contentTypeId === 'information-page')
        //   return RenderPageEntry(target.fields)
        // else if (contentTypeId === 'contact')
        //   return RenderContactEntry(target.fields)
        // else
          return (null) //documentToReactComponents(node.content)
      },
    },
  }

  return documentToReactComponents(json, options)
}

// const RenderPageEntry = ({ fields }) => {  
//   console.log(fields)
//   const slug = fields.slug['en-NZ']
//   return (//fields.displayPhoto !== undefined
//    <Link to={`/${slug}/`}>
//       {fields.name['en-NZ']}
//     </Link>
//   )
//   // : <Link to={`/${fields.slug['en-NZ']}/`}>
//   //     {fields.name['en-NZ']}
//   //   </Link>
// }


const RenderContactEntry = ({ fields }) => (null)

export default RichTextDisplay
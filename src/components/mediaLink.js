import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const MediaLink = ({ file, content }) => 
    file.contentType.startsWith('image')
      ? <img src={file.url} alt="">
          {renderRichText(content)}
      </img>
      : <a href={file.url} download type={file.contentType} className={'link-color'}>
          {renderRichText(content)}
        </a>

export default MediaLink;

import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const MediaLink = ({ file, content }) => 
    file.contentType.startsWith('image')
      ? <img src={file.url} alt="">
          {documentToReactComponents(content)}
      </img>
      : <a href={file.url} download type={file.contentType}>
          {documentToReactComponents(content)}
        </a>

export default MediaLink;

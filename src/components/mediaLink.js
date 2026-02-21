import React from "react"

const MediaLink = ({ file, content }) => 
    file.contentType.startsWith('image')
      ? <img src={file.url} alt={content} />
      : <a href={file.url} type={file.contentType} className={'link-color'}>
            {content}
        </a>

export default MediaLink;

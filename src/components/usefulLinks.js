import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import './style.scss';

const UsefulLinks = () => {
  const data = useStaticQuery(graphql`
    query UsefulLinkQuery {
      allContentfulLinkCategory(sort: {order: ASC, fields: order}) {
        edges {
          node {
            name
            links {
              url
              name
              description {
                description
              }
            }
          }
        }
      }
    }
  `)

	return (
    <>
      {data.allContentfulLinkCategory.edges.map(({ node }) => 
        <section className="content">
          <h3>{node.name}</h3>
          {node.links.map(({ url, name, description }) => 
            <>
              <a href={url}>{name}</a>
              <p>{description ? description.description : ''}</p>
            </>
          )}
        </section>
      )}
    </>
  )
}

export default UsefulLinks;

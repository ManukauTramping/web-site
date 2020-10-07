import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const ExecutiveList = () => {
  const data = useStaticQuery(graphql`
    query ExecutiveQuery {
      allContentfulExecutiveRole(sort: {order: ASC, fields: rank}) {
        edges {
          node {
            id
            role
            officeHolder {
              phoneNumber
              name
              id
            }
          }
        }
      }
    }
  `)

	return (
    <article className="has-background-success-light">
      <table className="table is-fullwidth is-narrow is-bordered is-striped">
        <tbody>
          {data.allContentfulExecutiveRole.edges
            .filter(({ node }) => node.officeHolder)
            .map(({ node }) =>
              <>
                {node.officeHolder.map(({ name, phoneNumber }) =>
                  <tr key={node.id}>
                    <th style={{width: '30%'}}>{node.role}</th>
                    <td style={{width: '30%'}}>{name}</td>
                    <td>{phoneNumber}</td>
                  </tr>
                )}
              </>
            )}
        </tbody>
      </table>
    </article>
	)
}

export default ExecutiveList;

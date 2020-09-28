import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const ExecutiveList = () => {
  const data = useStaticQuery(graphql`
    query ExecutiveQuery {
      allContentfulContacts(
          sort: {fields: executiveRole___rank, order: ASC}, 
          filter: {executiveRole: {rank: {gt: 0}}}
        ) {
        edges {
          node {
            name
            phoneNumber
            executiveRole {
              role
            }
          }
        }
      }
    }
  `)

	return (
    <table className="table is-fullwidth is-narrow is-bordered is-striped">
      <tbody>
        {data.allContentfulContacts.edges.map(({ node }) => 
          <tr key={node.name}>
            <th>{node.executiveRole.role}</th>
            <td>{node.name}</td>
            <td>{node.phoneNumber}</td>
          </tr>
        )}
      </tbody>
    </table>
	)
}

export default ExecutiveList;

import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import moment from 'moment';

import './style.scss';

const PlannedTrips = () => {
  const data = useStaticQuery(graphql`
    query TripQuery {
      allContentfulTrip(sort: {order: ASC, fields: tripDate}) {
        edges {
          node {
            tripDate
            title
            grade
            fare
            leaders {
              name
              phoneNumber
            }
            meetupDetails {
              meetupDetails
            }
            description {
              json
            }
          }
        }
      }
    }
  `)

	return (
    <>
      {data.allContentfulTrip.edges.map(({ node }) => {
        if (! moment(node.tripDate).isSameOrAfter(moment("2020-01-01")))
          return (null)

        return (
          <article key={ node.tripDate + node.title } className="card">
            {/* <header className="card-header"> */}
              <p className="card-header-title">{moment(node.tripDate).format("MMMM Do YYYY")}</p>
              <p className="card-header-title">{node.title}</p>
            {/* </header> */}
            <section className="card-content">
              <table className="table is-fullwidth is-narrow is-bordered">
                <tbody>
                  <tr>
                    <th>Grade</th>
                    <td>{node.grade}</td>
                  </tr>
                  {node.leaders && 
                    <tr>
                      <th>Leader(s)</th>
                      <td>{node.leaders.map(({name, phoneNumber}) => <p key={ name }>{name} - Phone: {phoneNumber}</p>)}</td>
                    </tr>
                  }
                  <tr>
                    <th>Departs</th>
                    <td>{node.meetupDetails.meetupDetails}</td>
                  </tr>
                  {node.fare && 
                    <tr>
                      <th>Fare</th>
                      <td>{node.fare}</td>
                    </tr>
                  }     
                  { node.description &&
                    <tr>
                      <th>Description</th>
                      <td>{documentToReactComponents(node.description.json)}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </section>
          </article>
        )}
      )}
    </>
	)
}

export default PlannedTrips;

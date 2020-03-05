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
            fare
            leaders {
              name
              phoneNumber
            }
            meetupDetails {
              meetupDetails
            }
            destination {
              grade
              description {
                json
              }
            }
          }
        }
      }
    }
  `)

	return (
    <>
      {data.allContentfulTrip.edges.map(({ node }) => 
          moment(node.tripDate).isSameOrAfter(moment())
          ? <article className="card">
              {/* <header className="card-header"> */}
                <p className="card-header-title">{moment(node.tripDate).format("MMMM Do YYYY")}</p>
                <p className="card-header-title">{node.title}</p>
              {/* </header> */}
              <section className="card-content">
                <table className="table is-fullwidth is-narrow is-bordered">
                  <tbody>
                    <tr>
                      <th>Leaders</th>
                      <td>{node.leaders.map(({name, phoneNumber}) => <><p>{name}</p><p>Phone: {phoneNumber}</p></>)}</td>
                    </tr>
                    <tr>
                      <th>Departs</th>
                      <td>{node.meetupDetails.meetupDetails}</td>
                    </tr>
                    <tr>
                      <th>Fare</th>
                      <td>{node.fare && <p>${node.fare}</p>}</td>
                    </tr>
                    <tr>
                      <th>Grade</th>
                      <td>{node.destination.grade}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{documentToReactComponents(node.destination.description.json)}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </article>
          : <></>
        )}
    </>
	)
}

export default PlannedTrips;

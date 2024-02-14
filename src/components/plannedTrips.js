import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import moment from 'moment';

const PlannedTrips = ({daysOfWeek}) => {
  const data = useStaticQuery(graphql`
    query TripQuery {
      allContentfulTrip(sort: {order: ASC, fields: [tripDate, grade]}) {
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
              raw
            }
          }
        }
      }
    }
  `)

	return (
    <>
      {data.allContentfulTrip.edges.map(({ node }) => {
        const tripDate = moment(node.tripDate)

        if (! tripDate.isSameOrAfter(moment().subtract(2, 'd')))
          return null

        if (daysOfWeek && ! daysOfWeek.includes(tripDate.day()))
          return null

        return (
          <article key={ node.tripDate + node.title } className="card has-background-success-light is-left-text-aligned">
            <div className="card-header-title">{moment(node.tripDate).format("dddd Do MMMM YYYY")}</div>
            <div className="card-header-title">{node.title}</div>
            <section className="card-content">
              <table className="table is-fullwidth is-narrow is-bordered is-striped">
                <tbody>
                  <tr>
                    <th style={{width:'20%'}}>Grade</th>
                    <td>{node.grade}</td>
                  </tr>
                  {node.leaders && 
                    <tr>
                      <th>Leader(s)</th>
                      <td>
                        {node.leaders.map(({name, phoneNumber}) =>
                          <p key={ name }>{name} - Phone: {phoneNumber.replace(/-/gi, ' ')}</p>
                        )}
                      </td>
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
                  {node.description &&
                    <tr className="is-hidden-mobile">
                      <th>Description</th>
                      <td>{renderRichText(node.description)}</td>
                    </tr>
                  }
                </tbody>
              </table>
              {node.description &&
                <table className="is-hidden-tablet table is-fullwidth is-narrow is-bordered is-striped">
                  <tbody>
                    <tr>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>{renderRichText(node.description)}</td>
                    </tr>
                  </tbody>
                </table>
              }
            </section>
          </article>
        )
        }
      )}
    </>
	)
}

export default PlannedTrips;

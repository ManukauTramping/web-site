import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

const PhotoCarousel = ({ name, slideCount }) => {
  const data = useStaticQuery(graphql`
    query photoCarouselQuery {
      allContentfulPhotoCarousel {
        nodes {
          id
          name
          photos {
            id
            title
            fluid(maxWidth:800, maxHeight: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }  
  `)

  const carouselOptions = {
    dots: false,
    infinite: true,
    slidesToShow: slideCount,
    slidesToScroll: slideCount,
    autoplay: true,
    fade: true,
    draggable: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }

  const photoCarousel = data.allContentfulPhotoCarousel.nodes.find(node => node.name === name)
  const images = photoCarousel.photos.map(photo => <Img fluid={photo.fluid} key={photo.id} />)

  return (
    <Slider {...carouselOptions}>
      {images}
    </Slider>
  )
}

export default PhotoCarousel;

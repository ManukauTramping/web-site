import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick"

const PhotoCarousel = ({ name, slideCount, photos }) => {

  const carouselOptions = {
    dots: false,
    infinite: true,
    slidesToShow: slideCount,
    slidesToScroll: slideCount,
    autoplay: true,
    fade: true,
    draggable: true,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }

  const images = photos.map(photo => <GatsbyImage image={photo.gatsbyImageData} key={photo.id}  alt={photo.title}/>)
  const slider = (
    <Slider {...carouselOptions}>
      {images}
    </Slider>
  )

  return (
    <>
      <div className={'floating-element is-hidden-mobile'}>
        {slider}
      </div>
      <div className={'is-hidden-tablet'}>
        {slider}
      </div>
    </>
  )
}

export default PhotoCarousel;

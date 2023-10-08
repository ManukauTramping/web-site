import React from "react"
import Img from "gatsby-image"
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

  const images = photos.map(photo => <Img fluid={photo.fluid} key={photo.id} />)
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

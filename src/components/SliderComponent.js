import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"
import Testimony from "./Testimony"
import { testimonials } from "../messages/testimonials"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SliderContainer = styled.div`
  width: 440px;
`

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Wrapper>
      <SliderContainer>
        <Slider {...settings}>
          {testimonials.map(testimony => {
            return <Testimony key={testimony.name} dog={testimony} />
          })}
        </Slider>
      </SliderContainer>
    </Wrapper>
  )
}

export default SliderComponent

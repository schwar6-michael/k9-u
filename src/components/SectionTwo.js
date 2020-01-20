import React, { useState } from "react"
import styled from "styled-components"
import { testimonials } from "../messages/testimonials"
import Testimony from "./Testimony"
import SliderComponent from "../components/SliderComponent"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 100px 0;
  .slick-arrow {
    background: transparent;
  }
  .slick-arrow:hover {
    background: transparent;
  }
  .slick-next:before {
    font-size: 50px;
    line-height: 1;
    opacity: 0.75;
    color: #53924f;
    -webkit-font-smoothing: antialiased;
    margin-left: 5px;
  }
  .slick-prev:before {
    margin-left: -40px;
    font-size: 50px;
    line-height: 1;
    opacity: 0.75;
    color: #53924f;
    -webkit-font-smoothing: antialiased;
  }
  #pawPrint {
    position: absolute;
    top: 200px;
    right: -300px;
    z-index: -1;
    opacity: 0.4;
    width: 60%;
    transform: rotate(20deg);
  }
  #topIndex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .random {
    border: 1px solid;
    width: 100%;
  }
  @media (max-width: 900px) {
    padding: 100px 30px;
  }
`

const Button = styled.button`
  margin-top: 80px;
  height: 40px;
  background: #53924f;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  width: 300px;
  font-family: "Roboto", sans-serif;
  padding-top: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms ease-out;
  &:hover {
    transform: scale(1.02);
    background: hsl(116, 30%, 34%);
  }
`

const TestimonyContainer = styled.div`
  display: flex;
  align-items: center;
  .testimonials {
    transition: 200ms ease-out;
    position: relative;
    display: flex;
    align-items: center;
    width: 1020px;
    height: 600px;
    overflow-x: hidden;
    border: 2px solid black;
  }
`

const SectionTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #53924f;
  margin-bottom: 20px;
  text-align: center;
`

const SectionDescriptor = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #000000;
  font-size: 20px;
  margin-bottom: 80px;
  text-align: center;
`

const SectionTwo = ({ handleOpenModal }) => {
  const [state, setState] = useState(1)
  const transform = `translate(${-300 * (state - 1)}px, 0)`
  console.log(state, transform)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const renderTestimonials = () => {
    return testimonials.map((testimony, index) => {
      if (index === 1) {
        return <Testimony key={index} className="center" dog={testimony} />
      } else {
        return <Testimony key={index} className="notCenter" dog={testimony} />
      }
    })
  }

  const handleNext = () => {
    setState(state + 1)
  }

  const handlePrevious = () => {
    // setState(state - 1)
  }

  return (
    <PageWrapper>
      {/* <div id="bubble1"></div>
      <div id="bubble2"></div> */}
      <img
        id="pawPrint"
        src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579281891/paws_ee93dc.jpg"
        alt="paws"
      />
      <div id="topIndex">
        <img
          src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579281418/iconmonstr-building-1-240_g4pktg.png"
          alt="dog house"
        />
        <SectionTitle>What People Are Saying</SectionTitle>
        <SectionDescriptor>
          See why people have fallen in love with Marlon and K9 University
        </SectionDescriptor>
        <TestimonyContainer transform={transform}>
          {" "}
          {/* <svg
            onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#56944f"
          >
            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
          </svg> */}
          <SliderComponent />
          {/* <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#56944f"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
          </svg> */}
        </TestimonyContainer>
        <Button onClick={handleOpenModal}>Schedule Now</Button>
      </div>
    </PageWrapper>
  )
}

export default SectionTwo

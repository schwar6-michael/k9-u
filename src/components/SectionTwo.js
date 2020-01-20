import React, { useState } from "react"
import styled from "styled-components"
import { testimonials } from "../messages/testimonials"
import Testimony from "./Testimony"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 100px 0;
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

const TestimonialContainer = styled.div`
  position: relative;
  height: 500px;
  width: 300px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 20px;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .testimonial {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    z-index: 2;
    background: #ffffff;
    padding: 40px 20px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-style: italic;
    overflow: scroll;
  }
  .topLeftQuote {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .topRightQuote {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  #ruby {
    top: -70px;
  }
`

const TestimonyContainer = styled.div`
  display: flex;
  align-items: center;
`

const SectionTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #53924f;
  margin-bottom: 20px;
`

const SectionDescriptor = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #000000;
  font-size: 20px;
  margin-bottom: 80px;
`

const SectionTwo = () => {
  const [state, setState] = useState(1)

  const renderTestimonials = () => {
    const t1 = state - 1
    const t2 = state
    const t3 = state + 1

    const renderArray = testimonials.filter((testimony, index) => {
      return index === t1 || index === t2 || index === t3
    })

    return renderArray.map((testimomny, index) => {
      if (index === state) {
        return <Testimony key={index} className="center" dog={testimomny} />
      } else {
        return <Testimony key={index} className="notCenter" dog={testimomny} />
      }
    })
  }

  const handleNext = () => {
    setState(state + 1)
  }

  const handlePrevious = () => {
    setState(state - 1)
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
        <TestimonyContainer>
          {" "}
          <svg
            onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#56944f"
          >
            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
          </svg>
          {renderTestimonials()}
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#56944f"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
          </svg>
        </TestimonyContainer>
        <Button>Schedule Now</Button>
      </div>
    </PageWrapper>
  )
}

export default SectionTwo

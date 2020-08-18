import React, { useEffect } from "react"
import styled from "styled-components"
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

const SectionTwo = ({ handleOpenModal, content }) => {
  const handleOpenWindow = () => {
    window.open(
      "https://us.revelationpets.com/newbooking/widget/token/ycjtq30kud"
    )
  }

  useEffect(() => {
    const widgetContainer = document.getElementById("widget")
    const widget = document.getElementById("revelation_pets_widget")

    widgetContainer.appendChild(widget)
  }, [])

  // const widgetContainer = document.getElementById("widget")

  const contentArr = content.json.content
  return (
    <PageWrapper>
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
        <SectionTitle>{contentArr[0].content[0].value}</SectionTitle>
        <SectionDescriptor>{contentArr[1].content[0].value}</SectionDescriptor>
        <StyledWidget id="widget"></StyledWidget>
        {/* <TestimonyContainer>
          <SliderComponent />
        </TestimonyContainer> */}
        <Button onClick={handleOpenWindow}>
          {contentArr[2].content[0].value}
        </Button>
      </div>
    </PageWrapper>
  )
}

export default SectionTwo

const StyledWidget = styled.div`
  margin-top: -40px;
  max-height: 500px;
  overflow: scroll;
`

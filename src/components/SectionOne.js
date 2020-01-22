import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 50px;
  #background {
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
    height: 100vh;
  }
  #puppy {
    position: absolute;
    bottom: -150px;
    right: 125px;
    height: 650px;
  }
  @media (max-width: 1075px) {
    padding: 0 30px;
    #background {
      display: none;
    }
    #puppy {
      z-index: 0;
      height: 400px;
    }
  }
`

const Button = styled.button`
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
  outline: none;
  &:hover {
    transform: scale(1.02);
    background: hsl(116, 30%, 34%);
  }
  @media (max-width: 1075px) {
    width: 100%;
  }
`

const ContentContainer = styled.div`
  width: 450px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    margin: 0;
    margin-bottom: 10px;
    color: #53924f;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 500;
  }
  span {
    font-weight: 600;
  }
  @media (max-width: 1075px) {
    z-index: 1;
  }
`

const SectionOne = ({ handleOpenModal }) => {
  return (
    <PageWrapper>
      <img
        id="background"
        src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579654122/section-one-background_rgnpzi.png"
        alt="background"
      />
      <img
        id="puppy"
        src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579654044/pup1_p1wnw1.png"
        alt="puppy"
      />
      <ContentContainer>
        <h1>New York-Based Dog Training</h1>
        <p>
          It's simple. K9 University turns good boys and girls, into{" "}
          <span>GREAT </span>ones.
        </p>
        <Button onClick={handleOpenModal}>Schedule Training Today</Button>
      </ContentContainer>
    </PageWrapper>
  )
}

export default SectionOne

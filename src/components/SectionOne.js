import React from "react"
import styled from "styled-components"
import mainLogo from "../images/k9u-main-logo.png"
import background1 from "../images/section-one-background.png"
import pup from "../images/pup1.png"

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
    right: 150px;
    height: 650px;
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
  &:hover {
    transform: scale(1.02);
    background: hsl(116, 30%, 34%);
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
`

const SectionOne = () => {
  return (
    <PageWrapper>
      <img id="background" src={background1} alt="background" />
      <img id="puppy" src={pup} alt="puppy" />
      <ContentContainer>
        <h1>New York-Based Dog Training</h1>
        <p>
          It's simple. K9 University turns good boys and girls, into{" "}
          <span>GREAT </span>ones.
        </p>
        <Button>Schedule Training Today</Button>
      </ContentContainer>
    </PageWrapper>
  )
}

export default SectionOne

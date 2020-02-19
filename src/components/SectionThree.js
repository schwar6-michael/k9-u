import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 80px 300px;
  overflow: hidden;
  #bubble3 {
    position: absolute;
    top: -1450px;
    left: 50%;
    width: 2000px;
    height: 2000px;
    border-radius: 3000px;
    background: #53924f;
    z-index: 0;
    opacity: 1;
    transform: translate(-50%, 0);
  }
  .topIndex {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    padding-top: 500px;
  }
  .marlonProfile {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 900px) {
    padding: 80px 30px;
  }
`

const Image = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  width: 350px;
  border-radius: 350px;
  overflow: hidden;
  img {
    border-radius: 350px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 667px) {
    height: 300px;
    width: 300px;
  }
`

const Description = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`

const Name = styled.span`
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-weight: 600;
  line-height: 40px;
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 667px) {
    text-align: center;
  }
  @media (max-width: 900px) {
    font-size: 1.8em;
  }
`

const TrainerBio = styled.span`
  margin-top: 30px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 40px;
  font-size: 1.2em;
  text-align: center;
  span {
    color: #53924f;
    font-weight: 900;
  }
  @media (max-width: 667px) {
    font-size: 18px;
  }
`

const SectionThree = ({ content }) => {
  const contentArr = content.json.content
  console.log(contentArr)
  return (
    <PageWrapper>
      <div id="bubble3"></div>{" "}
      <div className="topIndex">
        <div className="marlonProfile">
          {" "}
          <Image>
            <img
              src="https://res.cloudinary.com/dx5hyipym/image/upload/v1578962577/marlon4_wtqeyy.jpg"
              alt="marlon trainer"
            />
          </Image>
          <Name>{contentArr[0].content[0].value}</Name>
          <Description>{contentArr[1].content[0].value}</Description>
          <Description>{contentArr[2].content[0].value}</Description>
        </div>
        <TrainerBio>{contentArr[3].content[0].value}</TrainerBio>
        <TrainerBio>{contentArr[4].content[0].value}</TrainerBio>
        <TrainerBio>{contentArr[5].content[0].value}</TrainerBio>
        <TrainerBio>{contentArr[6].content[0].value}</TrainerBio>
        <TrainerBio>{contentArr[7].content[0].value}</TrainerBio>
      </div>
    </PageWrapper>
  )
}

export default SectionThree

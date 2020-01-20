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
  height: 400px;
  width: 400px;
  border-radius: 400px;
  overflow: hidden;
  img {
    border-radius: 400px;
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
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-weight: 600;
  line-height: 40px;
  font-size: 2em;
  text-align: center;
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

const SectionThree = () => {
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
          <Name>Meet Marlon Leon:</Name>
          <Description>Master Dog Trainer</Description>
        </div>
        <TrainerBio>
          Hi, my name is Marlon Leon. And I've been around and working with dogs{" "}
          <span>my whole life.</span>
          <br></br>
          <br></br>
          Since the age of 18, I have been working in animal shelters and
          veterinary offices learning how to <span>handle</span> all types of
          dogs, even ones with aggressive and{" "}
          <span>seemingly untrainable behavior.</span>
          <br></br>
          <br></br>
          These are the dogs that made my heart sink. They made me realize who I
          was, and provided me with my lifelong purpose of helping them and
          their owners live happier, better lives.
          <br></br>
          <br></br>
          Loving dogs is <span>easy</span>, but communicating with them can be{" "}
          <span>challenging</span>, especially because they can't let you know
          if something hurts them or if they don't feel well.
          <br></br>
          <br></br>
          Understanding both aspects of a dog's behavior and a dog's health is
          truly the first step to my training process. Dogs want love and want
          to be loved. They form bonds with people based on their trust of
          people. The way that I train begins with me creating a bond, and
          letting the dog know - that I am NOT the enemy. Once you have formed
          this kind of bond with a dog, it creates a{" "}
          <span>positive learning environment</span> that will end in success.
        </TrainerBio>
      </div>
    </PageWrapper>
  )
}

export default SectionThree

import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #ffffff;
  padding: 80px 0;
  z-index: -2;
  #index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  #pawsFlipped {
    position: absolute;
    top: 200px;
    left: -300px;
    z-index: -1;
    opacity: 0.4;
    width: 50%;
    transform: rotate(-20deg);
  }
  .row {
    display: flex;
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
  z-index: 5;
  transition: 200ms ease-out;
  &:hover {
    transform: scale(1.02);
    background: hsl(116, 30%, 34%);
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  img {
    height: 150px;
  }
  h3 {
    font-family: "Roboto", sans-serif;
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    width: 250px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 675px) {
    .row {
      flex-direction: column;
    }
  }
`

const SectionFour = ({ handleOpenModal }) => {
  return (
    <PageWrapper>
      <img
        id="pawsFlipped"
        src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579287308/paws-flipped_wwg9ge.jpg"
        alt="paws"
      />
      <div id="index">
        <img
          src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579286816/iconmonstr-school-21-240_iypnbg.png"
          alt="graduating cap"
        />
        <SectionTitle>Services We Offer</SectionTitle>
        <SectionDescriptor>
          From Training to Day Care, we offer top of line the services that
          leave our customers happy
        </SectionDescriptor>
        <Container>
          <div className="row">
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1578964085/undraw_good_doggy_4wfq_1_be2jxn.png"
                alt="dog"
              />
              <h3>Training</h3>
              <p>Traing includes training the dog and other stuff</p>
            </ContentContainer>
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579047589/undraw_Modern_woman_lxh7_ohns1z.png"
                alt="dog"
              />
              <h3>Walking</h3>
              <p>Traing includes training the dog and other stuff</p>
            </ContentContainer>
          </div>
          <div className="row">
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579047868/undraw_Cautious_dog_q83f_ioowat.png"
                alt="dog"
              />
              <h3>Day Care</h3>
              <p>Traing includes training the dog and other stuff</p>
            </ContentContainer>
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579047805/undraw_walk_dreaming_u58a_z2k4mb.png"
                alt="dog"
              />
              <h3>Boarding</h3>
              <p>Traing includes training the dog and other stuff</p>
            </ContentContainer>
          </div>
        </Container>
        <Button onClick={handleOpenModal}>Get A Quote</Button>
      </div>
    </PageWrapper>
  )
}

export default SectionFour

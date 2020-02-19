import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #ffffff;
  padding: 80px 0;
  z-index: 0;
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
  @media (max-width: 900px) {
    padding: 80px 20px;
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
  text-align: center;
`

const PickupDecsriptor = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #000000;
  font-size: 14px;
  font-style: italic;
  width: 80%;
  margin-bottom: 30px;
  text-align: center;
  span {
    color: #53924f;
    font-weight: bold;
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
  z-index: 10;
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
  @media (max-width: 657px) {
    p {
      width: 350px;
    }
    img {
      height: 180px;
    }
  }
`

const PricingContainer = styled.div`
  position: relative;
  padding: 40px 20px;
  border: 1px solid #53924f;
  border-top: 60px solid #53924f;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  p {
    font-family: "Open Sans", sans-serif;
    color: #000000;
    font-style: italic;
    text-align: center;
    font-size: 14px;
  }
  li {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #000000;
  }
  svg {
    margin-right: 10px;
  }
  b {
    margin-right: 5px;
  }
  &:after {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    height: 60px;
    background: #53924f;
    content: "PRICING";
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }
  span {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    font-weight: 900;
    text-align: center;
    color: #53924f;
  }
  @media (max-width: 657px) {
    li {
      font-size: 18px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
    padding: 40px 10px;
    width: 350px;
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

const SectionFour = ({ handleOpenModal, content }) => {
  const contentArr = content.json.content

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
        <SectionTitle>{contentArr[0].content[0].value}</SectionTitle>
        <SectionDescriptor>{contentArr[1].content[0].value}</SectionDescriptor>
        <PickupDecsriptor>{contentArr[2].content[0].value}</PickupDecsriptor>
        <Container>
          <div className="row">
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1578964085/undraw_good_doggy_4wfq_1_be2jxn.png"
                alt="dog"
              />
              <h3>{contentArr[3].content[0].value}</h3>
              <p>{contentArr[4].content[0].value}</p>
            </ContentContainer>
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579047868/undraw_Cautious_dog_q83f_ioowat.png"
                alt="dog"
              />
              <h3>{contentArr[5].content[0].value}</h3>
              <p>{contentArr[6].content[0].value}</p>
            </ContentContainer>
          </div>
          <div className="row">
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579047589/undraw_Modern_woman_lxh7_ohns1z.png"
                alt="dog"
              />
              <h3>{contentArr[7].content[0].value}</h3>
              <p>{contentArr[8].content[0].value}</p>
            </ContentContainer>
            <ContentContainer>
              <img
                src="https://res.cloudinary.com/dx5hyipym/image/upload/v1580175775/undraw_woman_mevk_u2sdsj.png"
                alt="dog"
              />
              <h3>{contentArr[9].content[0].value}</h3>
              <p>{contentArr[10].content[0].value}</p>
              {/* <p>
                We aim to create a home-away-from-home experience and even offer
                extra activities such as walks at BELMONT LAKE STATE PARK where
                we make it feel like more of a hike than just a typical walk!
              </p> */}
            </ContentContainer>
          </div>
        </Container>
        <PricingContainer>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#53924f"
              >
                <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
              </svg>
              <b>Freshman: </b> 2 Week Program
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#53924f"
              >
                <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
              </svg>
              <b>Sophomore: </b> 3 Week Program
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#53924f"
              >
                <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
              </svg>
              <b>Junior: </b> 4 Week Program{" "}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#53924f"
              >
                <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
              </svg>
              <b>Senior: </b> 6 Week Program{" "}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#53924f"
              >
                <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
              </svg>
              <b>Private </b> Training Sessions{" "}
            </li>
          </ul>
          <p>
            *Pricing for each program varies depening on a number of factors. To
            get an accurate estimate of what each service might cost, please
            fill out the form by 'clicking' on <span>'Get a Quote'</span>. We
            will get back to you as soon as we can. Thank you!
          </p>
          <Button onClick={handleOpenModal}>Get A Quote</Button>
        </PricingContainer>
      </div>
    </PageWrapper>
  )
}

export default SectionFour

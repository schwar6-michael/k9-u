import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #bottomNavLogo {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: 200px;
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    list-style: none;
    margin-top: 10px;
  }
  ul li {
    margin: 0 20px;
    margin-top: 15px;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    color: #53924f;
  }
`

const SectionFive = () => {
  return (
    <PageWrapper>
      <img
        id="bottomNavLogo"
        src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579279713/k9u-main-logo_f9xijc.png"
        alt="main"
      />
      <ul>
        <li>Yelp</li>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>
    </PageWrapper>
  )
}

export default SectionFive

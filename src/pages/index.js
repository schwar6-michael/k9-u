import React, { useState } from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import SectionFour from "../components/SectionFour"
import SectionFive from "../components/SectionFive"

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  #mainLogo {
    position: absolute;
    top: -40px;
    left: 20px;
    overflow: hidden;
    width: 200px;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    width: 100vw;
    height: 60px;
    padding-left: 200px;
  }
  ul li {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    margin: 0 15px;
    padding: 5px 0px;
    cursor: pointer;
  }
  ul li:hover {
    border-bottom: 2px solid #53924f;
  }
  @media (max-width: 1075px) {
    ul li {
      display: none;
    }
  }
`

const AppWrapper = styled.div`
  position: relative;
  z-index: 3;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.4);
  z-index: 2;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    position: relative;
    width: 500px;
    border-radius: 2px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 100px;
    cursor: pointer;
    animation: fadeInDown 400ms ease-out;
    svg {
      position: absolute;
      top: -30px;
      right: -30px;
      fill: rgb(0, 0, 0, 0.8);
      cursor: pointer;
    }
    svg:hover {
      transform: scale(1.2);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  label {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
  }
  input {
    width: 100%;
    outline: none;
    margin: 10px 0;
  }
  textarea {
    width: 100%;
    outline: none;
    margin: 10px 0;
  }
  input[type="submit"] {
    width: 100%;
    margin: 10px 0;
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
  }
  @media (max-width: 900px) {
    form {
      width: 400px;
    }
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const IndexPage = () => {
  const [modal, setModal] = useState(false)
  const [state, setState] = useState()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  const handleOpenModal = () => {
    setModal(true)
  }

  return (
    <AppWrapper>
      {modal && (
        <Modal>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <svg
              onClick={handleCloseModal}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
            </svg>
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Full Name:{" "}
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
              Email: <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
              Number: <input type="tel" name="number" onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" onChange={handleChange} />{" "}
            </label>
            <input type="submit" />
          </form>
        </Modal>
      )}
      <Navbar>
        <img
          id="mainLogo"
          src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579279713/k9u-main-logo_f9xijc.png"
          alt="main"
        />
        <ul>
          <li>Reviews</li>
          <li>Meet Marlon</li>
          <li>Services</li>
        </ul>
      </Navbar>
      <SectionOne handleOpenModal={handleOpenModal} />
      <SectionTwo handleOpenModal={handleOpenModal} />
      <SectionThree />
      <SectionFour handleOpenModal={handleOpenModal} />
      <SectionFive />
    </AppWrapper>
  )
}

export default IndexPage

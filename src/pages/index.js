import React, { useState, useRef } from "react"
import "../components/layout.css"
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
  @media (max-width: 675px) {
    #mainLogo {
      left: 0px;
    }
  }
`
const AppWrapper = styled.div`
  position: relative;
  z-index: 0;
`

const Name = styled.span`
  font-family: "Roboto", sans-serif;
  color: #000000;
  font-weight: 300;
  line-height: 30px;
  font-size: 1.4em;
  text-align: center;
  padding-top: 3px;
`

const Success = styled.p`
  font-family: "Roboto", sans-serif;
  color: #53924f;
  font-weight: 600;
  line-height: 30px;
  font-size: 1em;
  text-align: center;
  padding-top: 3px;
  margin-bottom: 20px;
  text-transform: uppercase;
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
  .successMessage {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .successModal {
    display: flex;
    align-items: center;
    .loader {
      margin-right: 20px;
      animation: spin 1.5s infinite linear;
    }
  }
  form {
    position: relative;
    width: 500px;
    border-radius: 2px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 7%;
    cursor: pointer;
    animation: fadeInDown 400ms ease-out;
    .exit {
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
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
    width: 100%;
    margin: 10px 0;
    font-weight: 600;
  }
  input {
    width: 100%;
    outline: none;
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
    width: 100%;
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
  @media (max-width: 657px) {
    form {
      width: 350px;
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
  const [success, setSuccess] = useState(false)
  const [successLoading, setSuccessLoading] = useState(false)
  const Section2 = useRef(null)
  const Section3 = useRef(null)
  const Section4 = useRef(null)

  const scrollToRef = ref =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSuccessLoading(true)
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute("action"))
        setSuccessLoading(false)
        setSuccess(true)
      })
      .catch(error => alert(error))
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  const handleOpenModal = () => {
    setSuccess(false)
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
            {successLoading ? (
              <div className="successModal">
                <svg
                  className="exit"
                  onClick={handleCloseModal}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
                </svg>
                <svg
                  className="loader"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#53924f"
                >
                  <path d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z" />
                </svg>
                <Name>Submitting...</Name>
              </div>
            ) : success ? (
              <div className="successMessage">
                <svg
                  className="exit"
                  onClick={handleCloseModal}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
                </svg>
                <Success>Submission Successful!</Success>
                <Name>
                  Thank you for your interest in K9-University! We will be
                  getting back to you as soon as possible!
                </Name>
              </div>
            ) : (
              <>
                <svg
                  className="exit"
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
                  Email:{" "}
                  <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                  Number:{" "}
                  <input type="tel" name="number" onChange={handleChange} />
                </label>
                <label>
                  Message:
                  <textarea name="message" onChange={handleChange} />{" "}
                </label>
                <input type="submit" />
              </>
            )}
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
          <li onClick={() => scrollToRef(Section2)}>Reviews</li>
          <li onClick={() => scrollToRef(Section3)}>Meet Marlon</li>
          <li onClick={() => scrollToRef(Section4)}>Services</li>
        </ul>
      </Navbar>
      <SectionOne handleOpenModal={handleOpenModal} />
      <div ref={Section2}>
        <SectionTwo handleOpenModal={handleOpenModal} />
      </div>
      <div ref={Section3}>
        <SectionThree />
      </div>
      <div ref={Section4}>
        <SectionFour handleOpenModal={handleOpenModal} />
      </div>
      <SectionFive />
    </AppWrapper>
  )
}

export default IndexPage

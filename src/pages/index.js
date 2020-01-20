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
`

const AppWrapper = styled.div`
  position: relative;
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
    width: 500px;
    border-radius: 2px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 100px;
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
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const IndexPage = () => {
  const [modal, setModal] = useState()
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

  return (
    <AppWrapper>
      <Modal>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Full Name: <input type="text" name="name" onChange={handleChange} />
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
      <Navbar>
        <img
          id="mainLogo"
          src="https://res.cloudinary.com/dx5hyipym/image/upload/v1579279713/k9u-main-logo_f9xijc.png"
          alt="main"
        />
        <ul>
          <li>Testimonies</li>
          <li>Meet Marlon</li>
          <li>Services</li>
        </ul>
      </Navbar>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </AppWrapper>
  )
}

export default IndexPage

import React from "react"
import styled from "styled-components"

const TestimonialContainer = styled.div`
  position: relative;
  height: 600px;
  width: 400px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  margin: 10px 20px;
  &.notCenter {
    opacity: 0.5;
  }
  &.center {
    transform: scale(1.1);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .testimonial {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 2;
    background: #ffffff;
    padding: 40px 20px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-style: italic;
    overflow: scroll;
  }
  .topLeftQuote {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .topRightQuote {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  #ruby {
    top: -70px;
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Testimony = ({ className, dog }) => {
  const { name, message, picture } = dog

  return (
    <TestimonialContainer className={className}>
      <img id={name} src={picture} alt={name} />
      <div className="testimonial">
        {" "}
        <svg
          className="topLeftQuote"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#56944f"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p>{message}</p>
      </div>
    </TestimonialContainer>
  )
}

export default Testimony

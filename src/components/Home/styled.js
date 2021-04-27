import styled, { keyframes } from "styled-components"

import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo"
import { Gatsby } from "@styled-icons/remix-line/Gatsby"

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: var(--secondaryColor);

  h1 {
    margin-top: 10px;
    color: var(--textColor);
    font-size: 18px;
    font-weight: 500;
  }
`

export const GatsbyIcon = styled(Gatsby)`
  color: var(--whiteColor);
  width: 25px;
  height: 25px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroundColor);
  height: calc(100vh - 120px);
  min-height: 450px;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const ReactIcon = styled(ReactLogo)`
  color: var(--iconColor);
  width: 180px;
  height: 180px;
  animation: ${rotate} 10s linear infinite;
`

export const Button = styled.button`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  height: 60px;
  border-radius: 8px;
  outline: 0;
  border: none;
  box-shadow: none;
  background-color: var(--ternaryColor);
  color: var(--buttonColor);
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform ease 0.15s;

  &:active {
    transform: scale(0.98);
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  background-color: var(--secondaryColor);

  h6 {
    color: var(--textColor);
    font-size: 14px;

    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--linkColor);
      opacity: 0.8;
      padding: 0 5px;
      transition: all ease 0.15s;

      &:hover {
        opacity: 1;
        background-color: var(--whiteColor);
        color: var(--blackColor);
        border-radius: 4px;
      }
    }
  }
`

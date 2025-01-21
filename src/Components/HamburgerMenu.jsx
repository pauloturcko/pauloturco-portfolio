import { useState } from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledDiv onClick={toggleMenu}>
      <StyledBar className={`top-bar ${isOpen ? "open" : ""}`} />
      <StyledBar className={`middle-bar ${isOpen ? "open" : ""}`} />
      <StyledBar className={`bottom-bar ${isOpen ? "open" : ""}`} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 1.5rem;
  height: 1.25rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  opacity: 0;
  animation: ${({ theme }) => theme.animations.animeElement} .5s forwards;
  animation-delay: 1.3s;
`

const StyledBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.primary};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.top-bar {
    transform-origin: top left;
  }

  &.middle-bar {
    opacity: 1;
  }

  &.bottom-bar {
    transform-origin: bottom left;
  }

  &.open.top-bar {
    transform: rotate(45deg);
  }

  &.open.middle-bar {
    opacity: 0;
  }

  &.open.bottom-bar {
    transform: rotate(-45deg);
  }
`

export default HamburgerMenu

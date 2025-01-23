import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'


const Menu = ({ isOpen, setIsOpen }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <StyledMenu isOpen={isOpen}>
      <StyledNav>
        <StyledList>
          <li><a href='#home' onClick={(e) => handleScroll(e, '#home')}>Início</a></li>
          <li><a href='#about' onClick={(e) => handleScroll(e, '#about')}>Sobre Mim</a></li>
          <li><a href='#experience' onClick={(e) => handleScroll(e, '#experience')}>Experiência</a></li>
          <li><a href='#projects' onClick={(e) => handleScroll(e, '#projects')}>Projetos</a></li>
          <li><a href='#contact' onClick={(e) => handleScroll(e, '#contact')}>Contato</a></li>
        </StyledList>
      </StyledNav>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  z-index: 4;
  background: ${props => props.theme.colors.headerBg};
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 80vh;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (min-width: 1280px) {
    height: 20vh;
    width: 100%;
    left: 0%;
  }
`

const StyledNav = styled.nav`
  height: 80%;
  width: 90%;

  @media (min-width: 1280px) {
    width: 75%;
  }
`

const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  gap: 3rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0rem;
  }

  li {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.75rem;
    font-weight: 700;

    @media (min-width: 1280px) {
      font-size: 1.5rem;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 3px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`

export default Menu

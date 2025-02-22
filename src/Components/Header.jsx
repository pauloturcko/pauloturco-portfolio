import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import theme from '../styles/Theme'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import Menu from './Menu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <StyledDiv>
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <SocialsDiv>
          <a href='https://github.com/pauloturcko' target='__blank' rel='noopener noreferrer'><GithubIcon /></a>
          <a href='https://www.linkedin.com/in/pauloturco/' target='__blank' rel='noopener noreferrer'><LinkedinIcon /></a>
        </SocialsDiv>
      </StyledDiv>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
  overflow-y: visible;

  @media (min-width: 1280px) {
    height: 90px;
  }
`

const StyledDiv = styled.div`
  z-index: 5;
  position: fixed;
  width: 90%;
  height: 3rem;
  border-radius: 0.6rem;
  padding: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.headerBg};

  opacity: 0;
  transform: translateY(-100px);
  animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  animation-delay: 1s;
  animation-iteration-count: 1;

  @media (min-width: 1280px) {
    width: 80%;
    height: 3.75rem;

  }
`

const SocialsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`

const GithubIcon = styled(FaGithub)`
  color: ${props => props.theme.colors.primary};
  width: 1.5rem;
  height: 1.5rem;

  opacity: 0;
  animation: ${({ theme }) => theme.animations.animeElement} 0.5s forwards;
  animation-delay: 1.5s;
  animation-iteration-count: 1;

  @media (min-width: 1280px) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const LinkedinIcon = styled(FaLinkedinIn)`
  color: ${props => props.theme.colors.primary};
  width: 1.5rem;
  height: 1.5rem;

  opacity: 0;
  animation: ${({ theme }) => theme.animations.animeElement} 0.5s forwards;
  animation-delay: 1.7s;
  animation-iteration-count: 1;

  @media (min-width: 1280px) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export default Header

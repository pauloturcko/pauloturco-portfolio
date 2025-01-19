import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

const SocialsList = () => {
  return (
    <SocialsDiv>
      <li>
        <StyledIcon>
          <FaGithub />
        </StyledIcon>
        <a href="https://github.com/pauloturcko" target='_blank' rel='noopener noreferrer'>@pauloturcko</a>
      </li>
      <li>
        <StyledIcon>
          <FaLinkedin />
        </StyledIcon>
        <a href="https://www.linkedin.com/in/pauloturco/" target='_blank' rel='noopener noreferrer'>@pauloturco</a>
      </li>
      <li>
        <StyledIcon>
          <FaWhatsapp />
        </StyledIcon>
        <a href="https://wa.me/5549999809293" target='_blank' rel='noopener noreferrer'>(49) 99980-9293</a>
      </li>
      <li>
        <StyledIcon>
          <FaEnvelope />
        </StyledIcon>
        <a href='mailto:pauloturcko@gmail.com' target='_blank' rel='noopener noreferrer'>pauloturcko@gmail.com</a>
      </li>
    </SocialsDiv>
  );
};

const SocialsDiv = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  list-style: none;
  gap: 0.75rem;
  width: 100%;

  li {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    position: relative;

    @media (min-width: 1280px) {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: ${({ isSelected }) => (isSelected ? '100%' : '0')};
      height: 2px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
  }
`;

const StyledIcon = styled.span`
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export default SocialsList;

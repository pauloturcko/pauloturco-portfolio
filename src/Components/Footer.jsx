import React from 'react'
import styled from 'styled-components';
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>Copyright <FaRegCopyright /> 2025 Paulo Turco. Alguns direitos reservados.</StyledText>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.altBg};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.875rem;
`

const StyledText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.altText};
  font-size: 0.875rem;
  font-weight: 600;
`

export default Footer

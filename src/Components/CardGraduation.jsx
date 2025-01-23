import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'

const CardGraduation = ({ title, course, icon: Icon, institution, isInView, hasAnimated }) => {
  return (
    <StyledCard className={hasAnimated ? 'visible' : ''}>
      <StyledTitle>{title}</StyledTitle>
      <StyledCourseName>{course}</StyledCourseName>
      <StyledIcon>{Icon && <Icon />}</StyledIcon>
      <StyledInstitution>{institution}</StyledInstitution>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.altBg};
  width: 21.875rem;
  height: 9.375rem;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
  }
`

const StyledTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.altText};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
`

const StyledCourseName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 700;
`

const StyledIcon = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 2rem;
    height: 1.5rem;
  }
`;

const StyledInstitution = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 800;
`

export default CardGraduation

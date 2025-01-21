import React from 'react'
import styled from 'styled-components'
import useInView from '../Hooks/useInView'

const Experience = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
  })

  return (
    <StyledArticle
      id='experience'
      aria-label='Experiência'
      ref={ref}
      className={isInView ? 'visible' : ''}
    >
      <StyledDiv>
        <SectionTitle className={isInView ? 'visible' : ''}>Por<br></br>onde<br></br>andei</SectionTitle>
        <Info>
          <TitleDiv>
            <Company className={isInView ? 'visible' : ''}>Neocom</Company>
            <JobTitle className={isInView ? 'visible' : ''}>Desenvolvedor Front-End</JobTitle>
          </TitleDiv>
          <Description className={isInView ? 'visible' : ''}>Desenvolvimento de landing pages para campanhas publicitárias utilizando HTML, CSS & JavaScript. Para projetos maiores e mais complexos utilizava React, JavaScript e StyledComponents ou TailwindCSS, desta forma conseguindo manter o código limpo, reutilizável e escalável para possíveis atualizações futuras.</Description>
        </Info>
      </StyledDiv>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 100%;
  height: auto;
  padding: 3.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.altBg};

  @media (min-width: 1280px) {
    padding: 6.25rem 0;
  }
`

const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.headerBg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 5rem;
  font-weight: 800;
  line-height: 80px;
  text-transform: uppercase;
  display: none;

  opacity: 0;

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 1s;
  }

  @media (min-width: 1280px) {
    display: flex;
  }
`

const StyledDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    width: 80%;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
  }
`

const TitleDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  gap: 3px;

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    width: 5rem;
    height: 3px;
    position: absolute;
    top: -5px;
    left: 0px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`

const Company = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 700;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  }
`

const JobTitle = styled.h4`
  color: ${({ theme }) => theme.colors.altText};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.3s;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 500;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.6s;
  }

  @media (min-width: 1280px) {
    width: 35rem;
  }
`

export default Experience

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useInView from '../Hooks/useInView'
import ExperienceList from './ExperienceList'

const Experience = () => {
  const [experiences, setExperiences] = useState([])
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0)

  const [ref, isInView] = useInView({
    threshold: 0.1,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    fetch('/pauloturco-portfolio/Companies.json')
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data)
      })
  }, [])

  useEffect(() => {
    if (isInView & !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const selectedExperience = experiences[selectedExperienceIndex] || null

  return (
    <StyledArticle
      id='experience'
      aria-label='Experiência'
      ref={ref}
      className={hasAnimated ? 'visible' : ''}
    >
      <StyledDiv>
        <SectionTitle className={hasAnimated ? 'visible' : ''}>Por<br />onde<br />andei</SectionTitle>
        <Info>
          <TitleDiv className={hasAnimated ? 'visible' : ''}>
            <ExperienceList
              experiences={experiences}
              onSelect={setSelectedExperienceIndex}
              selectedIndex={selectedExperienceIndex}
            />
          </TitleDiv>

          {selectedExperience && (
            <DescriptionContainer className={hasAnimated ? 'visible' : ''}>
              <JobTitle>{selectedExperience.role}</JobTitle>
              <Description>{selectedExperience.description}</Description>
            </DescriptionContainer>
          )}
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
    animation-iteration-count: 1;
  }

  @media (min-width: 1280px) {
    display: flex;
  }
`

const StyledDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
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



const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const TitleDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBg};
  padding: 0.125rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1rem;

  display: flex;
  justify-content: flex-start;

  @media (min-width: 1280px) {
    width: 35rem;
  }
  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.3s;
    animation-iteration-count: 1;
  }
`



const JobTitle = styled.h4`
  color: ${({ theme }) => theme.colors.altText};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem 0;
  border-radius: 0.5rem;

  width: 80%;
  max-width: 90%;

  @media (min-width: 1280px) {
    width: 90%;
  }
`

const DescriptionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.colorBg};
  padding: 1rem;
  border-radius: 0.5rem;

  width: 100%;

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

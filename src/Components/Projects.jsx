import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProjectsList from './ProjectsList';
import ProjectsDetails from './ProjectsDetails';
import useInView from '../Hooks/useInView';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const [ref, isInView] = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    fetch('/pauloturco-portfolio/Projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
  }, []);

  const selectedProject = projects[selectedProjectIndex] || null;

  return (
    <StyledArticle
      id='projects'
      aria-label='Meus Projetos'
      ref={ref}
      className={isInView ? 'visible' : ''}
    >
      <SectionTitle className={isInView ? 'visible' : ''}>Meus<br></br>Projetos</SectionTitle>
      <StyledDiv>
        <ProjectsList
          projects={projects}
          onSelect={setSelectedProjectIndex}
          selectedIndex={selectedProjectIndex}
        />
        {selectedProject && <ProjectsDetails
          project={selectedProject}
          isInView={isInView}
        />}
      </StyledDiv>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.altBg};
  padding: 3.125rem 0 5.625rem 0;

  @media (min-width: 1280px) {
    gap: 3.75rem;
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
  width: 80%;
  text-align: end;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: end;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 5rem;
      height: 3px;
      border-radius: 5px;
      top: -15px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`

const StyledDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  @media (min-width: 1280px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
  }
`


export default Projects

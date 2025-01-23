import React from 'react'
import styled from 'styled-components'
import { FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiStyledcomponents, SiReactrouter, SiTailwindcss, SiTypescript } from "react-icons/si";
import { MdCss, MdHtml } from "react-icons/md";

const ProjectsDetails = ({ project, hasAnimated }) => {
  const techIcons = {
    React: <FaReact />,
    JavaScript: <FaJs />,
    TypeScript: <SiTypescript />,
    HTML: <MdHtml />,
    CSS: <MdCss />,
    StyledComponents: <SiStyledcomponents />,
    Figma: <FaFigma />,
    ReactRouterDOM: <SiReactrouter />,
    Tailwindcss: <SiTailwindcss />
  }

  return (
    <StyledDiv>
      <FirstDetails>
        <ProjectDescription className={hasAnimated ? 'visible' : ''}>{project.description}</ProjectDescription>
        <ProjectAccess>
          <ViewProject
            className={hasAnimated ? 'visible' : ''}
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar Projeto
          </ViewProject>
          <RepoProject
            className={hasAnimated ? 'visible' : ''}
            href={project.repoLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            Repositório do Projeto
          </RepoProject>
        </ProjectAccess>
      </FirstDetails>
      <LastDetails>
        <TechnologiesGroup>
          <TechnologiesTitle className={hasAnimated ? 'visible' : ''}>Tecnologias Utilizadas</TechnologiesTitle>
          <Technologies>
            {project.technologies.map((tech) => (
              <TechIcons key={tech}>
                {React.cloneElement(techIcons[tech], { size: '100%' }) || <span>{tech}</span>}
              </TechIcons>
            ))}
          </Technologies>
        </TechnologiesGroup>
        <ProjectType className={hasAnimated ? 'visible' : ''}>
          {project.projectType}
        </ProjectType>
      </LastDetails>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.colorBg};
  border-radius: 10px;
  width: 100%;
  height: 40.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:1.875rem 0 0.625rem 0;

  @media (min-width: 1280px) {
    width: 80%;
    height: 31.25rem;
    padding: 1.875rem 0 3.125rem 0;
  }
`

const FirstDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  align-items: start;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ProjectDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 35px;

  opacity: 0;
  transform: translateY(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-iteration-count: 1;
  }

  @media (min-width: 1280px) {
    width: 25rem;
    font-size: 1.3rem;
  }
`

const ProjectAccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`

const ViewProject = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  width: 17rem;
  text-align: center;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.3s;
    animation-iteration-count: 1;
  }

  @media (min-width: 1280px) {
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.025);
    }
  }
`

const RepoProject = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
  background: transparent;
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 17rem;
  text-align: center;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 0.6s;
    animation-iteration-count: 1;
  }

  @media (min-width: 1280px) {
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.025);
    }
  }
`

const LastDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 90%;
  height: auto;
  gap: 4.375rem;

  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: end;
  }
`

const TechnologiesGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 0.5rem;

  @media (min-width: 1280px) {
    align-items: end;
    width: auto;
    gap: 1.875rem;
  }
`

const TechnologiesTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.altText};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  position: relative;

  opacity: 0;
  transform: translatex(100px);

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 1s;
    animation-iteration-count: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 1px;
    width: 5rem;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
  }
`

const Technologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.625rem;
  width: 100%;
`

const TechIcons = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 2rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;

`

const ProjectType = styled.p`
  color: ${({ theme }) => theme.colors.altText};
  font-family: ${({ theme }) => theme.fonts.primary};
  opacity: 50%;
  font-size: 0.75rem;
  font-weight: 400;

  opacity: 0;

  &.visible {
    animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
    animation-delay: 2s;
    animation-iteration-count: 1;
  }

  @media (min-width: 1280px) {
    align-items: end;
  }
`

export default ProjectsDetails

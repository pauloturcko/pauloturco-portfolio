import React from 'react'
import styled from 'styled-components'
import CardGraduation from './CardGraduation'
import { RiGraduationCapLine } from "react-icons/ri";
import { IoCode } from "react-icons/io5";
import { MdOutlineBrush } from "react-icons/md";

const About = () => {
  return (
    <StyledArticle id='about' aria-label='Sobre Mim'>
      <StyledDiv>
        <StyledText>Sou um desenvolvedor <Highlight>Front-End</Highlight> apaixonado por tecnologia e inovação, gosto de pesquisar, ver e entender como tudo isso funciona.<br></br>
          Estou nesta área a 2 anos e atualmente trabalho com <Highlight>React</Highlight>, <Highlight>JavaScript</Highlight> e <Highlight>TypeScript</Highlight>.</StyledText>
        <GraduationDiv>
          <CardGraduation
            title='Bacharel'
            course='Ciências da Computação'
            icon={RiGraduationCapLine}
            institution='Unoesc'
          />
          <CardGraduation
            title='Curso'
            course='Formação Front-End'
            icon={IoCode}
            institution='Alura'
          />
          <CardGraduation
            title='Curso'
            course='Front-End e UX/UI'
            icon={MdOutlineBrush}
            institution='Origamid'
          />
        </GraduationDiv>
      </StyledDiv>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 100%;
  height: auto;
  padding-top: 6.25rem;
  padding-bottom: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    padding: 6.25rem 0;
  }
`

const StyledDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (min-width: 1280px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.75;
  width: 90%;
  text-align: center;
  letter-spacing: 1px;
  position: relative;

  &::before {
    content: '';
    width: 100px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 110%;

    @media (min-width: 1280px) {
      left: 9%;
  }
  }

  @media (min-width: 1280px) {
    text-align: start;
    width: 34rem;
  }
`

const Highlight = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`

const GraduationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export default About

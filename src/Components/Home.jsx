import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'
import ProfilePicture from '../assets/profile.svg?react'

const Home = () => {
  return (
    <StyledArticle id='home' aria-label='Home'>
      <StyledDiv>
        <TextDiv>
          <Title>Olá! Eu sou Paulo Turco</Title>
          <Subtitle>Desenvolvedor Front-End</Subtitle>
          <DownloadCvButton href='../docs/Currículo Paulo Turco.pdf' download='Currículo - Paulo Turco PTBR.pdf' aria-label="Baixar Currículo em PDF">Download C.V</DownloadCvButton>
        </TextDiv>
        <ProfilePicture />
      </StyledDiv>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

const TextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    width: auto;
    align-items: start;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.25rem;
  font-weight: 700;

  opacity: 0;
  transform: translatex(-100px);
  animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  animation-iteration-count: 1;
`

const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;

  opacity: 0;
  transform: translatex(-100px);
  animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  animation-iteration-count: 1;
  animation-delay: 0.3s;
`

const DownloadCvButton = styled.a`
  width: 8rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.colorBg};
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  border-radius: 5px;
  margin-top: 1rem;

  opacity: 0;
  transform: translatex(-100px);
  animation: ${({ theme }) => theme.animations.animeElement} 1s forwards;
  animation-delay: 0.6s;
  animation-iteration-count: 1;

  @media (min-width: 1280px) {
    width: 14rem;
    height: 3.125rem;
    border-radius: 10px;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 1px solid ;
      background: #7ea305;
    }
  }
`

export default Home

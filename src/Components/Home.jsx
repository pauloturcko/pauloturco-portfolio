import React from 'react'
import styled from 'styled-components'
import theme from '../styles/Theme'

const Home = () => {
  return (
    <StyledArticle id='home' aria-label='Home'>
      <StyledDiv>
        <Subtitle>Este capítulo terminou. Conheça minha nova fase e projetos atualizados no meu novo portfólio. <a href="https://portfolio-2-0-bay-nine.vercel.app/">Clique Aqui</a></Subtitle>
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
  text-align: center;

  @media (min-width: 1280px) {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
`

const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
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

export default Home

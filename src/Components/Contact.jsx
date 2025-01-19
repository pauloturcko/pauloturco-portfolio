import React, { useState } from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import SocialsList from './SocialsList'

const Contact = () => {

  return (
    <StyledArticle id='contact' aria-label='Contato'>
      <StyledDiv>
        <InfoDiv>
          <SectionTitle>Entre em <br></br> contato</SectionTitle>
          <SocialsList />
        </InfoDiv>
        <ContactForm />
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
  width: 80%;
  text-align: start;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: start;
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
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    width: 80%;
    flex-direction: row;
  }
`
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 80%;

  @media (min-width: 1280px) {
    width: 50%;
    align-items: start;
    gap: 6.25rem;
  }
`
export default Contact;

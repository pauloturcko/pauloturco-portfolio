import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMesage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    emailjs
      .send(
        "service_zb5r2ua",
        "template_iq1sv6s",
        formData,
        "am9QU5JUPT97uiF29"
      )
      .then(
        (response) => {
          setIsSubmitting(false)
          setSuccessMesage("Mensagem enviada com sucesso!")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          setIsSubmitting(false);
          setSuccessMesage("Ocorreu um erro ao enviar a mensagem. Tente novamente.")
          console.error("EmailJS Error", error)
        }
      )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor='name'>Nome</StyledLabel>
      <StyledInput
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor='email'>Email</StyledLabel>
      <StyledInput
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor='message'>Mensagem</StyledLabel>
      <StyledTextArea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required
      />

      <StyledButton type='submit' disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </StyledButton>
      {successMessage && <StyledMessage>{successMessage}</StyledMessage>}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
  height: auto;
  gap: 5px;

  @media (min-width: 1280px) {
    width: 50%;
  }
`
const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
`
const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid transparent;
  width: 100%;
  font-size: 1rem;
  height: 3.125rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  resize: none;
  height: 150px;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
  margin-top: 1.5rem;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`
const StyledMessage = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
export default ContactForm

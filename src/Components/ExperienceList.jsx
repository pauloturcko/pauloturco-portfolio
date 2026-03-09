import React from 'react';
import styled from 'styled-components';

const ExperienceList = ({ experiences, onSelect, selectedIndex }) => {
    return (
        <StyledDiv>
            <StyledList>
                {experiences.map((experience, index) => (
                    <StyledListItem
                        key={experience.companyName}
                        onClick={() => onSelect(index)}
                        isSelected={index === selectedIndex}
                    >
                        {experience.companyName}
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.colorBg};
  border-radius: 10px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.25rem 0;

  @media (min-width: 1280px) {
    width: 100%;
    height: auto;
    padding: 0.5rem 1rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  list-style: none;
  width: 90%;
  height: auto;
  gap: 1.25rem;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.colorBg};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 0.5rem;
  border-radius: 0.25rem;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.25px;
      width: ${({ isSelected }) => (isSelected ? '100%' : '0')};
      height: 2px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default ExperienceList;

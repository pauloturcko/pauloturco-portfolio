import React from 'react';
import styled from 'styled-components';

const ProjectsList = ({ projects, onSelect, selectedIndex }) => {
  return (
    <StyledDiv>
      <StyledList>
        {projects.map((project, index) => (
          <StyledListItem
            key={project.name}
            onClick={() => onSelect(index)}
            isSelected={index === selectedIndex}
          >
            {project.name}
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
  justify-content: center;
  padding: 1.25rem 0;

  @media (min-width: 1280px) {
    width: 20%;
    height: 31.25rem;
    padding: 1.875rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  list-style: none;
  width: 90%;
  height: auto;
  gap: 1.25rem;
`;

const StyledListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  @media (min-width: 1280px) {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: ${({ isSelected }) => (isSelected ? '100%' : '0')};
      height: 3px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default ProjectsList;

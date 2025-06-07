'use client';
import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  margin: 20px auto;
  background: linear-gradient(135deg, #722860 0%, #420f35 100%);
  gap: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 35px auto;
  }
`;

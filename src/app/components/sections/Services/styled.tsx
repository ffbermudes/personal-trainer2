'use client';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background: #000;
  background: linear-gradient(135deg, #722860 0%, #420f35 100%);
  max-width: 98%;
  margin: 20px auto;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 35px auto;
  }
`;

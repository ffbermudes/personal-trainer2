import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 95%;
  border-radius: 10px;
  background: linear-gradient(135deg, #722860 0%, #420f35 100%);
  max-width: 98%;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  gap: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 35px auto;
  }
`;

export const Picture = styled.aside`
  max-height: 350px;
  width: 100%;
  border-radius: 10px;
`;

export const Content = styled.main`
  width: 100%;
`;

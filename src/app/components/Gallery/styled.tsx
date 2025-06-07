import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 95%;
  border-radius: 10px;
  margin: 15px auto;
  background: linear-gradient(135deg, #722860 0%, #420f35 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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

export { Container };

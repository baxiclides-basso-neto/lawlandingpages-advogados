import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledCard = styled.div`
  width: 300px;
  margin: 1rem auto;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  >h3{
    color: #7b3f12;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  animation: slide-in 0.5s ease-in-out 0.5s both;

  @keyframes slide-in {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

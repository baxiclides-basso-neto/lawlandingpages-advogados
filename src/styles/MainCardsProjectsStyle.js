import styled from "styled-components";
import Image from "next/image";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const StyledCard = styled.div`
  width: 300px;
  margin: 1rem auto;
  margin-bottom: 2rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  > h3 {
    color: #002200;
    text-align: center;
  }

  &:hover {
    transform: scale(1.2);
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
export const GreenArrow = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a000' %3E%3Cpath d='M12 2L2 22h20L12 2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  transform: scaleY(-1);
  animation: moveArrow 1s infinite alternate ease-in-out;

  @keyframes moveArrow {
    0% {
      transform: scaleY(-1) translateY(0);
    }
    100% {
      transform: scaleY(-1) translateY(-10px);
    }
  }
`;


export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 320px;
  width: 320px;
  height: 3rem;
  margin-top: 1rem;
  margin-left: 0;
  margin-bottom: 3rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #25d366;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    animation-name: growAndShrink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: #fff;
    color: #25d366;
    border: 1px solid #25d366;
    cursor: pointer;
  }

  @keyframes growAndShrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

export const ContactButtonIcon = styled(Image)`
  margin-right: 1rem;
  filter: invert(1);
`;

import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-image: linear-gradient(
    45deg,
    rgba(0, 120, 40, 0.7),
    rgba(0, 80, 40, 0.9)
  );
  text-align: center;
  font-size: 1rem;
  color: white;
  padding: 2rem 1rem;

  h3{
    margin-bottom: 2rem;
  }

  > div {
    @media(min-width: 769px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    div {
      display: flex;
      flex: row;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    p{
      margin-top: 0;
    }
  }
`;

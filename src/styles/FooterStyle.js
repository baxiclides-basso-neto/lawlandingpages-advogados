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

  h3 {
    margin-bottom: 2rem;
  }

  > div {
    @media (min-width: 769px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    div {
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
    }
    p {
      margin-top: 0;
    }
  }
`;

export const SpanFooter = styled.span`
  font-size: 0.8rem;

  @media (min-width: 769px) {
    font-size: 1.2rem;
  }
`;

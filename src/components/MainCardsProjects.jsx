import React from "react";
import { CardsArray } from "../helpers/ProjectsList";
import Image from "next/image";
import { StyledSection, StyledCard } from "@/styles/MainCardsProjects";

const MainCardsProjects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <StyledSection>
      {CardsArray.map((card) => (
        <StyledCard
          key={card.id}
          onClick={() => handleClick(card.link)}
          style={{ cursor: "pointer" }}
        >
          <Image src={card.image} alt={card.title} width={300} height={150} />
          <h3>{card.title}</h3>
        </StyledCard>
      ))}
    </StyledSection>
  );
};
export default MainCardsProjects;

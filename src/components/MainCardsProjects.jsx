import React from "react";
import { CardsArray } from "../helpers/ProjectsList";
import Image from "next/image";
import {
  StyledSection,
  StyledCard,
  ButtonBox,
  GreenArrow,
} from "@/styles/MainCardsProjectsStyle";
import {
  ContactButton,
  ContactButtonIcon,
} from "@/styles/MainCardsProjectsStyle.js";

const MainCardsProjects = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  function handleWhatsAppClickLandingPage() {
    const phoneNumber = "5517991843732";
    const message =
      "Olá, gostaria de falar sobre os serviços de LandingPages.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <>
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
      <ButtonBox>
        <GreenArrow />
        <ContactButton onClick={handleWhatsAppClickLandingPage} >
          <ContactButtonIcon
            src="whatsapp.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
          />
          Fale conosco pelo WhatsApp
        </ContactButton>
      </ButtonBox>
    </>
  );
};
export default MainCardsProjects;

import React from "react";
import {
  HeaderWrapper,
  ContactButton,
  ContactButtonIcon,
  HeaderContent,
  HeaderDescSection,
  LogoSection,
  LogoText,
  SubTitle,
  Title,
  BackgroundImage,
  LogoImage,
} from "@/styles/HeaderStyle";

const HeaderComponent = () => {
  function handleWhatsAppClickLandingPage() {
    const phoneNumber = "5517991843732";
    const message =
      "Olá, gostaria de falar sobre os serviços de LandingPages";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  return (
    <HeaderWrapper>
      <BackgroundImage />
      <HeaderContent>
        <LogoSection>
          <LogoImage
            src="/logooficial.png"
            alt="logo"
            width={250}
            height={230}
          />
        </LogoSection>
        <HeaderDescSection>
          <Title>
            Conecte-se ao sucesso: mais clientes, mais resultados, maior
            prosperidade!
          </Title>
          <SubTitle>
            Alcance seu potencial máximo com nossas soluções digitais inovadoras
            para advogados.
          </SubTitle>
          <ContactButton onClick={handleWhatsAppClickLandingPage}>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
            />
            Fale conosco pelo WhatsApp
          </ContactButton>
        </HeaderDescSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderComponent;

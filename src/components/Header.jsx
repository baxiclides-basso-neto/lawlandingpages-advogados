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
} from "@/styles/HeaderStyle";

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <BackgroundImage />
      <HeaderContent>
        <LogoSection>
          <LogoText>Logo</LogoText>
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
          <ContactButton>
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

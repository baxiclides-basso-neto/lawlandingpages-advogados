import React from "react";
import { StyledFooter } from "@/styles/FooterStyle";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <StyledFooter>
      <h3>
        Maximize seu potencial online com nossas landing pages de sucesso.
      </h3>

      <div>
        <div>
          <Image
            src="phone-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>(17) 99184-3732</span>
        </div>
        <div>
          <Image
            src="envelope-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>lawlandingpages@gmail.com.br</span>
        </div>
        <h2>
          Instalação de Global Site Tag e Tag de Conversão com otimização de
          velocidade em até 4 dias úteis!
        </h2>
        <p>
          Impulsione seu sucesso: Rastreamento avançado, velocidade relâmpago e
          SEO poderoso ao seu alcance!
        </p>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;

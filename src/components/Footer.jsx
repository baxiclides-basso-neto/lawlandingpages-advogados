import React from "react";
import { StyledFooter, SpanFooter } from "@/styles/FooterStyle";
import Image from "next/image";
import Link from "next/link";

export const FooterComponent = () => {
  return (
    <StyledFooter>
      <h3>
        Maximize seu potencial online com nossas landing pages de sucesso.
      </h3>
      <div>
        <Link href="https://wa.me/5517991843732?text=Olá!">
          <div>
            <Image
              src="whatsapp.svg"
              alt="Ícone do WhatsApp"
              width={20}
              height={20}
            />
            <SpanFooter>(17) 99184-3732</SpanFooter>
          </div>
        </Link>
        <div>
          <Link href="mailto:lawlandingpages@gmail.com.br">
            <div>
              <Image
                src="envelope-solid.svg"
                alt="Ícone do e-mail"
                width={20}
                height={20}
              />
              <SpanFooter>lawlandingpages@gmail.com.br</SpanFooter>
            </div>
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/baxiclides_basso_neto/">
            <div>
              <Image
                src="square-instagram.svg"
                alt="Ícone do Instagram"
                width={20}
                height={20}
              />
              <SpanFooter>
              https://www.instagram.com/lawlandingpages/
              </SpanFooter>
            </div>
          </Link>
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

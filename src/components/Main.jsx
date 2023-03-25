import React from "react";
import { Main } from "@/styles/MainStyle";
import MainCardsProjects from "./MainCardsProjects";
import FooterComponent from "./Footer";

const MainComponent = () => {
  return (
    <Main>
      <section>
        <div className="mainWrapper">
          <div className="divHeader">
            <h1>SUA LANDING PAGE ENTREGUE E PUBLICADA! SOMOS UMA EQUIPE DE PROGRAMADORES PROFISSIONAIS!</h1>
            <h3>
              Instalação de Global Site Tag e Tag de Conversão com otimização de
              velocidade em até 4 dias úteis!
            </h3>
            <h4>
              Impulsione seu sucesso: Rastreamento avançado, velocidade
              relâmpago e SEO poderoso ao seu alcance!
            </h4>
            <hr />
          </div>
          <div className="divCardsProjects">
            <h3>
              {" "}
              Clique nas imagens abaixo e confira um pouco sobre o nosso
              trabalho.
            </h3>
            <div className="divWrapperCardsProjects">
              <MainCardsProjects />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default MainComponent;

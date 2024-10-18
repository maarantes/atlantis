import React from "react";
import "./CardClienteGeral.scss";
import BotaoCTA from "../BotaoCTA/BotaoCTA";

const CardClienteGeral = () => {
  
  return (
    <div className="cli_card">
      <div className="cli_card_cima">
        <div className="cli_card_nome">
          <p className="cli_tipo">Titular</p>
          <p>Pedro Oliveira de Souza</p>
        </div>
        <BotaoCTA escrito="Excluir" aparencia="secundario" cor="vermelho" />
        <BotaoCTA escrito="Editar" aparencia="primario" />
      </div>
      <div className="cli_card_baixo">
        <div className="cli_card_secao_vertical">
          <div className="cli_secao">
            <p className="cli_secao_titulo">Dependentes: 04</p>
            <p>Maria de Oliveira</p>
            <p>Roberto de Oliveira</p>
            <p>Jennifer de Oliveira</p>
            <p>Mario de Oliveira</p>
          </div>
        </div>
        <div className="cli_card_secao_vertical">
          <div className="cli_secao">
            <p className="cli_secao_titulo">Endereço</p>
            <p>Rua: Rua das flores</p>
            <p>Bairro: Jardim Oriente</p>
            <p>Cidade: São Paulo</p>
            <p>Estado: SP</p>
            <p>País: Brasil</p>
            <p>Código Postal: 12236-100</p>
          </div>
        </div>
        <div className="cli_card_secao_vertical">
          <div className="cli_secao">
            <p className="cli_secao_titulo">Telefones</p>
            <p>(00) 00000-0000</p>
            <p>(00) 00000-0000</p>
          </div>
        </div>
        <div className="cli_card_secao_vertical">
          <div className="cli_secao">
            <p className="cli_secao_titulo">Documentos: 02</p>
            <p>RG, CNH</p>
          </div>
        </div>
        <div className="cli_card_secao_vertical">
          <div className="cli_secao">
            <p className="cli_secao_titulo">Acomodação</p>
            <p>Quarto Casal Duplo</p>
            <p>ID 05</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClienteGeral;

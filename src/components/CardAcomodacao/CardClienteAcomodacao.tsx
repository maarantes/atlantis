import React from "react";
import "./CardClienteAcomodacao.scss";
import BotaoCTA from "../BotaoCTA/BotaoCTA";

interface CardClienteAcomodacaoProps {
  acomodacao: string;
  ocupante: string;
  diasAssociado: string;
  ocupacaoTermina: string;
  onEditar: () => void;
}

const CardClienteAcomodacao: React.FC<CardClienteAcomodacaoProps> = ({
  acomodacao,
  ocupante,
  diasAssociado,
  ocupacaoTermina,
  onEditar
}) => {
  return (
    <div className="caco_container">
      <div className="caco_esq_container">
      <div className="caco_esq">
        <h2>Acomodação: {acomodacao}</h2>
        <p>Ocupado por: <span>{ocupante}</span></p>
      </div>
      <div className="caco_esq">
        <p>Ocupado faz: <span>{diasAssociado}</span></p>
        <p>Ocupação termina no dia: <span>{ocupacaoTermina}</span></p>
      </div>
      </div>
      <div className="caco_dir">
        <BotaoCTA escrito="Deletar" aparencia="secundario" cor="vermelho" />
        <BotaoCTA escrito={ocupante === "Ninguém" ? "Associar Cliente" : "Editar"} aparencia="secundario" onClick={onEditar} />
      </div>
    </div>
  );
};

export default CardClienteAcomodacao;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../CardClienteGeral/CardClienteGeral.scss";
import "./CardClienteDocumentos.scss";
import BotaoCTA from "../BotaoCTA/BotaoCTA";

const CardClienteDocumentos = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleEditarClick = () => {
    navigate("/documentos/editar");
  };

  return (
    <div className="cli_card">
      <div className="cli_card_cima">
        <div className="cli_card_nome">
          <p className="cli_tipo">Titular</p>
          <p>Pedro Oliveira de Souza</p>
        </div>
        <BotaoCTA escrito="Editar" aparencia="primario" onClick={handleEditarClick} />
      </div>
      <div className="cli_card_baixo">
        <div className="cli_card_secao_documento">
          <div className="cli_secao">
            <p><span className="cli_card_tipo_documento">RG:</span> 37.331.284-2</p>
          </div>
          <div className="cli_secao">
            <p><span className="cli_card_tipo_documento">CPF:</span> 246.806.710-09</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClienteDocumentos;
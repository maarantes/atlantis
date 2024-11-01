import React, { useState } from "react";
import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import CardClienteGeral from "../../components/CardClienteGeral/CardClienteGeral";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./CadastroCliente.scss";

function CadastroCliente() {
  const [dependentes, setDependentes] = useState([{ id: 1 }]);
  const [telefones, setTelefones] = useState([{ id: 1 }]);
  const [tipoPessoa, setTipoPessoa] = useState("titular");

  const adicionarDependente = () => {
    if (tipoPessoa === "titular") {
      setDependentes([...dependentes, { id: dependentes.length + 1 }]);
    }
  };

  const removerDependente = (id: number) => {
    setDependentes(dependentes.filter((dependente) => dependente.id !== id));
  };

  const adicionarTelefone = () => {
    setTelefones([...telefones, { id: telefones.length + 1 }]);
  };

  const removerTelefone = (id: number) => {
    setTelefones(telefones.filter((telefone) => telefone.id !== id));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container margem_5">
        <h2 className="cad_titulo">Cadastrar Cliente</h2>
        <div className="cad_container">
          
          <div className="cad_input_cima">
          <div className="cad_input cad_metade">
            <label htmlFor="nome">Nome</label>
            <input className="cad_input_nome" type="text" id="nome" placeholder="Digite aqui..." />
          </div>

          <div className="cad_input cad_metade">
            <div>
            <label>Tipo de Pessoa</label>
            <div className="cad_radio_cima cad_radio">
              <label>
                <input
                  type="radio"
                  value="titular"
                  checked={tipoPessoa === "titular"}
                  onChange={() => setTipoPessoa("titular")}
                />
                Titular
              </label>
              </div>
              <div className="cad_radio">
              <label>
                <input
                  type="radio"
                  value="dependente"
                  checked={tipoPessoa === "dependente"}
                  onChange={() => setTipoPessoa("dependente")}
                />
                Dependente
              </label>
              </div>
            </div>
          </div>
          </div>

          <h3 className="cad_titulo_secao">Endereço</h3>
          <div className="cad_endereco">
            <div className="cad_input">
              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" placeholder="Digite aqui..." />
            </div>
            <div className="cad_input">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" placeholder="Digite aqui..." />
            </div>
            <div className="cad_input">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" placeholder="Digite aqui..." />
            </div>
            <div className="cad_input">
              <label htmlFor="estado">Estado</label>
              <input type="text" id="estado" placeholder="Digite aqui..." />
            </div>
            <div className="cad_input">
              <label htmlFor="pais">País</label>
              <input type="text" id="pais" placeholder="Digite aqui..." />
            </div>
            <div className="cad_input">
              <label htmlFor="postal">Código Postal</label>
              <input type="text" id="postal" placeholder="Digite aqui..." />
            </div>
          </div>

          <div className="cad_baixo">
            <div className="cad_baixo_esq">
              <h3 className="cad_titulo_secao">Telefones</h3>
              {telefones.map((telefone, index) => (
                <div key={telefone.id} className="cad_input maior">
                  <label htmlFor={`telefone_${telefone.id}`}>
                    Telefone {index + 1}
                  </label>
                  <div className="cad_input_poder_remover">
                    <input
                      type="text"
                      id={`telefone_${telefone.id}`}
                      placeholder="Digite aqui..."
                    />
                    <BotaoCTA
                      escrito="Remover"
                      aparencia="secundario"
                      cor="vermelho"
                      onClick={() => removerTelefone(telefone.id)}
                    />
                  </div>
                </div>
              ))}
              <div>
                <BotaoCTA
                  escrito="ADD Telefone"
                  aparencia="secundario"
                  onClick={adicionarTelefone}
                />
              </div>
            </div>

            <div className={`cad_baixo_dir ${tipoPessoa === "dependente" ? "transparencia" : ""}`}>
              <h3 className="cad_titulo_secao">Dependentes</h3>
              {dependentes.map((dependente, index) => (
                <div key={dependente.id} className="cad_input maior">
                  <label htmlFor={`dependente_${dependente.id}`}>
                    Dependente {index + 1}
                  </label>
                  <div className="cad_input_poder_remover">
                    <input
                      type="text"
                      id={`dependente_${dependente.id}`}
                      placeholder="Digite aqui..."
                    />
                    <BotaoCTA
                      escrito="Remover"
                      aparencia="secundario"
                      cor="vermelho"
                      onClick={() => removerDependente(dependente.id)}
                    />
                  </div>
                </div>
              ))}
              <div>
                <BotaoCTA
                  escrito="ADD Dependente"
                  aparencia="secundario"
                  onClick={adicionarDependente}
                />
              </div>
            </div>
          </div>

          <div className="cad_botao_cadastro">
            <BotaoCTA
              escrito="Cadastrar Cliente"
              aparencia="primario"
              cor="verde"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroCliente;

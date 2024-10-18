import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import CardClienteGeral from "../../components/CardClienteGeral/CardClienteGeral";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./CadastroCliente.scss"

function CadastroCliente() {
  
    return (
      <>
        <Sidebar />
        <Navbar />
        <div className="container margem_5">
            <h2 className="cad_titulo">Cadastrar Cliente</h2>
            <div className="cad_container">
              <div className="cad_input cad_metade">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite aqui..." />
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
                  <div className="cad_input maior">
                    <label htmlFor="telefone">Telefone 01</label>
                    <div className="cad_input_poder_remover">
                      <input type="text" id="telefone" placeholder="Digite aqui..." />
                      <BotaoCTA escrito="Remover" aparencia="secundario" cor="vermelho" />
                    </div>
                  </div>
                  <div>
                    <BotaoCTA escrito="ADD Telefone" aparencia="secundario" />
                  </div>
                </div>
                <div className="cad_baixo_dir">
                  <h3 className="cad_titulo_secao">Dependentes</h3>
                  <div className="cad_input maior">
                    <label htmlFor="dependente">Dependente 01</label>
                    <div className="cad_input_poder_remover">
                      <input type="text" id="dependente" placeholder="Digite aqui..." />
                      <BotaoCTA escrito="Remover" aparencia="secundario" cor="vermelho" />
                    </div>
                  </div>
                  <div>
                    <BotaoCTA escrito="ADD Dependente" aparencia="secundario" />
                  </div>
                </div>
              </div>

              <div className="cad_botao_cadastro">
                <BotaoCTA escrito="Cadastrar Cliente" aparencia="primario" cor="verde" />
              </div>

            </div>
        </div>
      </>
    );
  }
  
export default CadastroCliente;
  
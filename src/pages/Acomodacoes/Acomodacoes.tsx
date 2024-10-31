import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Modal from "react-modal";
import { useState } from "react";
import "./Acomodacoes.scss";
import CardClienteAcomodacao from "../../components/CardAcomodacao/CardClienteAcomodacao";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '32px',
    width: '33%',
    borderRadius: '24px'
  },
};

Modal.setAppElement('#root');

function Acomodacoes() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    tipo: string;
    descricao: string;
    camasSolteiro: number;
    camasCasal: number;
    suites: number;
    climatizacao: string;
    garagem: number;
  } | null>(null);

  const openModal = (
    tipo: string,
    descricao: string,
    camasSolteiro: number,
    camasCasal: number,
    suites: number,
    climatizacao: string,
    garagem: number
  ) => {
    setModalContent({
      tipo,
      descricao,
      camasSolteiro,
      camasCasal,
      suites,
      climatizacao,
      garagem,
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  const CardAcomodacao = ({
    tipo,
    descricao,
    quantidade,
    camasSolteiro,
    camasCasal,
    suites,
    climatizacao,
    garagem,
  }: {
    tipo: string;
    descricao: string;
    quantidade: number;
    camasSolteiro: number;
    camasCasal: number;
    suites: number;
    climatizacao: string;
    garagem: number;
  }) => {
    return (
      <div className="acom_card">
        <h4>TIPO {tipo}</h4>
        <p>{descricao}</p>
        <p className="acom_card_quantidade">Atual: {quantidade}</p>
        <BotaoCTA
          escrito="Detalhes"
          aparencia="secundario"
          onClick={() => openModal(tipo, descricao, camasSolteiro, camasCasal, suites, climatizacao, garagem)} 
        />
         <BotaoCTA
          escrito="Criar"
          aparencia="primario"
          cor="verde" 
        />
      </div>
    );
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container margem_5">
        <div className="acom_cima">
          <h2>Criar Acomodação</h2>

          <div className="acom_card_container">
            <CardAcomodacao tipo="01" descricao="Casal Simples" quantidade={0o1} camasSolteiro={0} camasCasal={1} suites={1} climatizacao="Sim" garagem={1} />
            <CardAcomodacao tipo="02" descricao="Família Simples" quantidade={0o1} camasSolteiro={2} camasCasal={1} suites={1} climatizacao="Sim" garagem={1} />
            <CardAcomodacao tipo="03" descricao="Família Mais" quantidade={0o0} camasSolteiro={5} camasCasal={1} suites={2} climatizacao="Sim" garagem={2} />
            <CardAcomodacao tipo="04" descricao="Família Super" quantidade={0o0} camasSolteiro={6} camasCasal={2} suites={3} climatizacao="Sim" garagem={2} />
            <CardAcomodacao tipo="05" descricao="Solteiro Simples" quantidade={0o1} camasSolteiro={1} camasCasal={0} suites={1} climatizacao="Sim" garagem={0} />
            <CardAcomodacao tipo="06" descricao="Solteiro Mais" quantidade={0o0} camasSolteiro={0} camasCasal={1} suites={1} climatizacao="Sim" garagem={1} />
          </div>
        </div>

        <div className="acom_baixo">
          <h2 className="acom_baixo_titulo">Lista de Acomodações</h2>
          <CardClienteAcomodacao
            acomodacao="Casal Simples"
            ocupante="Bianca Faria de Souza"
            diasAssociado="5 dias"
            ocupacaoTermina="02/05/2024"
            onEditar={() => console.log("Editar clicado")}
          />

          <CardClienteAcomodacao
            acomodacao="Família Simples"
            ocupante="Guilherme Vasconce..."
            diasAssociado="2 dias"
            ocupacaoTermina="05/05/2024"
            onEditar={() => console.log("Editar clicado")}
          />

          <CardClienteAcomodacao
            acomodacao="Solteiro Simples"
            ocupante="Ninguém"
            diasAssociado="N/A"
            ocupacaoTermina="N/A"
            onEditar={() => console.log("Editar clicado")}
          />


        <div className="acom_lista">

        </div>

        </div>
      </div>

      {/* Modal com estilos customizados */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes da Acomodação"
        style={customStyles}
      >
        {modalContent && (
          <div className="acom_modal">
            <h4 className="acom_modal_titulo">Detalhes da Acomodação {modalContent.tipo}</h4>
            <div>
              <div className="acom_especificacoes">
                <p><span>Camas de Solteiro:</span> {modalContent.camasSolteiro}</p>
                <p><span>Camas de Casal:</span> {modalContent.camasCasal}</p>
                <p><span>Suítes:</span> {modalContent.suites}</p>
                <p><span>Climatização:</span> {modalContent.climatizacao}</p>
                <p><span>Garagem:</span> {modalContent.garagem}</p>
              </div>
            </div>
            <BotaoCTA escrito="Fechar" aparencia="secundario" onClick={closeModal}/>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Acomodacoes;
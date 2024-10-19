import { useState } from "react";
import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditarDocumentos.scss";

function EditarDocumento() {
  const [documentos, setDocumentos] = useState([{ id: 1 }]);

  const adicionarDocumento = () => {
    setDocumentos([...documentos, { id: documentos.length + 1 }]);
  };

  const removerDocumento = (id: number) => {
    setDocumentos(documentos.filter((documento) => documento.id !== id));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container margem_5">
        <h2 className="edoc_titulo">Editar Documentos</h2>
        <p className="edoc_titular">TITULAR: Pedro Oliveira de Souza</p>

        <div className="edoc_inputs">
          {documentos.map((documento, index) => (
            <div key={documento.id} className="cad_input maior">
              <label htmlFor={`documento_${documento.id}`}>
                Documento {index + 1}
              </label>
              <div className="cad_input_poder_remover">
                <input
                  type="text"
                  id={`documento_${documento.id}`}
                  placeholder="Digite aqui..."
                />
                <BotaoCTA
                  escrito="Remover"
                  aparencia="secundario"
                  cor="vermelho"
                  onClick={() => removerDocumento(documento.id)}
                />
              </div>
            </div>
          ))}

          <div>
            <BotaoCTA
              escrito="ADD Documento"
              aparencia="secundario"
              onClick={adicionarDocumento}
            />
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

export default EditarDocumento;
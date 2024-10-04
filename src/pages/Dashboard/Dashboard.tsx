import { useNavigate } from "react-router-dom";
import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss"

function Dashboard() {

  const navigate = useNavigate();

  const handleNavigateClientes = () => {
    navigate('/clientes');
  };

  const handleNavigateDocumentos = () => {
    navigate('/documentos');
  };

  const handleNavigateAcomodacoes = () => {
    navigate('/acomodacoes');
  };
    
  return (
    <>
    <Sidebar />
    <Navbar />
      <div className="container">
        <div className="dash_container margem_5">
          <h2>Páginas de Gerenciamento</h2>
          <div className="dash_card_container">
            <div className="dash_card">
              <p>Clientes</p>
              <BotaoCTA escrito="Acessar" aparencia="primario" onClick={handleNavigateClientes}/>
            </div>
            <div className="dash_card">
              <p>Documentos</p>
              <BotaoCTA escrito="Acessar" aparencia="primario" onClick={handleNavigateDocumentos}/>
            </div>
            <div className="dash_card">
              <p>Acomodações</p>
              <BotaoCTA escrito="Acessar" aparencia="primario" onClick={handleNavigateAcomodacoes}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
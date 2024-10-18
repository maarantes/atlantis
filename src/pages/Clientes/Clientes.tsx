import { useNavigate } from "react-router-dom";
import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import CardClienteGeral from "../../components/CardClienteGeral/CardClienteGeral";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Clientes.scss"

function Clientes() {

    const navigate = useNavigate();

    const handleNavigateCadastro = () => {
        navigate('/clientes/cadastro');
    };
  
    return (
      <>
        <Sidebar />
        <Navbar />
        <div className="container margem_5">
            <h2 className="cli_titulo">Clientes Cadastrados</h2>
            <BotaoCTA escrito="Cadastrar Cliente" aparencia="primario" onClick={handleNavigateCadastro}/>
            <div className="cli_container">
                <CardClienteGeral />
                <CardClienteGeral />
            </div>
        </div>
      </>
    );
  }
  
export default Clientes;
  
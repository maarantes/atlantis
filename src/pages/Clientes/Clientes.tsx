import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import CardClienteGeral from "../../components/CardClienteGeral/CardClienteGeral";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Clientes.scss"

function Clientes() {
    return (
      <>
        <Sidebar />
        <Navbar />
        <div className="container">
            <h2 className="cli_titulo margem_5">Clientes Cadastrados</h2>
            <div className="cli_container margem_5">
                <CardClienteGeral />
                <CardClienteGeral />
            </div>
        </div>
      </>
    );
  }
  
export default Clientes;
  
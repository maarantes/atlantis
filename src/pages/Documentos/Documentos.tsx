import CardClienteDocumentos from "../../components/CardClienteDocumentos/CardClienteDocumentos";
import CardClienteGeral from "../../components/CardClienteGeral/CardClienteGeral";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Documentos.scss"

function Documentos() {

    return (
      <>
        <Sidebar />
        <Navbar />
        <div className="container margem_5">
            <h2 className="cli_titulo">Lista de Documentos</h2>
            <div className="cli_container">
                <CardClienteDocumentos />
                <CardClienteDocumentos />
            </div>
        </div>
      </>
    );
  }
  
export default Documentos;
  
import BotaoCTA from "../../components/BotaoCTA/BotaoCTA";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss"

function Dashboard() {
    
  return (
    <>
    <Sidebar />
    <Navbar />
      <div className="container">
        <div className="testar margem_5">
          <p>Olá tudo bem contigo</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
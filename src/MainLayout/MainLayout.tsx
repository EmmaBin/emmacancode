import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import { Footer } from "../components/Footer/Footer";
import './layout.css'
function MainLayout() {
  return (

    <div className="App">


      <div className="header">
        <Header />
      </div>

      <div className="content">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>



    </div>

  );
}

export default MainLayout;
import { onAuthStateChanged } from "firebase/auth";
import Graph from "../../components/Chart/Chart";
import Navbar from "../../components/Navbar";
import Piechrt from "../../components/Pie/Pie";
import Sidebar from "../../components/Sidebar";
import Tasks from "../../components/Tasks";
import Top from "../../components/Top";
import Dashboard from "./Dashboard.module.css";
import { firbaseauth } from "../../utils/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(firbaseauth, (user) => {
      if (!user) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setUser(user);
      }
    });
  }, [onAuthStateChanged]);

  return (
    <div>
      {!user ? (
        <div className="flex flex-col justify-center items-center">
          <h1>Authenticating User. Please login to view the DashBoard</h1>
          <p>redirecting.....</p>
          <div className="pyramid-loader">
            <div className="rap">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${Dashboard.home}`}>
          <Sidebar />
          <div className={`${Dashboard.main} w-full `}>
            <Navbar></Navbar>
            <Top></Top>
            <Graph />
            <div className={`${Dashboard.wrap} w-4/5`}>
              <Piechrt />
              <Tasks></Tasks>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/ContextProvider";
import "./Home.css";
const Home = () => {
  const { setMode } = useContext(AppContext);
  let history = useHistory();

  return (
    <div className="container">
      <div className="home-div">
        <div className="center-div">
          <div className="top">
            <div className="lt">t</div>
            <div className="mt">i</div>
            <div className="rt">c</div>
          </div>
          <div className="middle">
            <div className="lm">t</div>
            <div className="mm">a</div>
            <div className="rm">c</div>
          </div>
          <div className="bottom">
            <div className="lb">t</div>
            <div className="mb">o</div>
            <div className="rb">e</div>
          </div>
        </div>
        <div className="div-btn">
          <button  onClick={() => {
               setMode('single')
            history.push("/game");
          }}>Single Player</button>
           <button  onClick={() => {
               setMode('multi')
            history.push("/game");
          }}>Multi Player</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

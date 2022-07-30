import "./Lands.css";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SingleLand from "../SingleLand/SingleLand";
import {lands3} from '../../lands'



const Lands = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    //requestsLands();
    localStorage.removeItem("BuyLand");
  }, []);

//   async function requestsLands() {
//     const res = await fetch("api/lands");
//     const json = await res.json();
//     setLands(json);
//   }

//   if (!localStorage.getItem("user")) {
//     return <Navigate to="/log-in" />;
//   } else
    return (
      <div className="allLand">
      
        {!lands3.length ? (
          <h1>Loading...</h1>
        ) : (
          lands3.map((land, index) => <SingleLand key={index} info={land} />)
        )}
        
      </div>
    );
};

export default Lands;

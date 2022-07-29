import "./SingleLand.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import colors from "../../constants/colors";

const SingleLand = ({ info }) => {
  const { ownerID, _id, type, forSale } = info;
  const [color, setColor] = useState("");

  const chooseColor = (type) => {
    let tmp;
    if (ownerID === localStorage.getItem("user") && type === "Real Estate")
      tmp = "red";
    else if (type === "Park") tmp = colors.park ;
    else if (type === "Road") tmp = colors.road;
    else if (type === "Real Estate" && forSale === true) tmp = colors.for_sale;
    else if (type === "Real Estate" && forSale === false) tmp = colors.not_for_sale;
    setColor(tmp);
  };

  useEffect(() => {
    chooseColor(type);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Link to={`/land/${_id}`} land={info}>
      <span className="SingleLand">
        <div className="item" style={{ backgroundColor: color }}></div>
      </span>
    </Link>
  );
};

export default SingleLand;

import "./LandInfo.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../../UserContext";
import { Navigate } from "react-router-dom";

const LandInfo = () => {
  const params = useParams();
  const [landFromDB, setLandFromDB] = useState({});
  const [currentUser] = useContext(UserContext);
  const [id] = useState(params.id);

  async function fetchLandFromDB() {
    const res = await fetch(`/api/lands/${id}`);
    const json = await res.json();
    try {
      if (json) {
        setLandFromDB(json);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetchLandFromDB();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

 
    return (
      <div className="wrapper">
        <div className="title-landInfo">
          <h2>
            <u>Land Information</u>
          </h2>
        </div>
        <div className="edit-info">
          {localStorage.getItem("user") === landFromDB.ownerID &&
            landFromDB.type === "Real Estate" && (
              <Link
                land={landFromDB}
                id="edit-land"
                to={`/updateLand/${landFromDB._id}`}
              >
                edit land
              </Link>
            )}
        </div>
        <div className="content">
          <div>
            <u>
              <strong>Owner:</strong>
            </u>{" "}
            {landFromDB.owner}
          </div>
          <div>
            <u>
              <strong>type of land:</strong>
            </u>{" "}
            {landFromDB.type}
          </div>
          {landFromDB.type === "Real Estate" && (
            <div>
              <u>
                <strong>Is for sale:</strong>
              </u>{" "}
              {landFromDB.forSale === true ? "Yes!" : "No 😒"}
            </div>
          )}
          {landFromDB.type === "Real Estate" && landFromDB.forSale === true && (
            <div className="buy-land">
              <u>
                <strong>Land price:</strong>
              </u>{" "}
              {landFromDB.price} $
              {currentUser.id !== landFromDB.ownerID &&
                currentUser.role === "Buyer" && (
                  <div className="link-buy-land">
                    <br />
                    <br />
                    <Link id="buy-land" to={`/buy-land/${landFromDB._id}`}>
                      Buy This Land
                    </Link>
                  </div>
                )}
            </div>
          )}
        </div>

        {landFromDB.type === "Real Estate" && (
          <iframe
            id="game-window"
            title="game-window"
            src={landFromDB.game}
            width="1000px"
            height="500px"
          ></iframe>
        )}
      </div>
    );
};

export default LandInfo;

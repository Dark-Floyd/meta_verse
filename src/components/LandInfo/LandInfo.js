import './LandInfo.css'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../../UserContext'
import { Navigate } from 'react-router-dom'
import { buyLand, getSingleLand, getUserDetails } from '../../api'
import { Button, ButtonGroup, Card, Spinner } from 'react-bootstrap'

const LandInfo = (token) => {
  const params = useParams()
  const [id] = useState(params.id)

  const [land, setLand] = useState()
  const [money, setMoney] = useState()
  const [isBought, setIsBought] = useState(false)  

  const fetchSingleLand = useCallback(async () => {
    const res = await getSingleLand(id)
    console.log(res)
    setLand(res)
  }, [])

  const fetchUserDetails = useCallback(async () => {
    console.log(token.token)
    const res = await getUserDetails(token.token)
    console.log(res)
    setMoney(res)
  }, [])

  const fetchTryToBuy = useCallback(async () => {
    console.log(token.token)
    const res = await buyLand(token.token,id)
    console.log(res)
    setIsBought(res)
  }, [])

  const renderLand = (land) => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Owner: {land.ownerName}</Card.Title>
          <Card.Text>Price:{land.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {land.isOnSale ? (
            <div>This property is for sale!</div>
          ) : (
            <div>Not for sale!</div>
          )}
        </Card.Footer>
      </Card>
    )
  }
  const renderMoney = (money) => {
    return<Card>{money}</Card>
  }

  const handleBuying = () =>{
    fetchTryToBuy()
  }
  // createdAt: "2022-08-01T13:08:36.833Z"
  // game: "https://dark-floyd.github.io/Webtech2/"
  // isOnSale: false
  // ownerId: "62e7d04ff620778ce61447e7"
  // ownerName: "Z&D.Ltd"
  // price: 195.92
  // type: "PROPERTY"
  // updatedAt: "2022-08-01T13:08:36.833Z"
  // x_coordinate: 25
  // y_coordinate: 99
  // __v: 0
  // _id: "62e7d052f620778ce61451af"

  useEffect(() => {
    fetchSingleLand()
    fetchUserDetails()
  }, [money])
  return (
    <div>
      {land ? <div>{renderLand(land)} </div> : <Spinner animation="grow" />}
      {money ? <div>{renderMoney(money)} </div> : <Spinner animation="grow" />}
      {isBought? <div>This property belongs to you</div>:<div>You cannot buy this property</div>}
      <Card>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onclick={handleBuying}>Buy</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Card>
    </div>

    //   <div className="wrapper">
    //     <div className="title-landInfo">
    //       <h2>
    //         <u>Land Information</u>
    //       </h2>
    //     </div>
    //     <div className="edit-info">
    //       {localStorage.getItem("user") === landFromDB.ownerID &&
    //         landFromDB.type === "Real Estate" && (
    //           <Link
    //             land={landFromDB}
    //             id="edit-land"
    //             to={`/updateLand/${landFromDB._id}`}
    //           >
    //             edit land
    //           </Link>
    //         )}
    //     </div>
    //     <div className="content">
    //       <div>
    //         <u>
    //           <strong>Owner:</strong>
    //         </u>{" "}
    //         {landFromDB.owner}
    //       </div>
    //       <div>
    //         <u>
    //           <strong>type of land:</strong>
    //         </u>{" "}
    //         {landFromDB.type}
    //       </div>
    //       {landFromDB.type === "Real Estate" && (
    //         <div>
    //           <u>
    //             <strong>Is for sale:</strong>
    //           </u>{" "}
    //           {landFromDB.forSale === true ? "Yes!" : "No 😒"}
    //         </div>
    //       )}
    //       {landFromDB.type === "Real Estate" && landFromDB.forSale === true && (
    //         <div className="buy-land">
    //           <u>
    //             <strong>Land price:</strong>
    //           </u>{" "}
    //           {landFromDB.price} $
    //           {currentUser.id !== landFromDB.ownerID &&
    //             currentUser.role === "Buyer" && (
    //               <div className="link-buy-land">
    //                 <br />
    //                 <br />
    //                 <Link id="buy-land" to={`/buy-land/${landFromDB._id}`}>
    //                   Buy This Land
    //                 </Link>
    //               </div>
    //             )}
    //         </div>
    //       )}
    //     </div>

    //     {landFromDB.type === "Real Estate" && (
    //       <iframe
    //         id="game-window"
    //         title="game-window"
    //         src={landFromDB.game}
    //         width="1000px"
    //         height="500px"
    //       ></iframe>
    //     )}
    //   </div>
  )
}

export default LandInfo

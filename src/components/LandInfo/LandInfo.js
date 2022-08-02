import './LandInfo.css'
import { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../../UserContext'
import { Navigate } from 'react-router-dom'
import { buyLand, getSingleLand, getUserDetails, updateLand } from '../../api'
import { Button, ButtonGroup, Card, Spinner } from 'react-bootstrap'
import img from '../../img/nft.png'
const LandInfo = (props) => {
  const params = useParams()
  const [id] = useState(params.id)

  const [land, setLand] = useState()
  const [money, setMoney] = useState()
  const [isBought, setIsBought] = useState(false)
  const [priceUpdate, setPriceUpdate] = useState()

  const fetchSingleLand = useCallback(async () => {
    const res = await getSingleLand(id)

    setLand(res)
  }, [])

  const fetchUserDetails = useCallback(async () => {
    const res = await getUserDetails(props.token)

    setMoney(res)
  }, [])

  const fetchTryToBuy = useCallback(async () => {
    const res = await buyLand(props.token, id)
    console.log(res)
    if (res === 200) setIsBought(true)
  }, [])

  const renderType = (type)=>{
      if(type==='PROPERTY')
        return <div style={{margin:'1rem'}}>Type: Property</div>
      else if(type==='GARDEN')
        return <div style={{margin:'1rem'}}>This is a Garden</div>
      else
        return <div style={{margin:'1rem'}}>This is a road

        </div>
  }
  const fetchUpdateLand = useCallback(async () => {
    const res = await updateLand(props.token, id, priceUpdate, true)
    console.log(res)
    getSingleLand(id)
    if (res === 200) setIsBought(false)
  }, [])
  const renderLand = (land) => {
    return (
      <Fragment>
        <Card.Body>
          <Card.Title>Owner: {land.ownerName}</Card.Title>
          <Card.Text>Price:{land.price}</Card.Text>
            {renderType(land.type)}
           <a href={`${land.game}`} target="_blank" rel="noreferrer">
          <button>Game</button>
        </a>
        </Card.Body>
        <Card.Footer>
            {console.log(props.userId)}
          {land.ownerId === props.userId ? (
            <div>You own this property</div>
          ) : (
            <div>You don't own this property</div>
          )}
          {land.isOnSale ? (
            <div>This property is for sale!</div>
          ) : (
            <div>Not for sale!</div>
          )}
        </Card.Footer>
      </Fragment>
    )
  }
  const renderMoney = (money) => {
    return <div>{money}</div>
  }

  const handleBuying = () => {
    fetchTryToBuy()
  }

  const handleUpdating = ( ) => {
    fetchUpdateLand()
    
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
  }, [money, isBought,priceUpdate])

  return (
    <div className="img" style={{ backgroundImage: `url(${img})` ,height:'40rem'}}>
      <Card style={{ width: '30rem', alignSelf: 'center',margin:'2rem' }}>
        {land ? <div>{renderLand(land)} </div> : <Spinner animation="grow" />}
        {money ? (
          <div>Wallet{renderMoney(money)} </div>
        ) : (
          <Spinner animation="grow" />
        )}
        {/* {isBought ? (
          <div>This property belongs to you</div>
        ) : (
          <div>This property is not yours</div>
        )} */}
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={handleBuying}>
            Buy
          </Button>
          <Button variant="secondary" onClick={handleUpdating}>
            Put for Sale
          </Button>
          
          <input
            type="text"
            value={priceUpdate}
            onChange={(e) => setPriceUpdate(e.target.value)}
            placeholder="Enter New Value"
          />
        </ButtonGroup>
      </Card>
    </div>
  )
}

export default LandInfo
//ownerId

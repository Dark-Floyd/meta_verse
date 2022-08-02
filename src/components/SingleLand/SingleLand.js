import './SingleLand.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import LandInfo from '../LandInfo/LandInfo'

const SingleLand = (props) => {
  const { ownerId, _id, type, isOnSale } = props.info
  const [color, setColor] = useState('')

  const chooseColor = (type) => {
    let tmp
    if (ownerId === props.userId && type === 'PROPERTY')
      tmp = colors.owned
    else if (type === 'GARDEN') tmp = colors.park
    else if (type === 'ROAD') tmp = colors.road
    else if (type === 'PROPERTY' && isOnSale === true) tmp = colors.for_sale
    else if (type === 'PROPERTY' && isOnSale === false)
      tmp = colors.not_for_sale
    setColor(tmp)
  }

  useEffect(() => {
    chooseColor(type)
  }, [])

  return (
    <Link to={`/lands/${_id}`}>
      <span className="SingleLand">
        <div className="item" style={{ backgroundColor: color }}></div>
      </span>
    </Link>
  )
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

export default SingleLand

import './Lands.css'
import { useCallback, useEffect, useState } from 'react'
import SingleLand from '../SingleLand/SingleLand'
import { getAllLands } from '../../api/index'
import { Spinner } from 'react-bootstrap'

const Lands = (userId) => {
  const [lands, setLands] = useState([])

  const fetchLands = useCallback(async () => {
    const res = await getAllLands()
    
    setLands(res)
  }, [])
  const renderLands = (lands) => {
    return lands.map((land, index) => <SingleLand key={index} info={land} userId={userId.userId} />)
  }

  useEffect(() => {
    fetchLands()
  }, [])

  return (
    <div>
        {console.log(userId.userId)}
        {lands ? <div className="allLand">{renderLands(lands)} </div> : <Spinner animation="grow" />}
     
    </div>
  )
}

export default Lands

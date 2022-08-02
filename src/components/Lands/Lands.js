import './Lands.css'
import { useCallback, useEffect, useState } from 'react'
import SingleLand from '../SingleLand/SingleLand'
import { getAllLands } from '../../api/index'
import { Spinner } from 'react-bootstrap'

const Lands = () => {
  const [lands, setLands] = useState([])

  const fetchLands = useCallback(async () => {
    const res = await getAllLands()
    
    setLands(res)
  }, [])
  const renderLands = (lands) => {
    return lands.map((land, index) => <SingleLand key={index} info={land} />)
  }

  useEffect(() => {
    fetchLands()
  }, [])

  return (
    <div>
      
        {lands ? <div className="allLand">{renderLands(lands)} </div> : <Spinner animation="grow" />}
     
    </div>
  )
}

export default Lands

import axios from 'axios'

const getAllLands = async () => {
  let lands = []
  try {
    const data = await axios('https://metaverse-api.herokuapp.com/lands')
    lands = data.data.lands
    return lands
  } catch (error) {
    console.log(error)
  }
}

const getUserDetails = async (token) => {
  try {
    const response = await axios.get(
      `https://metaverse-api.herokuapp.com/users/details/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'Application/json',
        },
      },
    )
    let userDetails = response.data.money
    return userDetails
  } catch (error) {
    console.log(error)
  }
}

const getSingleLand = async (_id) => {
  try {
    console.log(`https://metaverse-api.herokuapp.com/lands/${_id}`)
    let landData = await axios(
      `https://metaverse-api.herokuapp.com/lands/${_id}`,
    )
    const land = landData.data.land
    return land
  } catch (error) {
    console.log(error)
  }
}

const buyLand = async (token, landId) => {
  console.log(token)
  console.log(landId)
  try {
    const response = await axios.post(
      `https://metaverse-api.herokuapp.com/lands/buy/${landId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'Application/json',
        },
      },
    )
    let bought = response.status
    console.log(bought)
    return bought
  } catch (error) {
    console.log(error)
  }
}

export { getAllLands, getSingleLand, getUserDetails, buyLand }

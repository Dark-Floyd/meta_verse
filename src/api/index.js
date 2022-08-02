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
  console.log(token,landId)
 
  try {
    const response = await axios.post(
      `https://metaverse-api.herokuapp.com/lands/buy/${landId}`,null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'Application/json',
        },
      },
    )
    console.log(response.status)
    let bought = response.status
   
    return bought
  } catch (error) {
    console.log(error)
  }
}

const userSignUp = async(userName, userPassword, userRole, Name)=>{
    console.log(userName)
    try {
        const response = await axios.put(
          `https://metaverse-api.herokuapp.com/auth/signup`,
          {
           "username":userName,
           "password": userPassword,
           "name": Name,
           "role": userRole
          },
        )
        let bought = response.status
        console.log(bought)
        return bought
      } catch (error) {
        console.log(error)
      }
}

const updateLand = async (token, landId,price,isOnSale) => {
    console.log(price)
   
    try {
      const response = await axios.put(
        `https://metaverse-api.herokuapp.com/lands/${landId}`,{price,isOnSale},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'Application/json',
          },
        },
      )
      
      let bought = response.status
     
      return bought
    } catch (error) {
      console.log(error)
    }
  }

export { getAllLands, getSingleLand, getUserDetails, buyLand ,userSignUp,updateLand}

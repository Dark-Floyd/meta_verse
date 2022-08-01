import axios from 'axios'



const getAllLands = async (token) => {
  let lands = []
  try {
    const headers = {
      Authorization: token,
    }
    const data = await axios('https://metaverse-api.herokuapp.com/lands')
    lands = data.data.lands
    console.log(lands)
    return lands
  } catch (error) {
    console.log(error)
  }
}

const getUserDetails = async (token) => {
  console.log(token)
  try {
    const response = await axios.get(
      `https://metaverse-api.herokuapp.com/users/details/`,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "Application/json",
        },
      },
    )
    let userDetails = response.data.money
    console.log(userDetails)
    return userDetails
  } catch (error) {
    console.log(error)
  }

  // const headers = {
  //     'Authorization': 'Bearer my-token',
  //     'My-Custom-Header': 'foobar'
  // };
  // axios.get('https://api.npms.io/v2/search?q=react', { headers })
  //     .then(response => this.setState({ totalReactPackages: response.data.total }));
}

const getSingleLand = async (_id) => {
  try {
    console.log(`https://metaverse-api.herokuapp.com/lands/${_id}`)
    let landData = await axios(
      `https://metaverse-api.herokuapp.com/lands/${_id}`,
    )
    const land = landData.data.land
    console.log(land)
    return land
  } catch (error) {
    console.log(error)
  }
}
const buyLand = async (token,landId) => {
    console.log(token)
    try {
      const response = await axios.get(
        `https://metaverse-api.herokuapp.com/lands/buy/${landId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "Application/json",
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

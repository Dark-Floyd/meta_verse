import axios from 'axios'

const client = axios.create({
    baseURL: "https://metaverse-api.herokuapp.com/auth/login" 
  });
  
const getAllLands = async () => {
  try {
    
    let lands = []
    const LandsDB = await axios('')
    
    for (let land of lands) {
      lands.push(land)
     
    }
    return lands
  } catch (error) {
    console.log(error)
  }
}

const login = async () =>{
    

}


export { getAllLands }

import axios from "axios";

export const fetchHotCryptos = async() => {
 try {
    const response =await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc%2Cmarket_cap_asc&per_page=50&page=1&sparkline=false&price_change_percentage=24h&locale=en'
      );console.log(response)
      return response.data
 } catch (error) {
    return null
 }
    }
  export const globalStats =async ()=>{

try {
   const response = await axios.get('https://api.coingecko.com/api/v3/global')
console.log('global',response.data)
   return response.data
} catch (error) {
   return null 
}

  }

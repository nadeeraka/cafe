
import axios from "axios";
import {Headers} from '../types/types'

// const options = {
//   method: 'GET',
//   url: 'https://moviesdatabase.p.rapidapi.com/titles',
//   headers: {
//     'X-RapidAPI-Key': 'a440e3a4c3msh204eb7641a0b400p1ae281jsn4560ea04dc58',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);


// }







export const  getDataFromApi = async(key?:string)=>
{
  const options:Headers = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'X-RapidAPI-Key': 'a440e3a4c3msh204eb7641a0b400p1ae281jsn4560ea04dc58',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  
  
  }
    


}
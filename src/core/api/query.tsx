
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': 'a440e3a4c3msh204eb7641a0b400p1ae281jsn4560ea04dc58',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);


}



const urL:string = 'https://moviesdatabase.p.rapidapi.com/titles';
const keyId: string  =  'X-RapidAPI-Key';
const host: string =  'X-RapidAPI-Host'

type Headers = {
  [key: string]: any;
 
};
const headers: Headers = {
  keyId  : 'https://moviesdatabase.p.rapidapi.com/titles',
   host:'moviesdatabase.p.rapidapi.com'
  };
  

// const employee: Employee = {
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// employee.country = 'Bobby Hadz';
// employee.years = [2021, 2022];



export const  getDataFromApi = async(key?:string)=>
{
  const options:any = {
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
import axios from "axios"
import { mapArrToString } from "../mapArrToString/mapArrToString";

interface UserInfo {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string; // Assuming the photo is a URL to an image
}

export const getData = async (url: string) => { 
  try {
    const response = await axios.get(`https://json-placeholder.mock.beeceptor.com/${url}`)
    const data: UserInfo[] = response.data
    const userIds = data.map(user => user.id)
    return mapArrToString(userIds)
  } catch (e){
    console.error(e)
    throw e
  }
}
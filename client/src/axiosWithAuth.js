import axios from 'axios'

export const axiosWithAuth = (req, url, obj) => {
  
  if (req == 'put') {

    return axios
      .put(url, obj, { headers: { 'Authorization': localStorage.token } })
    
  } else if (req == 'get') {

    return axios
      .get(url, { headers: { 'Authorization': localStorage.token } })
    
  } else if (req == 'post') {

    return axios
      .post(url, obj, { headers: { 'Authorization': localStorage.token } })
    
  } else if (req == 'delete') {
    
    return axios
      .delete(url, { headers: { 'Authorization': localStorage.token } })
  }
}
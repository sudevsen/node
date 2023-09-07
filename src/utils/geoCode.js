import axios from 'axios'
const getGeoCode=(address,callback)=>{
    let  url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + address;
     axios.get(url).then(resp => {   
         callback(resp)
 })};

 const geoCode = {
    getGeoCode:getGeoCode
 }

 export default geoCode
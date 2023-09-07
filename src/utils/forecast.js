import axios from 'axios'
const getForecast = (address,callback) =>
{
const url = "http://api.weatherstack.com/current?access_key=9067f87c439f0d356255e6d13d927183&query=" + address;
    axios.get(url)
.then(resp => {
     if(!resp.data.success){
        if(resp.data.error && resp.data.error.code===601){
            callback(resp.data.error.info)
        }
        else{
            {
                // callback("IT IS CURRENTLY "+resp.data.current.temperature+" DEGREES. THERE IS CURRENTLY "+resp.data.current.weather_descriptions[0])
                callback(resp.data.current)
        }
        }

    }
})
.catch((e)=>{
    callback(e)
})
}

const forecast = {
    getForecast:getForecast
 }

 export default forecast
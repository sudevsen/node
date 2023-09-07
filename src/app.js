import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'
import geoCode from './utils/geoCode.js'
import forecast from './utils/forecast.js'
const app = express()

//Paths 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publiPath = path.join(__dirname,"../public/");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials")

app.use(express.static(publiPath))

app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        h1:"Home",
        name:"Sudev" 
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        h1:"Help",
        name:"Sudev",
        msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        h1:"About",
        name:"Sudev"
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        let obj = {  
            error:"error"
        }
        res.send(obj)
    }
    else{
        forecast.getForecast(req.query.address,({temperature, weather_descriptions}={})=>{
            res.send({
                forecast:weather_descriptions[0],
                address:req.query.address,
                temperature:temperature

            })
        })
    }
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        h1:"404",
        msg:"Help Page Not Found!",
        name:"Sudev"
    })
})

app.get('/products*',(req,res)=>{
    if(!req.query.search){
        let obj = {  
            error:"error"
        }
        res.send(obj)
    }
    else{
        let obj = {  
            products:[]
        }
        res.send(obj)

    }
})

app.get('*',(req,res)=>{
    res.render('404',{
        h1:"404",
        msg:"Page Not Found!",
        name:"Sudev"
    })
})

app.listen(3000,()=>
{
    console.log("Server Running at 3000")
})
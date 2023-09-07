console.log("js working")
let weatherForm = document.querySelector("form")
const search = document.querySelector("#location")
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/weather?address=" + search.value,)
    .then((resp)=>{
        resp.json()
        .then((data)=>{
            document.querySelector("#forecast").textContent = data.forecast
        })
    })
})

const ApiKey='5cb13a530cc3ee165aac9834dc2b57af'
//accessing a;; required html elements

const input=document.getElementById('inputval')
const btele=document.getElementById('btn')
const tempele=document.getElementById('temp')
const Discription=document.getElementById('description')
const Location=document.getElementById('location')
const Img=document.getElementById('img')

// adding the event listeners to the btn
btele.addEventListener('click',(e)=>{
    //condition for checking weather user entered a location
    if(input.value==''){
        alert('enter the location')
    }else{
    //store the location enetred by user
    let loc=input.value
    

    // api url
    url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ApiKey}`
    // using fetch method to fetch the location waetehr details
    fetch(url)
    .then((data)=>data.json())
    .then(da=>{console.log(da)

        // object destucturing
        const {name}=da;
        const {feels_like}=da.main;
        const {description}=da.weather[0]
        const {icon}=da.weather[0]

        // assigning the values to html elements
        Location.innerText=name
        tempele.innerText=Math.round(feels_like-273)
        Discription.innerText=description
        Img.src=` https://openweathermap.org/img/wn/10d@2x.png`

    }).catch((err)=>{
        alert('enter a valid location')
    })

                    
}
// to make input values empty
input.value=''
})


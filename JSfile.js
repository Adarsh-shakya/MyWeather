
document.querySelector(".main").style.display="none"
function playLoader()
{
    setTimeout(loader,4000);
}
function loader()
{
    document.querySelector(".mn").style.display="none"
    document.querySelector(".main").style.display="block"
}

const searchinpute=document.getElementById("inpo");
const searchButton=document.getElementById("but");
let loca=document.getElementById("location");
let weatherImg=document.getElementById("image");
let temp_value=document.getElementById("temp");
let weathConde=document.getElementById("candition");
let city;



const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayid = ["day1","day2","day3","day4","day5"];
const condiId=["candi1","candi2","candi3","candi4","candi5"];
const tem=["temp1","temp2","temp3","temp4","temp5"];
const img=["im1","im2","im3","im4","im5"];

window.addEventListener("load" , (e)=>
{
   e.preventDefault
getWeather("delhi");
searchinpute.value='';
   
});


searchButton.addEventListener('click',(e)=>
{
e.preventDefault
getWeather(searchinpute.value);
searchinpute.value='';
});
const getWeather=async(city)=>
{
   try 
     {
        const response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city }&appid=ef4acb7709a3357ff340b449b9685f73`,{mode:'cors'});
        const weatherdate=await response.json();
        console.log(weatherdate);
        const {name}=weatherdate.city;
        const {main}=weatherdate.list[0].weather[0];
        const {icon}=weatherdate.list[0].weather[0];
        const {feels_like}=weatherdate.list[0].main;
       var j=0;
        for(var i=7;i<=39;i+=8)
        {
        const {dt_txt}=weatherdate.list[i];
        var now =new Date(dt_txt);
        let {main}=weatherdate.list[i].weather[0];
        let day=document.getElementById(dayid[j]);
        const {feels_like}=weatherdate.list[i].main;
        const {icon}=weatherdate.list[i].weather[0];

         document.getElementById(img[j]).src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
         document.getElementById(tem[j]).textContent=Math.round(feels_like-273);
        day.textContent=weekday[now.getDay()];
        document.getElementById(condiId[j++]).textContent=main;
        
        
        }
        
        
      
      loca.textContent=name;
      weathConde.textContent=main;
      temp_value.textContent=Math.round(feels_like-273);
      weatherImg.src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
     
     }
   catch(error)
            {
               alert("city not found");
            }
}


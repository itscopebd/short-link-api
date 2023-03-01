

document.getElementById("createCode").addEventListener("click",function(){
    let geturl=document.getElementById("code");
const inputValue=geturl.value;
     const url=`https://api.shrtco.de/v2/shorten?url=${inputValue}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>createShortUrl(data))
})

const createShortUrl=(data)=>{
    const message=document.getElementById("message");
if (data.ok === false) {
message.classList.remove("d-none")
message.innerText="Url is Not Valid";

}
else{
 const shorturl= document.getElementById("shorturl");
 
}
}
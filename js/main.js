
const shorturl= document.getElementById("shorturl");
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

const short_link= data.result.full_short_link2;
console.log(short_link)

 shorturl.value=short_link
 
}
}

const copyUrl=()=>{
    if(shorturl.value===""){
        shorturl.placeholder=`No Created Short Url`;
        // shorturl.placeholder.style.color="red";
    }
    else{

        navigator.clipboard.writeText(shorturl.value)
    }
}
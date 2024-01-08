idPlace=document.getElementById("advice-id");
advicePlace=document.getElementById("advice");

async function getAdvice(){
try{
    const response=await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data);
    idPlace.innerText=data.slip.id;
    advicePlace.innerText= '"'+data.slip.advice+'"';
}catch (error){
    console.log(error);
}
}
getAdvice();
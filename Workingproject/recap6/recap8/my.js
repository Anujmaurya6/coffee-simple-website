const greeBtn=document.getElementById("greetBtn");
const greetMsg=document.getElementById("greetMsg");
const clock=document.getElementById("clock");
 greetBtn.addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();
 
  greetMsg.innerText="preparing message";

  setTimeout(()=>{
    if(name!==""){
        greetMsg.innerText=`Hello,${name}`;
    }else{
        greetMsg.innerText="plzz enter your name:";
    }
  },2000);
});
//live clock 
setInterval(()=>{
    const now=new Date();
    const timeString=now.toLocaleTimeString();
    clock.innerText=timeString;

},1000);

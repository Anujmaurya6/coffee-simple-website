const form=document.getElementById("signupForm");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const msg=document.getElementById("msg");

form.addEventListener("submit",function(e){
    e.preventDefault(); //page reload hone se roke


  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
if(name===""||email===""){
    msg.innerText="plzz enter the name";
    msg.style.color="red";
}else if(!email.include("@")){
    msg.innerText="plzz enter the valid email";
    msg.style.color=red;
}else{
    msg.innerText=`welcome ,${name}!`;
  msg.style.color="green";
}
});
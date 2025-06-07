const checkBtn=document.getElementById("checkBtn");
function getNameLength(name){
    return name.length;
}
checkBtn.addEventListener("click",function(){
    const name=document.getElementById("username").value.trim();
    const output=document.getElementById("output");
if(name!==""){
 const length=getNameLength(name);
 output.innerText=`your name has ${length}characters.`;
}else{
output.innerText="please enter your mail";
}
});
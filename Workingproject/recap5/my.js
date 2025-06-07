const fruits=["apple","banana","Mango"];
const fruitList=document.getElementById("fruitlist");

//loop karunga tabhi add hoga list me 
for(let i=0;i< fruits.length;i++){
    const li=document.createElement("li");
    li.innerText=fruits(i);
    li.innerText=fruits[i];
    fruitsList.appendChild(li);
}
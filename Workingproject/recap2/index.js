const box=document.getElementById("colorBox");
//idhar me different type of mouse ka use karna sikhe he 
//mouse event listener
box.addEventListener("mouseenter",function(){
    box.classList.add("hovered");
    box.innerText="you are hovering";
});
//mouse leave
box.addEventListener("mouseleave",function(){
    box.classList.remove("hovered");
    box.innerText="Hover or click me:"
});

box.addEventListener("click",function(){
    box.classList.toggle("clicked");
    box.innerText="clicked";
});
box.addEventListener("dblclick",function(){
    alert("your double cliked the box");
});
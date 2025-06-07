// DOM Level 1 - getElementById, innerHTML, style

document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("username").value;

  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  const box = document.getElementById("box");
  box.innerHTML = "Welcome " + name;
  box.style.backgroundColor = "lightgreen";
  box.style.border = "2px solid black";
});

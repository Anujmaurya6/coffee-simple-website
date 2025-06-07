const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function () {
  const name = document.getElementById("username").value;
  const output = document.getElementById("greetingOutput");

  if (name.trim() !== "") {
    output.innerText = `Hello, ${name}! Welcome to my app!`;
  } else {
    output.innerText = "Please enter your name first!";
  }
});

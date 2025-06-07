const list = document.getElementById("numberList");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li"); // naya list item banaya
  li.innerText = `Number: ${i}`; // text set kiya
  list.appendChild(li); // ul me add kiya
}

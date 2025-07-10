const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
  const randomColor = `rgb(${RandomColor()}, ${RandomColor()}, ${RandomColor()})`;
  document.body.style.backgroundColor = randomColor;
});

function RandomColor() {
  return Math.floor(Math.random() * 256);
}

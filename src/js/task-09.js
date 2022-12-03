function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonRef = document.querySelector("button")
const spanRef = document.querySelector("span.color")


buttonRef.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  spanRef.textContent = color
  document.body.style.backgroundColor = color;
})
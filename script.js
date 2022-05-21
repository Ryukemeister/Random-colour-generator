const colors = ["green", " #ff4dc4", "rgba(133,122,200)", "#f15025", "yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

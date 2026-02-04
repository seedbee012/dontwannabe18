const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
  alert("Too late. Welcome to adulthood 😈");
});

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");

function moveButton() {
  const padding = 10;

  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile (less aggressive)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

yesBtn.addEventListener("click", () => {
  alert("Too late. Welcome to adulthood 😈");
});

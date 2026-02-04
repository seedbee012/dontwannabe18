const noBtn = document.getElementById("noBtn");
const playground = document.getElementById("playground");

function moveButton() {
  const maxX = playground.clientWidth - noBtn.offsetWidth;
  const maxY = playground.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
  noBtn.style.transform = "none"; // IMPORTANT
}

// mouse
noBtn.addEventListener("mouseover", moveButton);

// touch (phone & tablet)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

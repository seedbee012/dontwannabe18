const noBtn = document.getElementById("noBtn");

function moveButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
}

// mouse
noBtn.addEventListener("mouseenter", moveButton);

// touch
noBtn.addEventListener("touchstart", moveButton);

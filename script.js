const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile / touch
noBtn.addEventListener("touchstart", moveButton);

// YES surprise 😈
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:black;
      color:white;
      text-align:center;
      padding:20px;
    ">
      <h1>
        🎉 CONGRATS 🎉<br>
        YOU'RE 18 NOW 😈<br><br>
        NO ESCAPE.
      </h1>
    </div>
  `;
});

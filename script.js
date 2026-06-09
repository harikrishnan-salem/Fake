const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Friend";

// Elements
const countElement = document.getElementById("count");
const messageElement = document.getElementById("message");
const birthdayText = document.getElementById("birthdayText");
const replyBtn = document.getElementById("replyBtn");

// Countdown start
let count = 3;

// Hide message initially
messageElement.style.display = "none";

const timer = setInterval(() => {
  count--;

  if (count > 0) {
    countElement.innerText = count;

    // restart animation cleanly
    countElement.style.animation = "none";
    void countElement.offsetWidth;
    countElement.style.animation = "countPulse 1s ease";
  } 
  else {
    clearInterval(timer);

    // hide countdown
    countElement.style.opacity = "0";

    setTimeout(() => {
      countElement.style.display = "none";

      // show message
      birthdayText.innerHTML = `🎂 Happy Birthday <span style="color:#ff4da6">${name}</span>!`;
      messageElement.style.display = "block";

      // WhatsApp setup
      const phone = "919361445233";
      const msg = ``;

      replyBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

      // Confetti 🎊
      createConfetti();

    }, 500);
  }
}, 1000);


// =========================
// CONFETTI EFFECT 🎊
// =========================
function createConfetti() {
  for (let i = 0; i < 120; i++) {

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";

    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;

    confetti.style.width = confetti.style.height = (Math.random() * 8 + 4) + "px";

    confetti.style.position = "fixed";
    confetti.style.zIndex = "9999";

    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
const pickle = document.getElementById('pickle');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');

let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
highscoreEl.textContent = highscore;

let holding = false;
let pickleY = 20;

document.addEventListener('keydown', e => {
  if (e.code === 'Space') holding = true;
});

document.addEventListener('keyup', e => {
  if (e.code === 'Space') {
    holding = false;
    score = 0;
    pickleY = 20;
    pickle.style.bottom = pickleY + 'px';
    scoreEl.textContent = score;
  }
});

function gameLoop() {
  if (holding) {
    pickleY += 3;
    score += 1;
    pickle.style.bottom = pickleY + 'px';
    scoreEl.textContent = score;
    
    if (score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore);
      highscoreEl.textContent = highscore;
    }
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

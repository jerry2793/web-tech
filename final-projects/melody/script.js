const pauseBtn = document.getElementById("pause-btn");
const milisecOutput = document.getElementById("milisec");
let isTimerGoing = true;
let milisInt, secInt, minInt

pauseBtn.addEventListener("click", () => {
  if (isTimerGoing) {
    pauseBtn.innerText = "Pause";
    milisInt = window.setInterval(() => {
      if (milisecOutput.innerText >= 9) {
        milisecOutput.innerText = 0;
      } else {
        milisecOutput.innerText++;
      }
    }, 100);
  } else {
    pauseBtn.innerText = "Continue";
    window.clearInterval(milisInt)
  }
  isTimerGoing = !isTimerGoing;
});

const likeBtns = document.querySelectorAll('#likeBtn')
const likesOutput = document.getElementById('likesOutput')
let isLikePressed = true;
let totalLikes = 0;

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener('click', () => {
  if (isLikePressed) {
    // If it is liked
    likeBtn.innerText = 'Unlike'
    // likeBtn.classList.push('redButton')
    likeBtn.style.backgroundColor = 'pink'
    totalLikes++;
  } else {
//     if it is unliked
    likeBtn.innerText = 'Like'
    likeBtn.style.backgroundColor = 'lightblue'
    totalLikes--;
  }
  
  isLikePressed = !isLikePressed;
  likesOutput.innerText = totalLikes
})
}
                 )
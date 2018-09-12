let score = 0;

const addPoint = event => {
  console.log("does this need to be here??");
  score += 1;
  let message = `${score}`;
  const teamOneScore = document.querySelector(".team-1-score");
  teamOneScore.textContent = message;
};

const subtractPoint = event => {
  console.log("does this need to be here??");
  score -= 1;
  let message = `${score}`;
  const teamOneScore = document.querySelector(".team-1-score");
  teamOneScore.textContent = message;
};

const teamTwoAddPoint = event => {
  console.log("does this need to be here??");
  score += 1;
  let message = `${score}`;
  const teamTwoScore = document.querySelector(".team-2-score");
  teamTwoScore.textContent = message;
};

teamTwoSubtractPoint = () => {
  console.log("does this need to be here??");
  score -= 1;
  let message = `${score}`;
  const teamTwoScore = document.querySelector(".team-2-score");
  teamTwoScore.textContent = message;
};

const main = () => {
  const teamOneAdd = document.querySelector(".team-1-add");
  teamOneAdd.addEventListener("click", addPoint);

  const teamOneSubtract = document.querySelector(".team-1-subtract");
  teamOneSubtract.addEventListener("click", subtractPoint);

  const teamTwoAdd = document.querySelector(".team-2-add");
  teamTwoAdd.addEventListener("click", teamTwoAddPoint);

  const teamTwoSubtract = document.querySelector(".team-2-subtract");
  teamTwoSubtract.addEventListener("click", teamTwoSubtractPoint);
};

document.addEventListener("DOMContentLoaded", main);

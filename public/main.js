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

let scoreTeamTwo = 0;

const teamTwoAddPoint = event => {
  console.log("does this need to be here??");
  scoreTeamTwo += 1;
  let message = `${scoreTeamTwo}`;
  const teamTwoScore = document.querySelector(".team-2-score");
  teamTwoScore.textContent = message;
};

const teamTwoSubtractPoint = () => {
  console.log("does this need to be here??");
  scoreTeamTwo -= 1;
  let message = `${scoreTeamTwo}`;
  const teamTwoScore = document.querySelector(".team-2-score");
  teamTwoScore.textContent = message;
};

const chooseTeamOneName = () => {
  let updateTeamOneName = document.querySelector(".update-team-1-name");
  let teamOneName = document.querySelector(".team-1");
  console.log("update team one name");
  let message = `${updateTeamOneName.value}`;
  teamOneName.textContent = message;
};

const chooseTeamTwoName = () => {
  let updateTeamTwoName = document.querySelector(".update-team-2-name");
  let teamTwoName = document.querySelector(".team-2");
  console.log("update team two name");
  let message = `${updateTeamTwoName.value}`;
  teamTwoName.textContent = message;
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

  const teamOneUpdateButton = document.querySelector(".team-1-update-button");
  teamOneUpdateButton.addEventListener("click", chooseTeamOneName);

  const teamTwoUpdateButton = document.querySelector(".team-2-update-button");
  teamTwoUpdateButton.addEventListener("click", chooseTeamTwoName);
};

document.addEventListener("DOMContentLoaded", main);

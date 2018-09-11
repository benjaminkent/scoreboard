let teamOneScore = 0;

const addPoint = event => {
  teamOneScore += 1;
  let message = `${teamOneScore}`;
  console.log(event.target);
  event.target.textContent = message;
};

const main = () => {
  const teamOneAdd = document.querySelector(".team-1-add");
  teamOneAdd.addEventListener("click", addPoint);

  const teamOneScore = document.querySelector(".team-1-score");
};

document.addEventListener("DOMContentLoaded", main);

let score = 0
let scoreTeamTwo = 0

const addPoint = () => {
  score += 1
  const teamOneScore = document.querySelector('.team-1-score')
  teamOneScore.textContent = score
}

const subtractPoint = () => {
  if (score <= 0) { return }
  score -= 1
  const teamOneScore = document.querySelector('.team-1-score')
  teamOneScore.textContent = score
}

const teamTwoAddPoint = () => {
  scoreTeamTwo += 1
  const teamTwoScore = document.querySelector('.team-2-score')
  teamTwoScore.textContent = scoreTeamTwo
}

const teamTwoSubtractPoint = () => {
  if (scoreTeamTwo <= 0) { return }
  scoreTeamTwo -= 1
  const teamTwoScore = document.querySelector('.team-2-score')
  teamTwoScore.textContent = scoreTeamTwo
}

const chooseTeamOneName = () => {
  let teamOneName = document.querySelector('.team-1')
  let updateTeamOneName = document.querySelector('.update-team-1-name')
  teamOneName.textContent = updateTeamOneName.value
}

const chooseTeamTwoName = () => {
  let teamTwoName = document.querySelector('.team-2')
  let updateTeamTwoName = document.querySelector('.update-team-2-name')
  teamTwoName.textContent = updateTeamTwoName.value
}

const clearScore = () => {
  score = 0
  scoreTeamTwo = 0
  let teamOneScore = document.querySelector('.team-1-score')
  let teamTwoScore = document.querySelector('.team-2-score')
  teamOneScore.textContent = score
  teamTwoScore.textContent = scoreTeamTwo
}

const main = () => {
  const teamOneAdd = document.querySelector('.team-1-add')
  teamOneAdd.addEventListener('click', addPoint)

  const teamOneSubtract = document.querySelector('.team-1-subtract')
  teamOneSubtract.addEventListener('click', subtractPoint)

  const teamTwoAdd = document.querySelector('.team-2-add')
  teamTwoAdd.addEventListener('click', teamTwoAddPoint)

  const teamTwoSubtract = document.querySelector('.team-2-subtract')
  teamTwoSubtract.addEventListener('click', teamTwoSubtractPoint)

  const teamOneUpdateButton = document.querySelector('.team-1-update-button')
  teamOneUpdateButton.addEventListener('click', chooseTeamOneName)

  const teamTwoUpdateButton = document.querySelector('.team-2-update-button')
  teamTwoUpdateButton.addEventListener('click', chooseTeamTwoName)

  const resetScore = document.querySelector('.reset')
  resetScore.addEventListener('click', clearScore)
}

document.addEventListener('DOMContentLoaded', main)

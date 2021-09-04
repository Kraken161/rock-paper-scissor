//buttons
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const rock = document.querySelector('#rock')

//other variables
const userText = document.querySelector('.player')
const botText = document.querySelector('.bot')
const board = document.querySelector('.board')

//functions
const paperClick = () => {
  userText.innerHTML = 'Ty: Papier'
  const randomNumber = Math.floor(Math.random() * 3) + 1

  var bot

  switch (randomNumber) {
    case 1:
      bot = 'Papier'
      break
    case 2:
      bot = 'Nożyce'
      break
    case 3:
      bot = 'Kamień'
      break
  }

  botText.innerHTML = bot

  switch (bot) {
    case 'Papier':
      userText.innerHTML = 'Ty: Papier'
      board.innerHTML = 'Remis'
      botText.innerHTML = 'Bot: ' + bot
      break
    case 'Nożyce':
      botText.innerHTML = 'Bot: ' + bot
      board.innerHTML = 'Bot Wygrał'
      break
    case 'Kamień':
      botText.innerHTML = 'Bot: ' + bot
      board.innerHTML = 'Wygrałeś'
      break
  }

  console.log(bot)
}

const scissorClick = () => {
  userText.innerHTML = 'Ty: Nożyce'
  const randomNumber = Math.floor(Math.random() * 3) + 1

  var bot

  switch (randomNumber) {
    case 1:
      bot = 'Papier'
      break
    case 2:
      bot = 'Nożyce'
      break
    case 3:
      bot = 'Kamień'
      break
  }

  botText.innerHTML = bot

  switch (bot) {
    case 'Papier':
      userText.innerHTML = 'Ty: Nożyce'
      board.innerHTML = 'Wygrałeś'
      botText.innerHTML = 'Bot: ' + bot
      break
    case 'Nożyce':
      userText.innerHTML = 'Ty: Nożyce'
      board.innerHTML = 'Remis'
      botText.innerHTML = 'Bot: ' + bot
      break
    case 'Kamień':
      botText.innerHTML = 'Bot: ' + bot
      board.innerHTML = 'Przegrałeś'
      break
  }

  console.log(bot)
}

const rockClick = () => {
  userText.innerHTML = 'Ty: Kamień'
  const randomNumber = Math.floor(Math.random() * 3) + 1

  var bot

  switch (randomNumber) {
    case 1:
      bot = 'Papier'
      break
    case 2:
      bot = 'Nożyce'
      break
    case 3:
      bot = 'Kamień'
      break
  }

  botText.innerHTML = bot

  switch (bot) {
    case 'Papier':
      userText.innerHTML = 'Ty: Kamień'
      board.innerHTML = 'Przegrałeś'
      botText.innerHTML = 'Bot: ' + bot
      break
    case 'Nożyce':
      userText.innerHTML = 'Ty: Kamień'
      board.innerHTML = 'Wygrałeś'
      botText.innerHTML = 'Bot: ' + bot
      break
    case 'Kamień':
      userText.innerHTML = 'Ty: Kamień'
      board.innerHTML = 'Remis'
      botText.innerHTML = 'Bot: ' + bot
      break
  }

  console.log(bot)
}

//events
paper.addEventListener('click', paperClick)
scissor.addEventListener('click', scissorClick)
rock.addEventListener('click', rockClick)

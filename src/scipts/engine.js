const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points'),
  },
  cardSprites: {
    avatar: document.getElementById('card-image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type'),
  },
  fieldCards: {
    players: document.getElementById('player-field-cards'),
    computer: document.getElementById('computer-field-cards'),
  },
  actions: {
    button: document.getElementById('next-duel'),
  },
};


function init() {}

init();

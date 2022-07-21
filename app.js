let card = document.getElementsByClassName("card");
let cards = [...card];
let nextCardsDeck = [
  'fas fa-atom',
  'fas fa-frog',
  'fas fa-feather-alt', 
  'fas fa-cogs',
  'fas fa-anchor',
  'fas fa-fan',
  'fas fa-bolt',
  'fas fa-hat-wizard',
  'fas fa-apple-alt',
  'fas fa-bell',
  'fas fa-bomb',
  'fas fa-brain',
]
let counter = document.querySelector("#score");
const nextCard = document.querySelector("#next-card");
let nextCardI = nextCard.getElementsByTagName("i").item(0);
let currentCard = 0;
const deck = document.getElementById("cards");

document.body.onload = restart();

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function restart() {
  nextCardsDeck = [
  'fas fa-atom',
  'fas fa-frog',
  'fas fa-feather-alt', 
  'fas fa-cogs',
  'fas fa-anchor',
  'fas fa-fan',
  'fas fa-bolt',
  'fas fa-hat-wizard',
  'fas fa-apple-alt',
  'fas fa-bell',
  'fas fa-bomb',
  'fas fa-brain',
  ]
  cards = shuffle(cards);
  for (var i = 0; i < cards.length; i++) {
    [].forEach.call(cards, function (item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove("show","matched");
  }
  moves = 0;
  counter.innerHTML = moves;
  nextCardI.className = nextCardsDeck[0];
}

function displayCard(event) {
  event.target.classList.toggle("show");
  currentCard = event.target;

  if(currentCard.children[0].className === nextCardI.className) {
    nextCardsDeck.shift();
    nextCardI.className = nextCardsDeck[0];
    currentCard.classList.add('matched');
  } else {
    setTimeout(function () {
      currentCard.classList.remove("show");
    }, 200);
  }

  moveCounter();
  
  let matchedCounter= 0;
    cards.forEach(card => {
      if(card.classList[2] === "matched")
      matchedCounter++;
    });

  if (matchedCounter === 12) {
    setTimeout(function () {
      alert("you won");
    }, 100); 
  }
}

function moveCounter() {
  moves++;
  counter.innerHTML = moves;
}

document.addEventListener("click",function(event){
  if(event.target.tagName === 'LI') {
    displayCard(event);
  }
})

const restartBtn = document.querySelector(".restart").addEventListener('click', restart);
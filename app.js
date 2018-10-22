//============== HEADER /STARTING PAGE
//Select all body container
const container = document.querySelector(".main-container");
//Select startingPage
const startPage = document.querySelector("#overlay");
//Select startingButton 
const startBtn = document.querySelector(".btn__reset");
//Select banner
const banner = document.querySelector("#banner");
// Select title
const title = document.querySelector('.title');

//============== MAIN CONTENT
//Select parent div of keyRows
const btnKeyboard = document.querySelector("#qwerty");
//Select Keayrows - 3 nodeLists iterate through forEach() or convert by ArrayFrom()
const keyRows = document.querySelectorAll(".keyrow");
// Select where letter going to be added
const lettersLocation = document.querySelector("#phrase ul");
// Select all letters
const letterClass = document.getElementsByClassName('letter');
// [QUESTION ] letterClass selector by ElementClass works and querry does not, why?
// const letterClass = document.querySelectorAll(".letter li")
// Store value of btn and letter match
// Select imgs icons
const hearts = document.querySelectorAll('.tries img');
// Select show class
const show = document.getElementsByClassName('show');
// Select keyrow btn
const keyrowButton = document.querySelectorAll('.keyrow button');


//============== FOOTER CONTENT
//Select scoreboard
const scoreboard = document.querySelector("#scoreboard");
//Select All listItems - parent ol - parent scoreboard
const listItems = document.querySelectorAll(".tries");

//Hold beggining value
let missed = 0;
//======================================================
startBtn.addEventListener("click", (e) =>{
  startPage.style.display = "none";
});

//==============================================================================
const phrases = [
              "guess",                        //[0]
              "change",                       //[1]
              "querySelectorAll",             //[2]
              "querySelector",                //[3]
              "Escaping special characters"   //[4]

];
let results = [];
let randomStrings = [];

//==============================================================================

function getRandomPhraseAsArray(arr, count ){
 while (arr.length > 0){
  results.push(arr.splice(0, count));
 }
  return results;
};
// Splits one array phrases = into 5 multiple subarrays
getRandomPhraseAsArray(phrases, 1);

function strings(arr){
  //randomly pick on of the phrases
  arr = results[Math.floor(Math.random()*results.length)];
  // converts random phrase into strings and than into array objects
  randomStrings = JSON.stringify(arr).split("");
  return randomStrings; 
}
//======================================================================

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    //[QUESTION]: IF I USE GLOBAL SCOPE CONS LI = only one LI is created. why????
    const li  = document.createElement('li');
    li.textContent = char;
    lettersLocation.appendChild(li);
    if (li.textContent !== " ") {
      li.classList.add("letter");
    } else {
      li.classList.add("space");
    }
  }
  }

let phraseArray = strings(randomStrings);
addPhraseToDisplay(phraseArray);
//======================================================================

function checkLetter(e) {
  let discover = null;
  for (let i = 0; i < letterClass.length; i++) {
    if (e.target.textContent === letterClass[i].textContent) {
     discover = true;
      letterClass[i].classList.add("show");
    }
  }
  return discover;
}
//======================================================================
btnKeyboard.addEventListener('click', (e) => {
  if (discover = true) {
    e.target.classList.add("chosen");
    e.target.setAttribute("disabled", true);
    const letterFound = checkLetter(e);
    if (letterFound === null) {
      let currentMissed = missed;
      hearts[currentMissed].setAttribute("src", "images/lostHeart.png");
      // hearts[currentMissed].src = "images/lostHeart.png"
      missed += 1;
    }
  }
  checkWin();
});
//======================================================================
function checkWin() {
  if (show.length === letterClass.length) {
    startPage.style.display = 'flex';
    startPage.classList.add("win");
    title.textContent = 'Congratulations!';
   startBtn.textContent = "Wanna play again?";
  } else if (missed === 5) {
    startPage.style.display = 'flex';
    startPage.classList.add("lose");
    title.textContent = 'Better luck next time';
    btnKeyboard.textContent = "Play until you win";
  }
}
//======================================================================
startBtn.addEventListener('click', (e) => {
  if (e.target.textContent === 'Play again') {
    missed = 0;

    // Reset hearts
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute('src', 'images/liveHeart.png');
    }

    // Delete last guessed word
    const listElement = document.querySelectorAll('ul li');
    for (let i = 0; i < listElement.length; i++) {
      ulList.removeChild(listElement[i]);
    }

    // Reset button's attributes
    for (let i = 0; i < keyrowButton.length; i++) {
      keyrowButton[i].classList.remove("chosen");
      keyrowButton[i].disabled = false;
    }

    addPhraseToDisplay(phraseArray);
  }
});
console.log(phraseArray);






























// // 5. Create a checkLeter function
// function checkLetter(e) {
//   discover = null;
//   //LOOP THROUGH letterClass and check, if they match the letter in the button player has chosen
//   for (let i = 0; i < letterClass.length; i++) {
//    if(e.target.textContent === letterClass[i].textContent){
//     discover = true;
//     letterClass[i].classList.add("show");
//     const letterMatched = letters[i];
//    }
//   }
//   return discover;
// };
// checkLetter(btnKeyboard);

// //======================================================================
// btnKeyboard.addEventListener("click", (e) =>{
//   if(discover = true){
//     // discover = true
//     e.target.classList.add("chosen");
//     e.target.setAttribute("disabled", true);
//   }else if (discover = false) {
//     //discover = false
//     let currentMissed = missed;
//     hearts[currentMissed].setAttribute('src', 'images/lostHeart.png');
//     missed += 1;
//   }
//   // add checkwin
// });

// //======================================================================
// function checkWin(){
//   if(show.length === btnKeyboard.length) {
//     startPage.style.display = 'flex';
//     startPage.classList.add("win");
//     title.textContent = 'Congratulations on winning!';
//     startButton.textContent = "Play again";
//   }
//  else if (missed === 5) {
//   startPage.style.display = 'flex';
//   startPage.classList.add("lose");
//   title.textContent = 'Better luck next time';
//   startButton.textContent = "Play again";
// }
// }
// checkWin();
// console.log(letterClass);
// // && both conditions needs to be true
// // OR || one of the conditions must be true 
// // TERNARY OPERATOR
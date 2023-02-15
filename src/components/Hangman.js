//Hangman component
import React, { useState } from "react";
import words from "./wordList.json"; //importing word list
import state1 from '../images/state1.GIF' //importing images of each state of hangman
import state2 from '../images/state2.GIF'
import state3 from '../images/state3.GIF'
import state4 from '../images/state4.GIF'
import state5 from '../images/state5.GIF'
import state6 from '../images/state6.GIF'
import state7 from '../images/state7.GIF'
import state8 from '../images/state8.GIF'
import state9 from '../images/state9.GIF'
import state10 from '../images/state10.gif'
import state11 from '../images/state11.GIF'

function Hangman(props){

    //defining initial state
    const initialState = {
      answer: words[Math.floor(Math.random() * words.length)], //picks a random word with length of random number
      guessed: new Set(), //passes an array to a new set constructor
      wrongGuesses: 0,
      maxGuesses: 10,
      imgList: [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11]
    };
    
    const [hangman, setHangman]=useState(initialState); //initiating state
    //function for the word to be guessed
    function guessedWord() {
      /* Split the random word into a new array of its letters, and map each letter to the letter in the guessed set. 
      If it is matching (true) then display the letter, if not then display underscore*/
      return hangman.answer.split("").map((letter) => (hangman.guessed.has(letter) ? letter : " _ "));
    }

    //function to display the keypad
    function showKeypad() {
      let alphabetArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"]
      return alphabetArray.map((letter) => (
        <button key={letter} value={letter} onClick={handleGuess} disabled={hangman.guessed.has(letter)}> {letter} </button>
      )); //disabled, if user guesses the correct letter then disable that letter from being clicked any further
    }
    
    //function to handle the click on the keypad
    function handleGuess(e) {
      let letter = e.target.value; //let letter = letter clicked on the keypad
      setHangman((prevState) => ({
        ...prevState, // include all existing state properties
        guessed: prevState.guessed.add(letter), // add the letter clicked to the guessed key in the state
        wrongGuesses: prevState.wrongGuesses + (prevState.answer.includes(letter) ? 0 : 1), //conditional: if the answer includes the letter then do wrongGuesses 0 + 0, if not then +1 
      }));
    }

    //function to reset the game by using setHangman callback function to reset the initial state
    function reset() {
      setHangman({
      answer: words[Math.floor(Math.random() * words.length)],
      guessed: new Set(),
      wrongGuesses: 0,
      maxGuesses: 10,
      imgList: [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11]
      });
    }

    let winner = guessedWord().join("") === hangman.answer;
    let loser = hangman.wrongGuesses >= hangman.maxGuesses;
    let game = showKeypad();
    let restart = winner || loser; //restart is equal to either loser or winner 
    if (winner) game = "You have won!"; //if winner is true then You have won! will replace the keypad
    if (loser) game = "You have lost!";

    return (
        <div>
          {/* as wrong guesses increases, this indexes the imgList array */}
          <img src={hangman.imgList[hangman.wrongGuesses]} alt="hangmanimg" /> 
          {/* shows how many guesses are left */}
          <p>Incorrect guesses remaining: {hangman.maxGuesses-hangman.wrongGuesses}{" "}/{hangman.maxGuesses}</p>
          {/* if the user hasn't lost yet then keep guessing, otherwise display the answer */}
          <p className="GuessedWord">{!loser ? guessedWord() : hangman.answer}</p>
          {/* show keypad */}
          <p>{game}</p>
          {restart && (<button id="reset" onClick={reset}>Replay</button>)}
        </div>
      );
}

export default Hangman;
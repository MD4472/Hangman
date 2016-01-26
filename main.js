var prompt = require("prompt");
var Word = require("./word.js");

prompt.start();

var game = {
  wordBank: ["ear", "chocolate", "sunny", "kale", "sweet", "beach", "warmth"],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd){
    var randomNum = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = new Word(this.wordBank[randomNum]);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
  keepPromptingUser: function(){
    var self = this;
    prompt.get(["guessLetter"], function (err, result) {

      console.log("The Letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);


      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong~!");
        self.guessesRemaining -= 1; 
      } else {
        console.log("You guessed right!");
        if (self.currentWrd.didWeFindTheWord() === true){
          console.log("You won!");
          return 1;
        }
      }

      console.log("Guesses remaining " + self.guessesRemaining);
      console.log(self.currentWrd.wordRender());

      if (self.guessesRemaining > 0 && self.currentWrd.found === false){
          self.keepPromptingUser();
      }
      else if (self.guessesRemaining === 0){
        console.log("Game Over"); 
      } else {
        console.log(self.currentWrd.self.wordRender());
      }
    });
  }
};
  
game.startGame();


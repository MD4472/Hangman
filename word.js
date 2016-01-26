var Letter = require("./letter.js");


function Word(wrd)
  {
    this.word = wrd;
    this.lets = [];
    this.found = false;
    //the function below create Letter objects for each letter 
    //in the word and put the objects in an array
    this.getsLets = function(){ 
      for (var i = 0; i < this.word.length; i++)
        { this.lets.push(new Letter(this.word.charAt(i)));
        }
      };
    this.checkIfLetterFound = function(guessLetter){
      var whatToReturn = 0;
      for (var i = 0; i < this.lets.length; i++){
        if (this.lets[i].charac === guessLetter){
          this.lets[i].appear = true;
          whatToReturn +=1;
          }
        }
        return checkIfLetterFound;
      };
    this.didWeFindTheWord = function() {
      function curLets(letter) {
        if (letter.appear === true) {
          return true;
        }
      }
        if (this.lets.every(curLets)) {
          this.found = true;
          return this.found;
        }
      };

    this.wordRender = function(){
      var str = "";
      for (var i = 0; i < this.lets.length; i ++){
        str += this.lets[i].letterRender();
      }
      return str;
    }; 
  }  

module.exports = Word;


module.exports = Letter;

function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function()
  {
    if (this.appear === false)
      {return ("_");
      } 
    else 
      {return this.charac;
      }
  };
  
}
var newLet = new Letter('a');
console.log(newLet);
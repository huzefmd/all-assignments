// ## Create a counter in JavaScript

// <!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->
let count=0
function createcounter(){
    count++;
    console.log(count)
    if(count<60){
    setTimeout(createcounter,60);
    }
}

createcounter()

module.exports = 1-CountQueuingStrategy.js;
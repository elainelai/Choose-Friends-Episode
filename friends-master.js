//document.write(y)


// User presses a button
// App returns a friends episode to watch

var myShowList = ["The One Where Monica Gets a Roommate",
"The One With the Sonogram at the End",
"The One With the Thumb",
"The One With George Stephanopoulos",
"The One With the East German Laundry"]

function pickARando(list){
  var len = list.length
  var z = Math.random()
  z = z*len
  index = Math.floor(z)
  return(list[index])
}
var result = pickARando(myShowList)


// define all my connections from javascript to html here!
document.getElementById('btn').addEventListener('click', clicked);

function clicked() {
    document.getElementById("rando").innerHTML = result;
}



//alert("yoooo")

//document.getElementById("rando").innerHTML = 12;
//function returnShowChoice(listOfShows){

// input a list of shows, output a random item of the list
// take a list of things, output one random item of the list of things

//}


// HELP was found here
// https://code-maven.com/handling-events-in-javascript

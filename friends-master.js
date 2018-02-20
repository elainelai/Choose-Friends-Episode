//document.write(y)


// User presses a button
// App returns a friends episode to watch

var myShowList = ["The One Where Monica Gets a Roommate",
"The One With the Sonogram at the End",
"The One With the Thumb",
"The One With George Stephanopoulos",
"The One With the East German Laundry"]

var myLinkList = ["https://www.netflix.com/watch/70273997",
"https://www.netflix.com/watch/70273998",
"https://www.netflix.com/watch/70273999",
"https://www.netflix.com/watch/70274000",
"https://www.netflix.com/watch/70274001"]

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

document.getElementById('btn2').addEventListener('click', clicked2);

function clicked2() {
  window.open("https://www.netflix.com/watch/70273999", "_blank", "toolbar=yes,top=500,left=500,width=400,height=400");
}


// nflx://www.netflix.com/title/70291117 - Will open a show page
// nflx://www.netflix.com/watch/70291117 - Will begin playing the video
// nflx://title/{showID}
// for house of cards it's: nflx://title/70178217


//alert("yoooo")

//document.getElementById("rando").innerHTML = 12;
//function returnShowChoice(listOfShows){

// input a list of shows, output a random item of the list
// take a list of things, output one random item of the list of things

//}


// HELP was found here
// https://code-maven.com/handling-events-in-javascript

//document.write(y)


// User presses a button
// App returns a friends episode to watch

var myShowList = ["The One Where Monica Gets a Roommate",
  "The One With the Sonogram at the End",
  "The One With the Thumb",
  "The One With George Stephanopoulos",
  "The One With the East German Laundry"
]

//var myLinkList = ["https://www.netflix.com/watch/70273997",
//"https://www.netflix.com/watch/70273998",
//"https://www.netflix.com/watch/70273999",
//"https://www.netflix.com/watch/70274000",
//"https://www.netflix.com/watch/70274001"]

var myLinkList = provideShowData();


function pickARando(list) {
  var len = list.length
  var z = Math.random()
  z = z * len
  index = Math.floor(z)
  return (list[index])
}
var result = pickARando(myLinkList);


// define all my connections from javascript to html here!
document.getElementById('btn').addEventListener('click', clicked);

//function clicked() {
//    document.getElementById("rando").innerHTML = result;
//}

function clicked() {
  window.open(result, "_blank");
}



// HELP was found here
// https://code-maven.com/handling-events-in-javascript
// http://blog.teamtreehouse.com/deploy-static-site-heroku
// https://www.thoughtco.com/open-link-new-window-javascript-3468859

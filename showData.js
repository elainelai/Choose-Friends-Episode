
// This function makes the show data EVERY time the button is pressed
// I needs to be done only once in the future. How?


function provideShowData(){
  var myLinkList = ["https://www.netflix.com/watch/70273997",
  "https://www.netflix.com/watch/70273998",
  "https://www.netflix.com/watch/70273999",
  "https://www.netflix.com/watch/70274000"]

  var baseStr = "https://www.netflix.com/watch/70274"

  for (i = 1; i <= 9; i++) {
    var str = i.toString();
    var newEpisode = baseStr + "00" + str;
    myLinkList.push(newEpisode);
  }

  for (i = 10; i <= 99; i++) {
    var str = i.toString();
    var newEpisode = baseStr + "0" + str;
    myLinkList.push(newEpisode);
  }

  for (i = 100; i <= 100+131; i++) {
    var str = i.toString();
    var newEpisode = baseStr + str;
    myLinkList.push(newEpisode);
  }

  return myLinkList

}


// stuff I used https://developers.google.com/web/tools/chrome-devtools/javascript/

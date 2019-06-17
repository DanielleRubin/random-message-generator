var button = $('button');
var nickname = $('.nickname')

var adjectives = ["cutie", "little", "big", "sweetie", "lovely", "joyful", "silly"]
var nouns = ["pie", "cake", "bee", "bear", "potato", "duck", "eyes"]

button.on("click", getNickname);

function getNickname() {
  var randomAdj = Math.random()*adjectives.length;
  var roundedAdj = Math.floor(randomAdj);
  var randomNoun = Math.random()*nouns.length;
  var roundedNoun = Math.floor(randomNoun);
  var newNickname = adjectives[roundedAdj] + " " + nouns[roundedNoun];
  nickname.text(newNickname);
}

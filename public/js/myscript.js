function my() {
  var t = document.getElementById("text").value;

  for (let i = 0; i < t.length; i++) {
    document.getElementById("harsh").innerHTML +=
      "<img src='images/" + t[i] + ".png'>";
  }
}
function myword() {
  let t = document.getElementById("text").value;
  let wordsplit = t.split(" ");

  let numberofwords = wordsplit.length;
  for (let i = 0; i < wordsplit.length; i++) {
    document.getElementById("harsh").innerHTML +=
      "<img src='images/" + wordsplit[i] + ".png'>";
  }
}

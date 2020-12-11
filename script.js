(function () {
var names = ["Satya", "Jism", "Prabhat", "Jam", "Nandu", "Maya", "Lalit", "Pussy", "jimmy", "Jhonny"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter=='j') {
     byeSpeaker.speak(names[i]);
    } else {
     helloSpeaker.speak(names[i]);
    }
}
})();
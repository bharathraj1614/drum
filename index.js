for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerhtml = this.innerHTML;
    console.log(innerhtml); //for later edu purpose (see console log in inspect)
    plysound(innerhtml);
    btn_anim(innerhtml);
  });
}
document.addEventListener("keydown", function (e) {
  var btnpressed = e.key;
  console.log(e); //for later edu purpose (see console log in inspect)
  plysound(btnpressed.toLowerCase());
  btn_anim(btnpressed.toLowerCase());
});
function plysound(key) {
  switch (key) {
    case "w":
      var loc = "crash.mp3";
      ply(loc);
      break;
    case "a":
      var loc = "kick-bass.mp3";
      ply(loc);
      break;
    case "s":
      var loc = "snare.mp3";
      ply(loc);
      break;
    case "d":
      var loc = "tom-1.mp3";
      ply(loc);
      break;
    case "j":
      var loc = "tom-2.mp3";
      ply(loc);
      break;
    case "k":
      var loc = "tom-3.mp3";
      ply(loc);
      break;
    case "l":
      var loc = "tom-4.mp3";
      ply(loc);
      break;
    default:
      console.log(this.innerHTML);
      break;
      function ply(loc) {
        var sound = new Audio("sounds/" + loc);
        sound.play();
      }
  }
}
function btn_anim(key) {
  var btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
  }, 200);
}

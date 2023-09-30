for (var i = 0; i < 9; i++) {
  var name_i = i + 1;
  const name = "dot" + name_i;
  document.getElementById(name).addEventListener("click", showImg);
}

function showImg() {
  for (var i = 0; i < 9; i++) {
    var name_i = i + 1;
    document
      .getElementById("photo_carusel_dot" + name_i)
      .classList.remove("show");
  }
  document.getElementById("photo_carusel_" + this.id).classList.add("show");
  this.border = "1px $secondary_color";
}
function prob() {
  const photo = document.getElementById("photo_carusel");
  if (photo.src.includes("(1).png")) {
    photo.setAttribute("src", "media/imgGal (" + 3 + ").png");
  } else photo.setAttribute("src", "media/imgGal (" + 1 + ").png");
}

function anothr() {
  for (var i = 0; i < 9; i++) {
    document.getElementsByClassName("dot")[i].addEventListener("click", prob());
  }
}

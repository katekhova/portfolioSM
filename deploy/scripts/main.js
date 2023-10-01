const amountOfPhotos = 9;

addAllPhotosToHtml(amountOfPhotos);
addAllDotsToHtml(amountOfPhotos);
addDotEventListener(amountOfPhotos);
if (document.getElementById("photo_carusel_dot0")) {
  document.getElementById("photo_carusel_dot0").classList.add("show");
}
if (document.getElementById("dot0")) {
  document.getElementById("dot0").classList.add("current");
}

function addAllPhotosToHtml(amount) {
  photosConteiner = document.getElementsByClassName("gallery")[0];
  for (var i = 0; i < amount; i++) {
    photosConteiner.appendChild(createImgElement(i));
  }
  dotsConteiner = document.createElement("div");
  dotsConteiner.classList.add("dot_control");
  photosConteiner.appendChild(dotsConteiner);
}

function addAllDotsToHtml(amount) {
  dotsConteiner = document.getElementsByClassName("dot_control")[0];
  for (var i = 0; i < amount; i++) {
    dotsConteiner.appendChild(createDotElement(i));
  }
}

function createImgElement(i) {
  var imgTag = document.createElement("img");
  imgTag.id = "photo_carusel_dot" + i;
  imgTag.src = "media/imgGal (" + i + ").png";
  imgTag.alt = "Photo for gallery";
  imgTag.classList.add("photo_carusel");
  return imgTag;
}

function createDotElement(i) {
  var divTag = document.createElement("div");
  divTag.classList.add("dot");
  var dotImgTag = document.createElement("img");
  dotImgTag.id = "dot" + i;
  dotImgTag.src = "media/dot_gallery.png";
  dotImgTag.alt = "dot";
  divTag.appendChild(dotImgTag);
  return divTag;
}

function addDotEventListener(amount) {
  for (var i = 0; i < amount; i++) {
    document
      .getElementById("dot" + i)
      .addEventListener("click", showImg(amount));
  }
}

function showImg(amount) {
  for (var i = 0; i < amount; i++) {
    document.getElementById("photo_carusel_dot" + i).classList.remove("show");
  }
  document.getElementById("photo_carusel_" + this.id).classList.add("show");
  for (var i = 0; i < amount; i++) {
    document.getElementById("dot" + i).classList.remove("current");
  }
  this.classList.add("current");
  this.setAttribute("opacity", "1"); //border = "1px solid #aa276b";
}

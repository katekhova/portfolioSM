const amountOfPhotos = 9;
let currentPhoto = 0;
addAllPhotosToHtml(amountOfPhotos);
addAllDotsToHtml(amountOfPhotos);
addDotEventListener(amountOfPhotos);
if (document.getElementById("photo_carusel_dot0")) {
  document.getElementById("photo_carusel_dot0").classList.add("show");
}
if (document.getElementById("dot0")) {
  document.getElementById("dot0").classList.add("current");
}
//window.setInterval(showImgSlideshow, 4000);
document.getElementsByClassName("menu")[0].addEventListener("click", openMenu);

function addAllPhotosToHtml(amount) {
  photosConteiner = document.getElementsByClassName("gallery")[0];
  for (let i = 0; i < amount; i++) {
    photosConteiner.appendChild(createImgElement(i));
  }
  dotsConteiner = document.createElement("div");
  dotsConteiner.classList.add("dot_control");
  photosConteiner.appendChild(dotsConteiner);
}

function addAllDotsToHtml(amount) {
  dotsConteiner = document.getElementsByClassName("dot_control")[0];
  for (let i = 0; i < amount; i++) {
    dotsConteiner.appendChild(createDotElement(i));
  }
}

function createImgElement(i) {
  let imgTag = document.createElement("img");
  imgTag.id = "photo_carusel_dot" + i;
  imgTag.src = "media/imgGal (" + i + ").png";
  imgTag.alt = "Photo for gallery";
  imgTag.classList.add("photo_carusel");
  return imgTag;
}

function createDotElement(i) {
  let divTag = document.createElement("div");
  divTag.classList.add("dot");
  let dotImgTag = document.createElement("img");
  dotImgTag.id = "dot" + i;
  dotImgTag.src = "media/dot_gallery.png";
  dotImgTag.alt = "dot";
  divTag.appendChild(dotImgTag);
  return divTag;
}

function addDotEventListener(amount) {
  for (let i = 0; i < amount; i++) {
    document.getElementById("dot" + i).addEventListener("click", showImg);
  }
}

function showImg() {
  for (let i = 0; i < amountOfPhotos; i++) {
    document.getElementById("photo_carusel_dot" + i).classList.remove("show");
  }
  document.getElementById("photo_carusel_" + this.id).classList.add("show");
  for (let i = 0; i < amountOfPhotos; i++) {
    document.getElementById("dot" + i).classList.remove("current");
  }
  this.classList.add("current");
  currentPhoto = Number(this.id.slice(-1));
}

function showImgSlideshow() {
  document
    .getElementById("photo_carusel_dot" + currentPhoto)
    .classList.remove("show");
  document.getElementById("dot" + currentPhoto).classList.remove("current");
  if (currentPhoto < amountOfPhotos - 1) {
    currentPhoto++;
    document
      .getElementById("photo_carusel_dot" + currentPhoto)
      .classList.add("show");
    document.getElementById("dot" + currentPhoto).classList.add("current");
  } else {
    document.getElementById("photo_carusel_dot0").classList.add("show");
    document.getElementById("dot0").classList.add("current");
    currentPhoto = 0;
  }
}

function openMenu() {
  const classesOfNav = document.getElementsByClassName("navbar")[0].classList;
  if (classesOfNav.contains("show")) {
    classesOfNav.remove("show");
  } else {
    classesOfNav.add("show");
  }
}

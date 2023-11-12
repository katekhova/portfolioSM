const amountOfPhotos = 15;
let currentPhoto = 0;
addAllPhotosToHtml(amountOfPhotos);
addAllDotsToHtml(amountOfPhotos);
addDotEventListener(amountOfPhotos);
if (document.getElementById("photo_carusel_dot0")) {
  document.getElementById("photo_carusel_dot0").classList.add("show");
}
setWidth();
if (document.getElementById("dot0")) {
  document.getElementById("dot0").classList.add("current");
}
//window.setInterval(showImgSlideshow, 4000);

function addAllPhotosToHtml(amount) {
  photosConteiner = document.getElementsByClassName("imagesGallery")[0];
  for (let i = 3; i < amount; i++) {
    photosConteiner.appendChild(createImgElement(i));
  }
  //dotsConteiner = document.createElement("div");
  //dotsConteiner.classList.add("dot_control");
  //photosConteiner.appendChild(dotsConteiner);
}

function addAllDotsToHtml(amount) {
  dotsConteiner = document.getElementsByClassName("dot_control")[0];
  for (let i = 3; i < amount; i++) {
    dotsConteiner.appendChild(createDotElement(i));
  }
}

function createImgElement(i) {
  let imgTag = document.createElement("img");
  imgTag.id = "photo_carusel_dot" + i;
  imgTag.src = "media/gallery/imgGal (" + i + ").JPG";
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
  setWidth();
  for (let i = 0; i < amountOfPhotos; i++) {
    document.getElementById("dot" + i).classList.remove("current");
  }
  this.classList.add("current");
  if (!isNaN(this.id.slice(-2))) {
    currentPhoto = Number(this.id.slice(-2));
  } else {
    currentPhoto = Number(this.id.slice(-1));
  }
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
  setWidth();
}

function setWidth() {
  let img = document.getElementsByClassName("photo_carusel show")[0];
  if (img.naturalWidth > img.naturalHeight) {
    let imgContainer = document.getElementsByClassName("imagesGallery")[0];
    imgContainer.style.maxWidth = "100%";
    //img.style.height = "90vh";
  } else {
    let imgContainer = document.getElementsByClassName("imagesGallery")[0];
    imgContainer.style.maxWidth = "calc(max(400px,30vw))";
    //img.style.height = "100vh";
  }
}

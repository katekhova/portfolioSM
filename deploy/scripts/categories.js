let amountOfPhotos = 28;

addAllPhotosToHtml(amountOfPhotos);

function addAllPhotosToHtml(amount) {
  let photosConteiner = document.getElementsByClassName("stock")[0];
  for (let i = 3; i < amount; i++) {
    photosConteiner.appendChild(createImgElement(i));
  }
}

function createImgElement(i) {
  let divTag = document.createElement("div");
  divTag.classList.add("image");
  let imgTag = document.createElement("img");
  imgTag.src = "media/menschen/imgMensch (" + i + ").JPG";
  imgTag.alt = "Photo for category";
  divTag.appendChild(imgTag);
  return divTag;
}

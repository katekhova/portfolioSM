let amountOfPhotos = 0;

addAllPhotosToHtml();

function addAllPhotosToHtml() {
  let photosConteiner = document.getElementsByClassName("stock")[0];
  let dir = photosConteiner.attributes.getNamedItem("category").value;
  amountOfPhotos = Number(
    photosConteiner.attributes.getNamedItem("amount").value
  );
  for (let i = 3; i < amountOfPhotos; i++) {
    let divTag = document.createElement("div");
    divTag.classList.add("image");
    let imgTag = document.createElement("img");
    imgTag.src = "media/" + dir + "/img (" + i + ").JPG";
    imgTag.alt = "Photo for category";
    divTag.appendChild(imgTag);
    photosConteiner.appendChild(divTag);
  }
}

//document.getElementsByClassName("menu")[0].addEventListener("click", openMenu);

function openMenu() {
  const classesOfNav = document.getElementsByClassName("navbar")[0].classList;
  if (classesOfNav.contains("show")) {
    classesOfNav.remove("show");
  } else {
    classesOfNav.add("show");
  }
}

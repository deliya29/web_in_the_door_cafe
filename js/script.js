//Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

//ketika side-menu diklik
document.querySelector("#side-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan sidemenu
const menu = document.querySelector("#side-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

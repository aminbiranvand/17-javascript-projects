const test = document.getElementById("one");
const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

links.forEach((e) => {
  e.addEventListener("click", (at) => {
    removeClass();
    e.classList.add("ac");
  });
});

function removeClass() {
  links.forEach((t) => {
    t.classList.remove("ac");
  });
}

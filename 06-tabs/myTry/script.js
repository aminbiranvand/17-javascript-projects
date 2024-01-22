const As = document.querySelectorAll("a");
const Secs = document.querySelectorAll("section");

As.forEach((e) => {
  e.onclick = () => {
    RemoveBtnColors();
    e.classList.add("BtnColors");
    const Link = document.querySelector(e.hash);
    RemoveBefore(Link);
    Link.classList.add("ON");
  };
});

const RemoveBefore = () => {
  Secs.forEach((e) => {
    e.classList.remove("ON");
  });
};

const RemoveBtnColors = () => {
  As.forEach((e) => {
    e.classList.remove("BtnColors");
  });
};

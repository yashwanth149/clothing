const buttn = document.querySelector(".load");
buttn.addEventListener("click", function () {
  alert("Sorry still creating shoping list..");
});

const menuBtn = document.querySelector('.burgur');
const fullBar = document.querySelector('.respons-nav');

menuBtn.addEventListener('click', () =>  {
  menuBtn.classList.toggle('is-active');
  fullBar.classList.toggle('is-active');
});



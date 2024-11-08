const modals = ['entrance'].map(id => document.getElementById(id + '-modal'));
const imgs = ['entrance'].map(id => document.getElementById(id));
const modalClose = document.querySelectorAll(".modal-close");
const modalBody = document.querySelectorAll(".modal-body");

const toggleModal = (index, show) => {
  modals[index].style.display = show ? "block" : "none";
  localStorage.setItem(`modal${index}Displayed`, show);
}

imgs.forEach((img, i) => {
  img.addEventListener('click', () => toggleModal(i, true));
});

const exit = (index) => {
  toggleModal(index, false);
}

modalClose.forEach((closeBtn, i) => {
  closeBtn.addEventListener('click', () => exit(i));
});

modalBody.forEach((body, i) => {
  body.addEventListener('click', () => exit(i));
});

window.addEventListener('load', () => {
  modals.forEach((modal, i) => {
    toggleModal(i, localStorage.getItem(`modal${i}Displayed`) === 'true');
  });
});


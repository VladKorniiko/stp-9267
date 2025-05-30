const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerLinks = burgerMenuEl.querySelectorAll('a');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
  });
});

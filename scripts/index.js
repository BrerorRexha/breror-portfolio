window.onload = () => {
  introAnimation();
};

function introAnimation() {
  document.querySelectorAll('.text-container').forEach((textContainer) => {
    textContainer.classList.add('slide');
  });
  document.querySelector('.front').classList.add('slice');
  document.querySelectorAll('.intro-text').forEach((introText) => {
    introText.classList.add('slide-up');
  });
}

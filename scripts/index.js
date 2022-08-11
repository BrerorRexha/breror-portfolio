window.onload = () => {
  introAnimation();
};

function introAnimation() {
  document.querySelectorAll('.intro-text').forEach((introText) => {
    introText.classList.add('slide');
  });
  document.querySelector('.front').classList.add('slice');
}

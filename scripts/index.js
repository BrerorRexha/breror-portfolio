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
  setTimeout(() => {
    document.querySelectorAll('.text-container').forEach((textContainer) => {
      textContainer.classList.remove('slide');
    });
  }, 4500);
  setTimeout(() => {
    document.querySelectorAll('.text-container').forEach((textContainer) => {
      textContainer.classList.add('hidden');
    });
  }, 5500);
}

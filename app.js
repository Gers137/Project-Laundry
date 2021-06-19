const titreSpans = document.querySelectorAll('h1 span');
const btn = document.querySelector('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelector('.bulle');
const 11 = document.querySelector('.11');
const 12 = document.querySelector('.12');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"},0.3)
  .staggerFrom(btn: 1, {opacity: 0, ease: "power2.out"},0.3, '-=1')

  TL.play();
})

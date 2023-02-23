const hamburger = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navigation');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navigation.classList.toggle('site-nav-open');
  });
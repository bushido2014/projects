const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('.navigation ul');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navUl.classList.toggle('site-nav-open');
  });
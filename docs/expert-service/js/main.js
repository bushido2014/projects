

var toTopButton = document.querySelector('.to-top');

// добавляем прослушиватель событий для отслеживания прокрутки страницы
window.addEventListener('scroll', function() {
  // если прокрутка больше 100 пикселей, показываем кнопку
  if (window.pageYOffset > 100) {
    toTopButton.classList.add('show');
  } else {
    toTopButton.classList.remove('show');
  }
});

// добавляем прослушиватель событий для кнопки "скролл на вверх"
toTopButton.addEventListener('click', function() {
  // прокручиваем страницу вверх
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



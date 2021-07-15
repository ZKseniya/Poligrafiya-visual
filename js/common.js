$(document).ready(function() {
  const button = $('.page-header__button-mobile');

  button.click(function() {
    $('.page-header__mobile').toggleClass('page-header__mobile--active');
    $(this).toggleClass('page-header__button-mobile--open');
  });
});


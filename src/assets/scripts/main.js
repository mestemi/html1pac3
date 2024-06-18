document.addEventListener('DOMContentLoaded', function() {
    var filmsItems = document.querySelectorAll('.filmografia__item');
    var filmsTextWrapper = document.querySelectorAll('.filmografia__item-text-wrapper');

    filmsItems.forEach(function(filmItem) {
        filmItem.addEventListener('click', function() {
            const textWrapper = this.getElementsByClassName('filmografia__item-text-wrapper')[0];
            textWrapper.classList.toggle('active');
        });
    });

    setTimeout(function() {
        filmsTextWrapper.forEach(function(filmTextWrapper) {
            filmTextWrapper.classList.remove('hidden');
        });
    }, 500);
    
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
  
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
    });

    let playTrailer = document.querySelectorAll('.play-trailer')[0];
    playTrailer.addEventListener('click', function() {
        document.querySelectorAll('.detail__video-overlay')[0].style.display = 'none';
        playTrailer.style.display = 'none';
        let videoTrailer = document.querySelectorAll('.trailer-video')[0];
        videoTrailer.style.display = 'block';
        videoTrailer.src += "&autoplay=1"

    });
});

var toggler = document.querySelector('.bet-details-toggle');

if (toggler) {
  toggler.addEventListener('click', function(event){
    event.preventDefault();
    var target = toggler.getAttribute('href');
    document.querySelector(target).classList.toggle('is-active');
    toggler.classList.toggle('is-toggled');
  });
}
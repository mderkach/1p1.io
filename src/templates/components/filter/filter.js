var filters = document.querySelectorAll('.filter__item');
filters.forEach(function(filter){
  filter.addEventListener('click', function(){
    var filterDropdown = this.children[1];
    var filterChevron = this.children[0].querySelector('.filter__chevron');
    filterDropdown.classList.toggle('is-opened');
    filterChevron.classList.toggle('is-rotated');
  });
});
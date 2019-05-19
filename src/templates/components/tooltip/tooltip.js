var triggers = document.querySelectorAll('.tooltip-trigger');

triggers.forEach(
  function (trigger) {
    var tooltip = trigger.parentNode.querySelector('.tooltip');
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      tooltip.classList.toggle('is-active');
    });

    document.addEventListener('click', function (event) {
      if (tooltip.classList.contains('is-active') && event.target != trigger) {
          tooltip.classList.remove('is-active');
      }
    });
  }
);
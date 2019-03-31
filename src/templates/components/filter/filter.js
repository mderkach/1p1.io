var bsn = require('bootstrap.native/dist/bootstrap-native-v4');

var filter = document.querySelector('.filter__wrapper');
if (filter) {
  var filterTriggers = filter.querySelectorAll('.filter__item-head');

  document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < filterTriggers.length; i++) {
      var filter = new bsn.Collapse(filterTriggers[i], {
        parent: filter
      });
    }
  });
}
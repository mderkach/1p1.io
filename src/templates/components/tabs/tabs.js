window.addEventListener("load", function () {
  var items = document.querySelectorAll('.tab__switcher');

  function switchTab(showTab) {
    items.forEach(function (item) {
      item.classList.remove('is-active');
    });
    var targetTab = showTab.currentTarget.classList.add('is-active');
    showTab.preventDefault();
    var tabContent = document.querySelectorAll('.tab__content');
    tabContent.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
    tabActiveId = showTab.target.getAttribute('href');
    var tabActive = document.querySelector(tabActiveId);
    tabActive.classList.add('is-active');
  }

  items.forEach(function(tab){
    tab.addEventListener('click', switchTab);
  });
});
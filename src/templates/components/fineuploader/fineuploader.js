import qq from 'fine-uploader/lib/traditional'

var photos = document.querySelectorAll('.fineuploader');
photos.forEach(
  function(uploader) {
    var photo = new qq.FineUploader({
      element: uploader,
      template: document.querySelector('.qq-template-gallery'),
      multiple: false,
      enableTooltip: false,
    });
  }
);

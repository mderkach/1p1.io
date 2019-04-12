import qq from 'fine-uploader/lib/traditional'

var photo = document.querySelector('.fineuploader');
var uploader = new qq.FineUploader({
  element: photo,
  listElement: document.querySelector('.fineuploader__list'),
  template: document.querySelector('#qq-template-gallery'),
});

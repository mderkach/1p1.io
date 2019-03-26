import qq from 'fine-uploader/lib/traditional'

var uploader = new qq.FineUploader({
  element: document.querySelector('#uploader'),
  template: document.querySelector('.qq-template-gallery'),
  multiple: false,
  enableTooltip: false,
});

console.log(uploader);

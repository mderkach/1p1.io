import qq from 'fine-uploader/lib/all'
import './fine-uploader-gallery.min.css'

var uploader = new qq.FineUploaderBasic({
  element: document.getElementById('uploader'),
  template: 'qq-template-gallery',
  request: {
    endpoint: '/server/uploads'
  },
  thumbnails: {
    placeholders: {
      waitingPath: '/source/placeholders/waiting-generic.png',
      notAvailablePath: '/source/placeholders/not_available-generic.png'
    }
  },
  validation: {
    allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
  }
});
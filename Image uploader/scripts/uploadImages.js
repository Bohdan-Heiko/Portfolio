const uploader = document.getElementById('uploader'),
      imagesList = document.querySelector('.images'),
      images = [];

function uploadImage() {
    let files = this.files, i, fileLength = files.length, image;
    
    if(FileReader) {
        for(i = 0; i < fileLength; i += 1) {
            let fileReader = new FileReader(), file = files[i];
            fileReader.addEventListener('load', function (event) {
                image = {};
                image['name'] = file.name;
                image['size'] = file.size;
                image['url'] = event.target.result;

                images.push(image);
                displayImages(images, imagesList);
            })
            fileReader.readAsDataURL(file);
        }
    }
}

displayImages(images, imagesList);
uploader.addEventListener('change', uploadImage, false);
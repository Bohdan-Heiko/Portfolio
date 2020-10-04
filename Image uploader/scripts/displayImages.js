function displayImages(images = [], imagesList) {
  imagesList.innerHTML = images.map(image => {
      return `
          <li>
              <figure>
                  <img src=${image.url} alt="">
                  
                  <figcaption>
                      <p>${image.name}</p>
                      <p>${image.size}</p>
                  </figcaption>
                  <button class="delete" id="delete" >Delete</button>
                  <button class="changeText" id="changeText" >Change</button>
                  

                  
              </figure>
          </li>
      `
  }).join('')
}

{/* <input type="button" id="delete" class="delete"></input>  */}
{/* <input type="button" id="changeText" class="changeText"></input>  */}
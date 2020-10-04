var currentItem;

imagesList.addEventListener('click', function(e) {
  currentItem = e.target;
  if (currentItem.id == 'changeText') {
    if(currentItem !== imagesList) {
      var elemFigure = currentItem.parentNode;
      var elemFigcaption = elemFigure.getElementsByTagName('figcaption');
      var text = elemFigcaption[0].getElementsByTagName('p')[0];
      var myText = prompt("Введте новое имя");

      if (myText) {
        text.innerHTML = myText;
      } else{
        text.innerHTML = '';
      }
      
      console.log(text);
      
    }
  }
});

var currentItem;

imagesList.addEventListener('click', function(e) {
  currentItem = e.target;


  if (currentItem.id == 'delete') {
    if(currentItem !== imagesList) {
      var elemLi = currentItem.parentNode.parentNode;
      elemLi.remove();
    }
  }


  
});








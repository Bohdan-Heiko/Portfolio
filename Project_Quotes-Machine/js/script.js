var bodyElement = document.getElementById('body');
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var buttonShow = document.getElementById('showQuotes');
var lastIn = new Array();
var randomQuote;

var quotesArr = [
  {title: '“Что разум человека может постигнуть и во что он может поверить, того он способен достичь.”', 
    author: 'Наполеон Хилл', 
    image: 'url("image/napoleon-hill.jpg")'},
  {title: '“Стремитесь не к успеху, а к ценностям, которые он дает​.”', 
    author: 'Альберт Эйнштейн', 
    image: 'url("image/albert-einshtein.jpg")'},
  {title: '“Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.”', 
    author: 'Флоренс Найтингейл', 
    image: 'url("image/flourenc.jpg")'},
  {title: '“Сложнее всего начать действовать, все остальное зависит только от упорства.”', 
    author: 'Амелия Эрхарт', 
    image: 'url("image/ameliya.jpg")'},
  {title: '“Надо любить жизнь больше, чем смысл жизни.”', 
    author: 'Федор Достоевский', 
    image: 'url("image/love-life.jpg")'},
  {title: '“Жизнь - это то, что с тобой происходит, пока ты строишь планы.”', 
    author: 'Джон Леннон”', 
    image: 'url("image/lenon.jpg")'},
  {title: '“Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.”',
    author: 'Альберт Эйнштейн',
    image: 'url("image/albert.jpg")'},
  {title: '“Начинать всегда стоит с того, что сеет сомнения.”', 
    author: 'Борис Стругацкий', 
    image: 'url("image/life.jpg")'},
  {title: '“Настоящая ответственность бывает только личной.”', 
    author: 'Фазиль Искандер', 
    image: 'url("image/responsibility.jpg")'},
  {title: '“Неосмысленная жизнь не стоит того, чтобы жить.”', 
    author: 'Сократ', 
    image: 'url("image/sokrat.jpg")'}
];



function showRandomQuote() {  
  getRandomIndex();
  bodyElement.style.backgroundImage = quotesArr[randomQuote].image;
  quote.innerHTML = quotesArr[randomQuote].title;
  author.innerHTML = quotesArr[randomQuote].author;
};

function getRandomIndex() {
  randomQuote = Math.floor(Math.random() * (10 - 1)) + 1;
  if(randomQuote === lastIn[0]) {
    getRandomIndex();
  } 
};

buttonShow.addEventListener('click', showRandomQuote);

showRandomQuote();
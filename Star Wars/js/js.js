let buttonPrev  = document.getElementById('buttonPrev');
let buttonNext  = document.getElementById('buttonNext');
let buttonBack  = document.getElementById('backToList');
let myList          = document.getElementById('characters');
let nameChar        = document.getElementById('name');
let heroYearOfBirth = document.getElementById('yearOfBirth')
let heroMovelist    = document.getElementById('movielList')
let heroHomePlanet  = document.getElementById('homePlanet')
let heroSpacies     = document.getElementById('species')

let myUrl = 'https://swapi.dev/api/people/';
let myResponse;

function updateButtonsState(){
    if (myResponse.next) {
        buttonNext.disabled = false;
        buttonNext.hidden = false;
    }
    else {
        buttonNext.disabled = true;
        buttonNext.hidden = true;
    }
    if (myResponse.previous) {
        buttonPrev.disabled = false;
        buttonPrev.hidden = false;
    }
    else {
        buttonPrev.disabled = true;
        buttonPrev.hidden = true;
    }
}

function clearCharacretsList() {
    while(myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
}

function printCharacter(cher){
    hideMainPage();
    showCharacter();
    nameChar.innerHTML = cher.name;
    heroYearOfBirth.innerHTML = 'Год рождения: ' + cher.birth_year;
    setFilmList (cher);
    setHomePlanet (cher);
    setSpecies (cher);          
}

function printCharactersList(myData){
    clearCharacretsList();
    
    for(let i = 0; i < myData.results.length; i++) {
        // list.innerHTML = '<li>' + myData.results[i].name + '</li>';
        
        let newItem = document.createElement("li");
        newItem.innerHTML = myData.results[i].name;
        myList.appendChild(newItem);

        newItem.addEventListener('click', function() {
            printCharacter(myData.results[i]);
        
        });
    }

    updateButtonsState();
}

function getInfo(url, output){
    fetch(url).then(  
        function(response) {  
        if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' + response.status);  
            return;
        }
        response.json()
            .then(function(data) {
            myResponse = data;
            output(data);
            });
        }  
    )  
    .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
    });

    
}

function setFilmList (cher){
    heroMovelist.innerHTML = 'Cписок фильмов:';
    if (cher.films) {
        for(let i = 0; i < cher.films.length; i++){
            fetch(cher.films[i]).then(  
                function(response) {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' + response.status);  
                    return;
                }
                response.json()
                    .then(function(data) {
                        heroMovelist.insertAdjacentHTML("beforeend", ' '+ data.title);
                        if ( i<cher.films.length-1) {
                            heroMovelist.insertAdjacentHTML("beforeend", ',');
                        }
                    });
                }  
            )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            }); 
        }
    }
}

function setHomePlanet (cher){
    heroHomePlanet.innerHTML = 'Pодная планета:';
    if (cher.homeworld) {
        fetch(cher.homeworld).then(  
            function(response) {  
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' + response.status);  
                return;
            }
            response.json()
                .then(function(data) {
                    heroHomePlanet.insertAdjacentHTML("beforeend", ' '+ data.name);
                });
            }  
        )  
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        }); 

    }
}

function setSpecies (cher){
    heroSpacies.innerHTML = 'Подвид:';
    if (cher.species[0]) {
        for(let i = 0; i < cher.species.length; i++){
            fetch(cher.species).then(  
            function(response) {  
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' + response.status);  
                return;
            }
            response.json()
                .then(function(data) {
                    heroSpacies.insertAdjacentHTML("beforeend", ' '+ data.species);
                });
            }  
        )  
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        }); 
        }
            
    }
    else{
        heroSpacies.insertAdjacentHTML("beforeend", ' отсутствует');
    }
}

function restoreMainPage(){
    let myDiv = document.getElementById('mainPage');
    myDiv.hidden = false;
}
function hideMainPage(){
    let myDiv = document.getElementById('mainPage');
    myDiv.hidden = true;
}
function showCharacter(){
    let myDiv = document.getElementById('character');
    myDiv.hidden = false;
}
function hideCharacter(){
    let myDiv = document.getElementById('character');
    myDiv.hidden = true;
}




buttonNext.addEventListener('click', function() {        
    if (myResponse.next) {
        getInfo(myResponse.next, printCharactersList);
    }
});

buttonPrev.addEventListener('click', function() {
    if (myResponse.previous) {
        getInfo(myResponse.previous, printCharactersList);

    } 
});

buttonBack.addEventListener('click', function() {
    hideCharacter();
    restoreMainPage();
});



getInfo(myUrl, printCharactersList);
hideCharacter();

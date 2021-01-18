const lstContainer = document.getElementById("pokemon-list");
const url = 'https://pokeapi.co/api/v2/pokemon';

// fetching the url
fetch(url)
.then((data)=> data.json()) // changin
.then((data)=>{
    console.log(data)
    let pokemon = data.results;
    return pokemon.map((poke) => {
        let li = createNode('li');
        li.innerHTML = poke.name;
        append(lstContainer, li);
    })
})

//function to create an element
function createNode(element){
    return document.createElement(element)
}


//funtion to append an element
function append(parent, child){
    return parent.appendChild(child)
}
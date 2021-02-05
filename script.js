// JavaScript Document

// List of adjectives
const arrayOfAdjs = [
    {'adjective': 'tiny'},
    {'adjective': 'abstract'},
    {'adjective': 'hairy'},
    {'adjective': 'steampunk'},
    {'adjective': 'monochromatic'},
    {'adjective': 'melting'},
    {'adjective': 'spooky'},
    {'adjective': 'rotten'},
    {'adjective': 'colorful'},
    {'adjective': 'glowing'},
    {'adjective': 'slimey'},
    {'adjective': 'lineal'},
    {'adjective': 'geometric'},
]

// List of objects
const arrayOfObjs = [
    {'object': 'food'},
    {'object': 'alien'},
    {'object': 'spaceship'},
    {'object': 'plant'},
    {'object': 'superhero'},
    {'object': 'cartoon'},
    {'object': 'building'},
    {'object': 'monster'},
    {'object': 'planet'},
    {'object': 'skeleton'},
    {'object': 'animal'},
    {'object': 'typeography'},
    {'object': 'candy'},
]

// Generate random adjectives and objects from list
function generateRandom(){
    const randomAdj = Number.parseInt(Math.random()*arrayOfAdjs.length);
    document.querySelector('#adjective').textContent = `${arrayOfAdjs[randomAdj].adjective}`;
    
    const randomObj = Number.parseInt(Math.random()*arrayOfObjs.length);
    document.querySelector('#object').textContent = `${arrayOfObjs[randomObj].object}`;
}
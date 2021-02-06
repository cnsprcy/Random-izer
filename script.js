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
    {'adjective': 'multicolored'},
    {'adjective': 'glowing'},
    {'adjective': 'slimey'},
    {'adjective': 'lineal'},
    {'adjective': 'geometric'},
    {'adjective': 'broken'},
    {'adjective': 'creepy'},
    {'adjective': 'wet'},
    {'adjective': 'prickly'},
    {'adjective': 'organic'},
    {'adjective': 'symmetrical'},
    {'adjective': 'patterned'},
    {'adjective': 'vibrant'},
    {'adjective': 'warm'},
    {'adjective': 'cool'},
    {'adjective': 'bold'},
    {'adjective': 'light'},
    {'adjective': 'contrasting'},
    {'adjective': 'complementary'},
    {'adjective': 'flowing'},
    {'adjective': 'massive'},
    {'adjective': '3D'},
    {'adjective': 'doodle'},
    {'adjective': 'anime'},
    {'adjective': 'graffiti'},
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
    {'object': 'eyes'},
    {'object': 'flower'},
    {'object': 'mandala'},
    {'object': 'shapes'},
    {'object': 'vase'},
    {'object': 'cityscape'},
    {'object': 'ghost'},
    {'object': 'insect'},
    {'object': 'human'},
    {'object': 'dragon'},
    {'object': 'instrument'},
    {'object': 'cards'},
    {'object': 'nature'},
    {'object': 'mountain'},
    {'object': 'space'},
    {'object': 'tattoo'},
    {'object': 'book'},
    {'object': 'key'},
    {'object': 'car'},
    {'object': 'armor'},
]

// Generate random adjectives and objects from list
function generateRandom(){
    const randomAdj = Number.parseInt(Math.random()*arrayOfAdjs.length);
    document.querySelector('#adjective').textContent = `${arrayOfAdjs[randomAdj].adjective}`;
    
    const randomObj = Number.parseInt(Math.random()*arrayOfObjs.length);
    document.querySelector('#object').textContent = `${arrayOfObjs[randomObj].object}`;
}

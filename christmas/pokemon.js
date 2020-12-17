 // SECTION 1: Variable Initialization
var lol = true;

var wild_names = [
"Scholar Mason",
"Cyclops Ryan",
"Model McKenna",
"Batter Dad",
"Timeless Mom",
"Baby Lila",
'Squirtle',
'Charmander',
'Bulbasaur',
'Pikachu'
];

var people_names = [
"Scholar Mason",
"Cyclops Ryan",
"Model McKenna",
"Batter Dad",
"Timeless Mom",
"Baby Lila",
];


var boss_names = [
"Mr. Childers",
"Furnace Dust",
"5:30am Seminary",
"Firepit Mosquitos", 
"Yardwork Saturdays", 
"The Demon Dog"
];

var pokemon_data = {

'Baby Lila' : {image : "static/lila.png", move1 : "Grrr", move2 : "WOOF!", move3: "Pee on the mat", move4 : "Pee on Mason in the car", evolution : "Fancy Lila", power : [10, 20, 10, 20]},
'Fancy Lila' : {image : "static/lila1.png", move1 : "Hula hit", move2 : "Tails-a-waggin' torture", move3: "Rabbit chase", move4 : "Fetch fight", evolution : "Perfect Lila", power : [20, 30, 25, 20]},
'Perfect Lila' : {image : "static/lila2.png", move1 : "Bellyrub burro-blast", move2 : "Limping lambaste", move3: "Kuma-crew attack", move4 : "Steal the steak", evolution : -1, power : [50, 40, 20, 30]},

'Batter Dad' : {image : "static/dad.png", move1 : "Home run", move2 : "Punt", move3: "Grand slam", move4 : "Umpire bribe", evolution : "Vandal Dad", power : [10, 10, 20, 20]},
'Vandal Dad' : {image : "static/dad1.png", move1 : "Jugendliche Straftäter", move2 : "Missionary mojo", move3: "Munich maelstrom", move4 : "BMW Backhand", evolution : "Thriller Dad", power : [30, 25, 20, 20]},
'Thriller Dad' : {image : "static/dad2.png", move1 : "Cyborg hip kick", move2 : "Boeing Barrage", move3: "Dad-joke", move4 : "Woodshop Attack", evolution : -1, power : [40, 30, 50, 20]},

'Timeless Mom' : {image : "static/mom.png", move1 : "Pants-gun shootout", move2 : "Pumpkin toss", move3: "Wilkes whop", move4 : "Enum Claw", evolution : "New Grad Mom", power : [20, 10, 20, 10]},
'New Grad Mom' : {image : "static/mom1.png", move1 : "80s hair whip", move2 : "White nylon nunchucks", move3: "Audiology attack", move4 : "Diploma shuriken", evolution : "Batmom", power : [30, 35, 10, 20]},
'Batmom' : {image : "static/mom2.png", move1 : "Hallmark marathon", move2 : "Board-game night brawl", move3: "Organ key-change", move4 : "Pioneer woman Pie-throw", evolution : -1, power : [50, 30, 40, 20]},

'Scholar Mason' : {image : "static/mason.png", move1 : "Monkey Ball Smash", move2 : "Fablehaven Woods trap", move3: "Swordsmasters Slash", move4 : "'r' word synonym", evolution : "Detective Mason", power : [10, 10, 20, 20]},
'Detective Mason' : {image : "static/mason1.png", move1 : "Break a piano string", move2 : "Recorder solo", move3: "Early bedtime", move4 : "AP test Ambush", evolution : "Backflip Mason", power : [35, 30, 10, 20]},
'Backflip Mason' : {image : "static/mason2.png", move1 : "Flee to Hawaii", move2 : "Self-destruct (his neck)", move3: "Boston Blizzard", move4 : "Croquetta Charge", evolution : -1, power : [20, 40, 30, 50]},

'Cyclops Ryan' : {image : "static/ryan.png", move1 : "Trick shot", move2 : "Glass table headbutt", move3: "Imaginext adventure", move4 : "Glasses Groovin'", evolution : "Hungry Ryan", power : [20, 20, 10, 10]},
'Hungry Ryan' : {image : "static/ryan1.png", move1 : "Even trickier shot", move2 : "Marathon sprint", move3: "Basketball hookshot", move4 : "Miner's Burgers Buffet", evolution : "Viking Lumberjack", power : [20, 25, 30, 20]},
'Viking Lumberjack' : {image : "static/ryan2.png", move1 : "The TRICKIEST shot", move2 : "Parkour Pounce", move3: "Utah Yee-haw", move4 : "Trash-talk in portuguese", evolution : -1, power : [40, 20, 30, 50]},

'Model McKenna' : {image : "static/mck.png", move1 : "BITE ME!", move2 : "Daisy Scout Damage", move3: "McKennikins Mania", move4 : "Cathcart Craze", evolution : "Weird McKenna", power : [20, 10, 20, 10]},
'Weird McKenna' : {image : "static/mck1.png", move1 : "Unicycle jousting", move2 : "Valley View Valley Girl", move3: "Back handspring kick", move4 : "Beg for a pet dog", evolution : "Cyber-kenna", power : [30, 30, 20, 20]},
'Cyber-kenna' : {image : "static/mck2.png", move1 : "Dinner seating chart", move2 : "J&tP sonic boom", move3: "High FODMAP belch", move4 : "Speedread a novel", evolution : -1, power : [40, 30, 50, 20]},

// Bosses

"Mr. Childers" : {image : "static/childers.png", move1 : "Ignore important email", move2 : "Ignore important email", move3: "Refuse to swap class", move4 : "Refuse to swap class", evolution : -1, power : [40, 40, 50, 50]},
"Furnace Dust" : {image : "static/furnace.png", move1 : "Dry air", move2 : "Dry air", move3: "Coughing fit", move4 : "Coughing fit", evolution : -1, power : [40, 40, 50, 50]},
"5:30am Seminary" : {image : "static/sem.png", move1 : "Sleeping in back row", move2 : "Sleeping in back row", move3: "Black ice car crash", move4 : "Black ice car crash", evolution : -1, power : [40, 40, 50, 50]},
"Firepit Mosquitos" : {image : "static/mosquito.png", move1 : "Selectively bite Mason", move2 : "Selectively bite Mason", move3: "Move the party inside", move4 : "Move the party inside", evolution : -1, power : [40, 40, 50, 50]},
"Yardwork Saturdays" : {image : "static/yardwork.png", move1 : "Green bin dump over", move2 : "Green bin dump over", move3: "Re-planting the weeds", move4 : "Re-planting the weeds", evolution : -1, power : [40, 40, 50, 50]},
"The Demon Dog" : {image : "static/dog.png", move1 : "RAFF RRAFFF RAAAAFFFFF", move2 : "RAFF RRAFFF RAAAAFFFFF", move3: "GrrrrRRARRARARARARRRR", move4 : "GrrrrRRARRARARARARRRR", evolution : -1, power : [40, 40, 50, 50]},

// Pokemon

'Squirtle' : {image : "static/squirtle.png", move1 : "Headbutt", move2 : "Tackle", move3: "Watergun", move4 : "Bubble", evolution : "Warturtle", power : [10, 10, 20, 10]},
'Warturtle' : {image : "static/warturtle.png", move1 : "Watergun", move2 : "Bubblebeam", move3: "Body Slam", move4 : "Ice Beam", evolution : "Blastoise", power : [20, 20, 20, 30]},
'Blastoise' : {image : "static/blastoise.png", move1 : "Hydro Pump", move2 : "Blizzard", move3: "Shell Smash", move4 : "Hydro Cannon", evolution : -1, power : [40, 50, 30, 50]},

'Charmander' : {image : "static/charmander.png", move1 : "Ember", move2 : "Scratch", move3: "Growl", move4 : "Fire Spin", evolution : "Charmeleon", power : [10, 10, 20, 10]},
'Charmeleon' : {image : "static/charmeleon.png", move1 : "Fire Spin", move2 : "Slash", move3: "Flamethrower", move4 : "Body Slam", evolution : "Charizard", power : [20, 20, 20, 30]},
'Charizard' : {image : "static/charizard.png", move1 : "Wing Attack", move2 : "Flamethrower", move3: "Fly", move4 : "Blast Burn", evolution : -1, power : [40, 50, 30, 50]},

'Bulbasaur' : {image : "static/bulbasaur.png", move1 : "Headbutt", move2 : "Leech Seed", move3: "Vine Whip", move4 : "Razor Leaf", evolution : "Ivysaur", power : [10, 10, 20, 10]},
'Ivysaur' : {image : "static/ivysaur.png", move1 : "Giga Drain", move2 : "Magical Leaf", move3: "Vine Whip", move4 : "Body Slam", evolution : "Venasaur", power : [20, 20, 20, 30]},
'Venasaur' : {image : "static/venasaur.png", move1 : "Earthquake", move2 : "Sludge Bomb", move3: "Giga Drain", move4 : "Plant Frenzy", evolution : -1, power : [40, 50, 30, 50]},

'Pikachu' : {image : "static/pikachu.png", move1 : "Quick Attack", move2 : "Spark", move3: "Tail Slap", move4 : "Thunderbolt", evolution : "Raichu", power : [10, 20, 10, 40]},
'Raichu' : {image : "static/raichu.png", move1 : "Body Slam", move2 : "Iron Tail", move3: "Thunder", move4 : "Volt Tackle", evolution : -1, power : [20, 30, 50, 50]},

};

class Pokemon {
  constructor(name, image_name, move1, move2, move3, move4, evolution, hp, power) {    
    this.name = name;
    this.tinyimage = new Image();
    this.tinyimage.src = image_name.slice(0, 7) + "tiny/" + image_name.slice(7);
    this.image = new Image();
    this.image.src = image_name.slice(0, 7) + "med/" + image_name.slice(7);
    this.largeimage = new Image();
    this.largeimage.src = image_name.slice(0, 7) + "large/" + image_name.slice(7);
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
    this.evolution = evolution;
    this.hp = hp;
    this.exp = 0;
    this.power1 = power[0];
    this.power2 = power[1];
    this.power3 = power[2];
    this.power4 = power[3];
  }
}

var first_pokemon = true;
var in_battle = false;
var last_stroke = -1;
var current_pokemon = 0;
var text_case = "welcome";
var caught = [];
var working = false;
var champion_battle = -1;
var champion_current = -1;
var delta_x = 100;
var delta_y = 100;
window.onload = function() {
  'use strict';
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var w = document.getElementById('canvas').offsetWidth;
  var h = document.getElementById('canvas').offsetHeight;
  var terrainImageLoaded = true,
    houseImageLoaded = true,
    pokeballImageLoaded = true,
    playerImageLoaded = true;
  var objectSizes = 20;
  var speed = 100;
  var modifier = 100;
  var score = 0;
  //terrain image
  var terrainImage = new Image();
  terrainImage.src = 'static/terrain.jpg';
  //house image
  var houseImage = new Image();
  houseImage.src = 'static/house.png';
  var battleImage = new Image();
  battleImage.src = "static/battle.jpg";
  //moves
  var fire_move = new Image();
  fire_move.src = "static/moves/fire.png";
  var moves = {
  'Baby Lila' : fire_move,
  'Fancy Lila' : fire_move,
  'Perfect Lila' : fire_move,
  'Batter Dad' : fire_move,
  'Juvenile Delinquent Dad' : fire_move,
  'Michael Jackson Dad' : fire_move,
  'Timeless Mom' : fire_move,
  'New Grad Mom' : fire_move,
  'Batmom' : fire_move,
  'Scholar Mason' : fire_move,
  'Detective Mason' : fire_move,
  'Backflip Mason' : fire_move,
  'Cyclops Ryan' : fire_move,
  'Hungry Ryan' : fire_move,
  'Viking Lumberjack Ryan' : fire_move,
  'Model McKenna' : fire_move,
  'Definitely Not-weird McKenna' : fire_move,
  'Cyber-kenna' : fire_move,
  };
  //main sound
  var mainTheme = new Audio('static/main.mp3');
  mainTheme.loop = true;
  mainTheme.volume = .5;
  var battleTheme = new Audio('static/battle.mp3');
  battleTheme.loop = true;
  battleTheme.volume = .5;
  var evolutionTheme = new Audio('static/evolution.mp3');
  evolutionTheme.loop = false;
  evolutionTheme.volume = .5;
  //pokeball-selection
  var pokePick = new Audio('static/pickup.mp3');
  pokePick.volume = 0.8;
  //pokeball-selection
  var wildFind = new Audio('static/wild.mp3');
  wildFind.volume = 0.8;
  //player image
  var playerImage = new Image();
  playerImage.src = 'static/player.png';
  //pokeball image
  var pokeballImage = new Image();
  pokeballImage.src = 'static/pokeball.png';
  //pokeball-selection
  var winnerAudio = new Audio('static/winner.mp3');
  winnerAudio.loop = false;
  winnerAudio.volume = 0.8;


  /**
   * It will hold all the pockeball data like x and y axis position
   * sprite position and item distance is for determine which item is selected from the sprite - @todo future use for knowing on score which one player picked
   * Also hold the generate position function that generates random positions if there is no collision.
   * @Object
   * @name pokeball
   */
  var pokeball = {
    x: -1,
    y: -1,
    spritePosition: 0,
    spriteItemDistance: 33,
  };
  pokeball.generatePosition = function() {
    do {
      pokeball.x = Math.floor(Math.random() * 20) + 1;
      pokeball.y = Math.floor(Math.random() * 16) + 4;
    } while (check_collision(pokeball.x, pokeball.y));

    pokeball.spritePosition = Math.floor(Math.random() * 4) + 0; // get position from 0-4
  };

var attack = {
    image: fire_move,
    x: 100,
    y: 100,
  };

var wild_pokemon = {
    who: 0,
    x: 0,
    y: 0,
    spritePosition: 0,
    spriteItemDistance: 33,
  };

  wild_pokemon.generateWild = function() {
    do {
      wild_pokemon.x = Math.floor(Math.random() * 20) + 1;
      wild_pokemon.y = Math.floor(Math.random() * 16) + 4;
    } while (check_collision(wild_pokemon.x, wild_pokemon.y) || (wild_pokemon.x == pokeball.x && wild_pokemon.y == pokeball.y));

    wild_pokemon.spritePosition = Math.floor(Math.random() * 4) + 0; // get position from 0-4

    let name = wild_names[Math.floor(Math.random() * wild_names.length) + 0];

    if (first_pokemon) {
      name = people_names[Math.floor(Math.random() * people_names.length) + 0];
    }

    let poke = pokemon_data[name]
    let pokemon_object = new Pokemon(name, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
    wild_pokemon.who = pokemon_object
    console.log(wild_pokemon.who)
  };

  wild_pokemon.generateWild();

  var last_direction;
  /**
   * Holds all the player's info like x and y axis position, his current direction (facing).
   * I have also incuded an object to hold the sprite position of each movement so i can call them
   * I also included the move function in order to move the player - all the functionality for the movement is in there
   * @Object
   * @name pokeball
   */
  var hold_player = {
    x: 0,
    y: 0,
  };


  var player = {
    x: Math.round(w / 2 / objectSizes),
    y: Math.round(h / 2 / objectSizes),
    currentDirection: 'stand',
    direction: {
      stand: {
        x: 0,
        y: 0,
      },
      'down-1': {
        x: 17,
        y: 0,
      },
      'down-2': {
        x: 34,
        y: 0,
      },
      'up-1': {
        x: 125,
        y: 0,
      },
      'up-2': {
        x: 142,
        y: 0,
      },
      'left-1': {
        x: 69,
        y: 0,
      },
      'left-2': {
        x: 87,
        y: 0,
      },
      'right-1': {
        x: 160,
        y: 0,
      },
      'right-2': {
        x: 178,
        y: 0,
      },
    },
  };
  player.move = function(direction) {
    /**
     * A temporary object to hold the current x, y so if there is a collision with the new coordinates to fallback here
     */
    var prev_partner_x = hold_player.x;
    var prev_partner_y = hold_player.y;
    hold_player.x =  player.x
    hold_player.y =  player.y
    last_direction = direction;
    /**
     * Decide here the direction of the user and do the neccessary changes on the directions
     */
    switch (direction) {
      case 'left':
        player.x -= speed / modifier;
        if (player.currentDirection == 'stand') {
          player.currentDirection = 'left-1';
        } else if (player.currentDirection == 'left-1') {
          player.currentDirection = 'left-2';
        } else if (player.currentDirection == 'left-2') {
          player.currentDirection = 'left-1';
        } else {
          player.currentDirection = 'left-1';
        }
        break;
      case 'right':
        player.x += speed / modifier;
        if (player.currentDirection == 'stand') {
          player.currentDirection = 'right-1';
        } else if (player.currentDirection == 'right-1') {
          player.currentDirection = 'right-2';
        } else if (player.currentDirection == 'right-2') {
          player.currentDirection = 'right-1';
        } else {
          player.currentDirection = 'right-1';
        }
        break;
      case 'up':
        player.y -= speed / modifier;

        if (player.currentDirection == 'stand') {
          player.currentDirection = 'up-1';
        } else if (player.currentDirection == 'up-1') {
          player.currentDirection = 'up-2';
        } else if (player.currentDirection == 'up-2') {
          player.currentDirection = 'up-1';
        } else {
          player.currentDirection = 'up-1';
        }

        break;
      case 'down':
        player.y += speed / modifier;

        if (player.currentDirection == 'stand') {
          player.currentDirection = 'down-1';
        } else if (player.currentDirection == 'down-1') {
          player.currentDirection = 'down-2';
        } else if (player.currentDirection == 'down-2') {
          player.currentDirection = 'down-1';
        } else {
          player.currentDirection = 'down-1';
        }
        break;
    }



    /**
     * if there is a collision just fallback to the temp object i build before while not change back the direction so we can have a movement
     */


    if (check_collision(player.x, player.y)) {
      player.x = hold_player.x;
      player.y = hold_player.y;

      hold_player.x = prev_partner_x;
      hold_player.y = prev_partner_y;


    }

    var new_x = 0;
    var new_y = 0;

    // Random wild pokemon move
    let wild_move = Math.floor(Math.random() * 4);
    switch (wild_move) {
      case 0:
        new_x = wild_pokemon.x + 1;
        new_y = wild_pokemon.y;
        break;
      case 1:
        new_x = wild_pokemon.x - 1;
        new_y = wild_pokemon.y;
        break;
      case 2:
        new_y = wild_pokemon.y + 1;
        new_x = wild_pokemon.x;
        break;
      case 3:
        new_y = wild_pokemon.y - 1;
        new_x = wild_pokemon.x;
        break;
      default:
        break;
      }

    /**
     * If player finds the coordinates of pokeball the generate new one, play the sound and update the score
     */
    if (player.x == pokeball.x && player.y == pokeball.y) {
      // found a pokeball !! create a new one
      console.log('found a pokeball of ' + pokeball.spritePosition + '! Bravo! ');
      pokePick.pause();
      pokePick.currentTime = 0;
      pokePick.play();
      score += 1;
      pokeball.generatePosition();
    }


    // Player found wild pokemon
    if (player.x == wild_pokemon.x && player.y == wild_pokemon.y) {
      console.log('found a pokemon! Bravo!');
      text_case = "wild_encounter"
      wildFind.pause();
      wildFind.currentTime = 0;
      wildFind.play();
    } else if (!(new_x == player.x && new_y == player.y) && !(check_collision(new_x, new_y))) {
      wild_pokemon.x = new_x;
      wild_pokemon.y = new_y;
    }

    // Player  at champion's door
    if (player.x == 6 && player.y == 7) {
      if (caught.length < 6) {
          text_case = "notready";
          last_stroke = -1;
      } else {

        if (caught[0].evolution == -1 && caught[1].evolution == -1 && caught[2].evolution == -1 && caught[3].evolution == -1 && caught[4].evolution == -1 && caught[5].evolution == -1) {
          text_case = "ready"
          last_stroke = -1;
        } else {
          text_case = "notready";
          last_stroke = -1;
        }
      }
    }
    update();
  };



 // SECTION 2: Battle Section

var battle_text = "choose";
var move = "";
var opponent_move = "";
var your_strength = 0;
var opponent_strength = 0;
var old_image = 0;
var old_name = 0;
var flip = 0;


function battle() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(battleImage, 0, 0);

    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';


    ctx.fillText(`${caught[current_pokemon].name}`, 275, 240);
    ctx.fillText(`${wild_pokemon.who.name}`, 40, 75);

    ctx.drawImage(wild_pokemon.who.largeimage, 260, 50);
    ctx.drawImage(caught[current_pokemon].largeimage, 50, 160);

    // Exp bar
    ctx.fillStyle = 'rgba(137, 196, 244, 1)';
    ctx.fillRect(304, 304, 42*caught[current_pokemon].exp, 8);

    // Enemy HP
    ctx.fillStyle = 'rgba(231, 76, 60, 1)';
    ctx.fillRect(100 + (91 - 91*(100-wild_pokemon.who.hp)/100), 96, 91*(100-wild_pokemon.who.hp)/100, 7);

    // Your HP
    ctx.fillStyle = 'rgba(231, 76, 60, 1)';
    ctx.fillRect(334 + (91 - 91*(100-caught[current_pokemon].hp)/100), 260, 91*(100-caught[current_pokemon].hp)/100, 7);


    // ctx.fillRect(335, 260, 90, 10);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      switch(battle_text) {
        
        case "choose":
          ctx.fillText(`What should ${caught[current_pokemon].name} do?`, 20, h - 100);
          ctx.fillText(`1. ${caught[current_pokemon].move1}`, 20, h - 65);
          ctx.fillText(`2. ${caught[current_pokemon].move2}`, w/2, h - 65);
          ctx.fillText(`3. ${caught[current_pokemon].move3}`, 20, h - 35);
          ctx.fillText(`4. ${caught[current_pokemon].move4}`, w/2, h - 35);

          // Random wild pokemon move
          let opponent_move_select = Math.floor(Math.random() * 4);
          switch (opponent_move_select) {
            case 0:
              opponent_move = wild_pokemon.who.move1;
              opponent_strength = wild_pokemon.who.power1;
              break;
            case 1:
              opponent_move = wild_pokemon.who.move2;
              opponent_strength = wild_pokemon.who.power2;
              break;
            case 2:
              opponent_move = wild_pokemon.who.move3;
              opponent_strength = wild_pokemon.who.power3;
              break;
            case 3:
              opponent_move = wild_pokemon.who.move4;
              opponent_strength = wild_pokemon.who.power4;
              break;
            default:
              break;
            }

          if (last_stroke == 49) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power1;
            move = caught[current_pokemon].move1;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 50) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power2;
            move = caught[current_pokemon].move2;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 51) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power3;
            move = caught[current_pokemon].move3;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          } else if (last_stroke == 52) {
            battle_text = "move";
            your_strength = caught[current_pokemon].power4;
            move = caught[current_pokemon].move4;
            caught[current_pokemon].hp -= opponent_strength;
            wild_pokemon.who.hp -= your_strength;
          }

          if (wild_pokemon.who.hp < 0) {
            wild_pokemon.who.hp = 0;
          }
          if (caught[current_pokemon].hp < 0) {
            caught[current_pokemon].hp = 0;
          }
          break;
        case "move":

          ctx.fillText(`${caught[current_pokemon].name} used ${move}!`, 20, h - 100);
          ctx.fillText(`${wild_pokemon.who.name} lost ${your_strength} HP!`, 20, h - 75);
          ctx.fillText(`${wild_pokemon.who.name} used ${opponent_move}!`, 20, h - 50);
          ctx.fillText(`${caught[current_pokemon].name} lost ${opponent_strength} HP!`, 20, h - 25);

          if (last_stroke == 13) {

              last_stroke = -1;

              if (wild_pokemon.who.hp <= 0) {
                if (champion_current != -1 && champion_current < 5) {
                  champion_current += 1;
                  let poke = pokemon_data[boss_names[champion_current]];
                  let new_pokemon = new Pokemon(boss_names[champion_current], poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
                  old_name = wild_pokemon.who.name;
                  wild_pokemon.who = new_pokemon;
                  battle_text = "next_opponent";

                } else if (champion_current >= 5) {
                    battle_text = "champion_beaten";
                } else {
                    battle_text = "faint";
                }
                  if (caught[current_pokemon].exp < 3) {
                    caught[current_pokemon].exp += 1;
                  }
              } else if (caught[current_pokemon].hp <= 0) {
                if (champion_battle > 0) {
                    battle_text = "next";
                    last_stroke = -1;
                } else {
                    battle_text = "lose";
                }
              } else {
                battle_text = "choose";
              }
            
          }
          break;


        case "next_opponent":
          ctx.fillText(`${old_name} fainted!`, 20, h - 100);
          ctx.fillText(`The Champion sent out ${wild_pokemon.who.name}!`, 20, h - 75);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "choose";
          }
          break;

        case "champion_beaten":
          ctx.fillText(`${wild_pokemon.who.name} fainted! You defeated the Champion!`, 20, h - 100);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "battle_done";
          }
          break;

        case "faint":
          ctx.fillText(`${wild_pokemon.who.name} fainted!`, 20, h - 100);
          ctx.fillText(`${caught[current_pokemon].name} gained 1 experience point!`, 20, h - 65);

          if (last_stroke == 13) {
            if (caught[current_pokemon].exp >= 3 && caught[current_pokemon].evolution != -1) {
                old_image = caught[current_pokemon].largeimage;
                old_name = caught[current_pokemon].name;
                let poke = pokemon_data[caught[current_pokemon].evolution];
                let new_pokemon = new Pokemon(caught[current_pokemon].evolution, poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
                caught[current_pokemon] = new_pokemon;
                console.log("New pokemon!:");
                console.log(caught[current_pokemon]);
                last_stroke = -1;
                battleTheme.pause();
                evolutionTheme.play();
                battle_text = "evolve";
            } else {
              battle_text = "battle_done";
            }
            
          }
          break;

        case "evolve":

          if (flip % 2 == 0 && flip <= 12) {
            ctx.drawImage(old_image, 50, 160);
          }
          flip += 1;

          ctx.fillText(`What? ... ${old_name} is evolving....`, 20, h - 100);

         if (flip > 12) {
            ctx.fillText(`${old_name} evolved into ${caught[current_pokemon].name}!!`, 20, h - 65);
          }

          if (last_stroke == 13) {
            evolutionTheme.pause();
            last_stroke = -1;
            battle_text = "battle_done";
            flip = 0;
          }
          break;

        case "lose":
          ctx.fillText(`${caught[current_pokemon].name} fainted! You ran away!`, 20, h - 100);
          if (last_stroke == 13) {
            last_stroke = -1;
            battle_text = "battle_done";
          }
          break;

        case "next":
          ctx.fillText(`${caught[current_pokemon].name} fainted!`, 20, h - 100);
          ctx.fillText(`Press enter to send out your next Pokémon!`, 20, h - 65);

          if (last_stroke != -1) {
            current_pokemon += 1;
            champion_battle -= 1;
            if (current_pokemon == 6) {
              current_pokemon = 0;
            }
            last_stroke = -1;
            battle_text = "choose";
          }
          break;

        case "battle_done":
            text_case = "welcome";
            if (champion_battle != -1) {
              if (champion_battle != 0) {
                text_case = "winner";
              }
              champion_battle = -1;
            }
            last_stroke = -1;
            caught[current_pokemon].hp = 100;
            in_battle = false;
            refreshIntervalId = setInterval(update, 100);
            clearInterval(refreshIntervalId_battle);
            battleTheme.pause();
            mainTheme.play();
            update();
            wild_pokemon.generateWild();
          break;

        default:
          break;

      }



  };

   // SECTION 2: World Section

  /**
   * Handle all the updates of the canvas and creates the objects
   * @function
   * @name update
   */
  function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(terrainImage, 0, 0);
    ctx.drawImage(houseImage, 80, 60);

    //Genboard
    board();

    // Pokeball
    ctx.drawImage(
      pokeballImage,
      pokeball.spritePosition * pokeball.spriteItemDistance,
      0,
      objectSizes,
      objectSizes,
      pokeball.x * objectSizes,
      pokeball.y * objectSizes,
      objectSizes,
      objectSizes
    );



    attack.x += delta_x;
    attack.y += delta_y;

    if (
      (attack.x > 3 && attack.x < 9 && attack.y == 6) || (attack.x > 4 && attack.x < 9 && (attack.y == 5 || attack.y == 4 || attack.y == 3)) ||
      attack.x < 1 ||
      attack.x > 20 ||
      attack.y < 3 ||
      attack.y > 16 ||
      (attack.y > 0 && attack.y < 4 && (attack.x == 20 || attack.x == 19)) || //right corner
      (attack.y > 0 && attack.y < 4 && (attack.x == 2 || attack.x == 3)) || //left corner
      (attack.y > 18 && (attack.x == 2 || attack.x == 3)) || //left corner
      (attack.x > 17 && (attack.y == 19 || attack.y == 20)) || //left corner
      (attack.x > 19 && (attack.y == 17 || attack.y == 18)) //left corner 2
    ) {
      attack.x = 100;
      attack.y = 100;
    }


    if (attack.x == wild_pokemon.x && attack.y == wild_pokemon.y) {
      wildFind.pause();
      wildFind.currentTime = 0;
      wildFind.play();
      attack.x = 100;
      attack.y = 100;
      wild_pokemon.generateWild();
    }


    // Wild_pokemon
    ctx.drawImage(
      wild_pokemon.who.image,
      0,
      0,
      30,
      30,
      wild_pokemon.x * objectSizes,
      wild_pokemon.y * objectSizes,
      30,
      30
    );

    // Player
    console.log('y:', (player.y * objectSizes) / objectSizes);
    console.log('x', (player.x * objectSizes) / objectSizes);
    ctx.drawImage(
      playerImage,
      player.direction[player.currentDirection].x,
      player.direction[player.currentDirection].y,
      objectSizes - 2,
      objectSizes,
      player.x * objectSizes,
      player.y * objectSizes,
      objectSizes,
      objectSizes
    );


    // Partner
    if (caught.length > 0) {
      console.log('y:', (player.y * objectSizes) / objectSizes);
      console.log('x', (player.x * objectSizes) / objectSizes);
      ctx.drawImage(
        caught[current_pokemon].tinyimage,
        0,
        0,
        20,
        20,
        hold_player.x * objectSizes,
        hold_player.y * objectSizes,
        20,
        20
      );
      if (caught[current_pokemon].name in moves) { 
        console.log(caught[current_pokemon].name + "is in moves!")
        attack.image = moves[caught[current_pokemon].name];
       } else {
        console.log(caught[current_pokemon].name + "is NOT in moves!")
        attack.image = fire_move;
       }
    }

    // Caught Pokemon

    ctx.fillStyle = 'rgba(0,255,0,0.3)';
    ctx.fillRect(10 + current_pokemon*50, 5, 40, 40);

    for (var index = 0; index < caught.length; index++) { 
        ctx.drawImage(caught[index].image, 0, 0, 30, 30, 15 + index*50, 10, 30, 30);
    } 
        
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText('You have', w - 100, 20);

    ctx.font = '14px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText(score + ' pokéballs', w - 90, 40);

      // Text
      switch(text_case) {
        
        case "welcome":
          ctx.fillText('Welcome to the world of Pokémon!', 10, h - 75);
          ctx.fillText('Go explore and catch some Pokémon!', 10, h - 55);
          if (caught.length >= 1) {
            ctx.fillText('Press the space bar to switch between your partner Pokémon!', 10, h - 35);
            ctx.fillText('Press x to tell your partner to attack!', 10, h - 15);
          }
          working = false;
          break;
        
        case "used_move":
          ctx.fillText(`${caught[current_pokemon].name} used fireball!`, 10, h - 75);
            if (last_stroke != -1) {
              text_case = "welcome";
              last_stroke = -1
            }
          working = false;
          break;

        case "wild_encounter":
          first_pokemon = false;
          working = true;
          ctx.fillText(`You encountered a wild ${wild_pokemon.who.name}! What will you do?`, 10, h - 75);
          ctx.fillText('1. Battle!', 10, h - 55);
          ctx.fillText('2. Throw Pokéball', w/2, h - 55);
          ctx.fillText('3. Flee', 10, h - 35);
          if (last_stroke == 49) {
            if (caught.length == 0) {
              text_case = "nopokemon";
              last_stroke = -1
            } else {
              in_battle = true;
              clearInterval(refreshIntervalId);
              refreshIntervalId_battle = setInterval(battle, 500);
              mainTheme.pause();
              battleTheme.play();
              battle_text = "choose";
              last_stroke = -1;
              battle();
            }
          } else if (last_stroke == 50) {
            if (score == 0) {
              text_case = "emptybag"
              last_stroke = -1
            } else if (caught.length == 6) {
              text_case = "toomany";
              last_stroke = -1
            }else {
              score = score - 1
              text_case = "throw";
              last_stroke = -1
            } 

          } else if (last_stroke == 51) {
            text_case = "sorry";
            last_stroke = -1
          } 
          break;
        case "throw":
          ctx.fillText('You threw a Pokeball!', 10, h - 75);
          let odds = Math.floor(Math.random() * 9) + 0
          let catch_rate = 4;
          if (odds > catch_rate) {
            if (last_stroke != -1) {
              text_case = "caught";
              last_stroke = -1
            }
          } else {
            if (last_stroke != -1) {
              text_case = "escaped";
              last_stroke = -1
            }
          }
          break;

        case "caught":
            ctx.fillText(`You caught the ${wild_pokemon.who.name}! It has been added to your party!`, 10, h - 75);

            if (last_stroke != -1) {
              caught.push(wild_pokemon.who);
              wild_pokemon.generateWild();
              text_case = "welcome";
            }

            last_stroke = -1
          break;
        case "escaped":
            ctx.fillText(`Shoot! ${wild_pokemon.who.name} escaped!`, 10, h - 75);
            ctx.fillText('Press enter to throw another Pokeball or escape to flee!', 10, h - 55);
             if (last_stroke == 27) {
              text_case = "sorry";
              last_stroke = -1
            } else if (last_stroke == 13) {
                if (score == 0) {
                  text_case = "emptybag"
                  last_stroke = -1
                } else {
                  score = score - 1
                  text_case = "throw";
                  last_stroke = -1
               }
              } 
          break;

        case "nopokemon":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You can't battle until you catch a Pokémon!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "toomany":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You already have 6 Pokémon in your party!", 10, h - 75);
          ctx.fillText("Sorry, Trainer!", 10, h - 55);
          break;

        case "emptybag":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("You're out of Pokeballs! Oh no!", 10, h - 75);
          ctx.fillText("Better luck next time, Trainer!", 10, h - 55);
          break;

        case "sorry":
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          ctx.fillText("Better luck next time, Trainer!", 10, h - 75);
          break;

        case "notready":
          ctx.fillText("This is the home of the champion... Come back later.", 10, h - 75);
          ctx.fillText("You need to get stronger before you challenge the champion.", 10, h - 55);
          if (last_stroke != -1) {
            text_case = "welcome";
          }
          break;

        case "ready":
          ctx.fillText("This is the home of the champion... are you sure you're ready?", 10, h - 75);
          ctx.fillText("Press enter to challenge the champion or escape to wait.", 10, h - 55);
            if (last_stroke == 13) {
                last_stroke = -1;
                text_case = "champion";
              } else if (last_stroke != -1) {
                text_case = "welcome";
              } 
          break;

        case "champion":
          ctx.fillText("LETS GO!", 10, h - 75);
          if (last_stroke != -1) {
              in_battle = true;
              clearInterval(refreshIntervalId);
              refreshIntervalId_battle = setInterval(battle, 500);
              mainTheme.pause();
              battleTheme.play();
              champion_battle = 5;
              champion_current = 0;
              battle_text = "choose";
              last_stroke = -1;
              let poke = pokemon_data[boss_names[champion_current]];
              let new_pokemon = new Pokemon(boss_names[champion_current], poke["image"], poke["move1"], poke["move2"], poke["move3"], poke["move4"], poke["evolution"], 100, poke["power"]);
              wild_pokemon.who = new_pokemon;
              battle();
              text_case = "winner";
          }
          break;

        case "winner":
          console.log('In winning case!');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          var winnerGIF = document.getElementById("winner");
          winnerGIF.style.display = "block";
          mainTheme.pause();
          if (lol) {winnerAudio.play();}
          lol = false;
          break;

        default:
          break;
          // code block
      }

    // Draw Move
    ctx.drawImage(
      attack.image,
      0,
      0,
      30,
      30,
      attack.x * objectSizes,
      attack.y * objectSizes,
      30,
      30
    );

  }

   // SECTION Z: Closing Section
  /**
   * Our function that decides if there is a collision on the objects or not
   * @function
   * @name check_collision
   * @param {Integer} x - The x axis
   * @param {Integer} y - The y axis
   */
  function check_collision(x, y) {
    var foundCollision = false;

    if ((x > 3 && x < 9 && y == 6) || (x > 4 && x < 9 && (y == 5 || y == 4 || y == 3))) {
      //collision on house
      console.log('on house');
      foundCollision = true;
    }

    if (
      x < 1 ||
      x > 20 ||
      y < 3 ||
      y > 16 ||
      (y > 0 && y < 4 && (x == 20 || x == 19)) || //right corner
      (y > 0 && y < 4 && (x == 2 || x == 3)) || //left corner
      (y > 18 && (x == 2 || x == 3)) || //left corner
      (x > 17 && (y == 19 || y == 20)) || //left corner
      (x > 19 && (y == 17 || y == 18)) //left corner 2
    ) {
      console.log('lost on the woods');
      foundCollision = true;
    }

    return foundCollision;
  }

  /**
   * Here we are creating our board on the bottom right with our score
   * @todo maybe some mute button for the future?
   * @function
   * @name board
   */
  function board() {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, w, 50);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, h - 100, w, 100);

  }

  /**
   * Decide here if all the assets are ready to start updating
   * @function
   * @name assetsLoaded
   */
   var refreshIntervalId = 0;
   var refreshIntervalId_battle = 0;

  function assetsLoaded() {
      pokeball.generatePosition();
      wild_pokemon.generateWild();
      document.getElementById("loading").height = "0";
      sleep(2000);
      refreshIntervalId = setInterval(update, 100);
      update();
  }

  /**
   * Assign of the arrow keys to call the player move
   */
  document.onkeydown = function(e) {
    e = e || window.event;
    last_stroke = e.keyCode;

    if (!working) {
      if (e.keyCode == '37') player.move('left');
      else if (e.keyCode == '38') player.move('up');
      else if (e.keyCode == '39') player.move('right');
      else if (e.keyCode == '40') player.move('down');
      else if (e.keyCode == '32') {
        current_pokemon = current_pokemon + 1;

        if (current_pokemon > caught.length-1){
          current_pokemon = 0;
        }
      } else if (e.keyCode == '88' && caught.length > 0) {        

        attack.x = player.x;
        attack.y = player.y;
        switch (last_direction) {
          case 'left':
            delta_x = -1;
            delta_y = 0;
            break;
          case 'right':
            delta_x = 1;
            delta_y = 0;
            break;
          case 'up':
            delta_x = 0;
            delta_y = -1;
            break;
          case 'down':
            delta_x = 0;
            delta_y = 1;
            break;
          default:
            break;
        }
        text_case = "used_move";
        last_stroke = -1;
      }
    }

    if (in_battle) {
      battle();
    } else {
      mainTheme.play();
      update();
    }
  };

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

assetsLoaded();

let name1 = "Perfect Lila";
let poke1 = pokemon_data[name1];
let pokemon_object1 = new Pokemon(name1, poke1["image"], poke1["move1"], poke1["move2"], poke1["move3"], poke1["move4"], poke1["evolution"], 100, poke1["power"]);
caught.push(pokemon_object1);
wild_pokemon.generateWild();
let name2 = "Batmom";
let poke2 = pokemon_data[name2];
let pokemon_object2 = new Pokemon(name2, poke2["image"], poke2["move1"], poke2["move2"], poke2["move3"], poke2["move4"], poke2["evolution"], 100, poke2["power"]);
caught.push(pokemon_object2);
wild_pokemon.generateWild();
let name3 = "Thriller Dad";
let poke3 = pokemon_data[name3];
let pokemon_object3 = new Pokemon(name3, poke3["image"], poke3["move1"], poke3["move2"], poke3["move3"], poke3["move4"], poke3["evolution"], 100, poke3["power"]);
caught.push(pokemon_object3);
wild_pokemon.generateWild();
let name4 = "Backflip Mason";
let poke4 = pokemon_data[name4];
let pokemon_object4 = new Pokemon(name4, poke4["image"], poke4["move1"], poke4["move2"], poke4["move3"], poke4["move4"], poke4["evolution"], 100, poke4["power"]);
caught.push(pokemon_object4);
wild_pokemon.generateWild();
let name5 = "Viking Lumberjack";
let poke5 = pokemon_data[name5];
let pokemon_object5 = new Pokemon(name5, poke5["image"], poke5["move1"], poke5["move2"], poke5["move3"], poke5["move4"], poke5["evolution"], 100, poke5["power"]);
caught.push(pokemon_object5);
wild_pokemon.generateWild();
let name6 = "Cyber-kenna";
let poke6 = pokemon_data[name6];
let pokemon_object6 = new Pokemon(name6, poke6["image"], poke6["move1"], poke6["move2"], poke6["move3"], poke6["move4"], poke6["evolution"], 100, poke6["power"]);
caught.push(pokemon_object6);
wild_pokemon.generateWild();

};


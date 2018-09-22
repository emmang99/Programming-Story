/*Sets up my role in the story*/
const myCharacter = ["captain","crew member"];
/*Randomizes the characters*/
const me = myCharacter[Math.floor(Math.random() * myCharacter.length)];
/*Sets variables for each crew member' name*/
let crewsName = ["One Leg Larry", "Silver Tooth Tom", "Salt Boots Billy", "Glass Eye Earl"];
/*Sets variables for the directions*/
const direction = ["East", "West", "South", "North"];
/*Lets the crew starts with going East.*/
const sailto1 = direction[0];
/*Lets the crew goes West after.*/
const sailto2 = direction[1];
/*Sets up other variables*/
let skill = true;
let lucky = true;
const code = 42;

/*Introduces my character. There are different scenarios for each role.*/
function character() {
  console.log(`I am a ${me}`);
  if(me=="captain"){
    console.log("I recruit some crew members to my ship.");
    return true;
  }
  else{
    console.log("I am recruited to the ship.");
    return false;
  }
}

/*Lists off the crew members' names.*/
function theCrew(){
  crewsName.forEach(function(members){
   console.log(`There is ${members}`)
  })
}

/*The obstacles for part 1. Each direction has a different challenge.*/
function whatDirection(){
  if(sailto1=="East"){
    console.log("There is a giant sea monster!");
  }
  else if(sailto1=="West"){
    console.log("There is a big storm coming!");
  }
  else if(sailto1=="South"){
    console.log("There is a tornado!");
  }
  else{
    console.log("There are sirens!");
  }
}

/*Determines whether if the crew survives the first challenge.*/
/* If they sails to South or West, they will not survive. Other directions are fine.*/
function surviveOrNot(){
  if (sailto1 == "East" || sailto1 == "North"){
    console.log("We survive! Let's continue.");
    return true;
  }
  else{
    console.log("The ship is wrecked.");
    return false;
  }
}

/*Determines whether if the crew encounters the mermaids.*/
/*If they goes to East or South, they will not.*/
function mermaid(){
  if (sailto2 == "East" || sailto2 == "South") {
    console.log("We are on the right way!");
    return true;
  }
  else{
    console.log("We see a group of mermaids.");
    return false;
  }
}

/*If the crew goes West or North and sees the mermaids, the captain will be captured.*/
/*If my character is the captain, I will be taken.*/
function plotTwist(){
  if(me=="crew member"){
    console.log("My captain is captured by the mermaids.");
    return true;
  }
  else{
    console.log("I am captured by the mermaids.");
    return false;
  }
}

/*If I am the captain and variable 'skill' is true, I will escape.*/
function captainsFate(){
  if (skill == true) {
    console.log("I am a skilled pirate so I escape and swim to my ship.");
    return true;
  }
  else {
    console.log("I am a bad pirate so I cannot escape.");
    return false;
  }
}

/*If I am the crew member, I will fight for the captain place.*/
/*If variable 'skill' is true, I will defeat the First Mate.*/
function crewsFate(){
  if (skill == true){
    console.log("I defeat the First Mate and become the new captain.");
    return true;
  }
  else {
    console.log("The First Mate defeats me.");
    return false;
  }
}

/*Initiates the story of what happens on the island.*/
/*We sneak into the mountain cave without getting caught*/
/*We unlock the safe and get the treasure.*/
function island(){
  console.log("We see an island!");
  console.log("The treasure is guarded in the mountain cave by the island natives who are living in the forest.");
  console.log("We enter the forest and try not to get caught by the natives.");
  if (lucky == true){
    console.log("We carefully sneak into the cave and locate the treasure chest.");
    console.log("The chest is locked with a code.");
    console.log(`We enter ${code} and it is unlocked!`);
    console.log("Hurray! The treasure is ours!")
    }
  else{
    console.log("Oh no! We are captured by the natives! They are going to kill us!");
  }
}

/*Initiates the story*/
function startStory(){
  console.log("Let's go on a Treasure Hunt!");
  character();
  theCrew();
  console.log("Let's sail!");
  console.log(`We are heading ${sailto1}`);
  whatDirection();
    let part1 = surviveOrNot();
    if (part1 == true) {
      console.log(`We are heading ${sailto2}`);
      let part2 = mermaid();
      if (part2 == true) {
        island();
      }
      else{
        let twist = plotTwist();
        if (twist == true){
          console.log("Me and the First Mate fight to be the captain.");
          let crewsurvive = crewsFate();
          if (crewsurvive == true){
            console.log("The adventure continues.");
            island();
          }
          else {
            console.log("I have to walk the plank.");
          }
        }
        else {
          let captainsurvive = captainsFate();
          if (captainsurvive == true){
            console.log("The adventure continues.");
            island();
          }
          else {
            console.log("I am dead.");
          }
        }
      }
    }
    else {
      console.log("The crew is defeated.");
    }
}

startStory();

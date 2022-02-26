/*const hostHTML;
const joinHTML;*/
const gameHTML = `
  <div id="gameHTML">
    
  </div>
`;
var playerCount = 0;
var players = [];
//create json object or array idk what to use
const modeHTML = `  
  <div id="modeHTML">
    <h3>Choose how you want to play:</h3>
    <div id="mhBtns">
      <div id="mhLocal">
        <button onclick="localPlay()">Local</button>
      </div>
      <div id="mhOnline">
<!--    <button onclick="onlinePlay">Online</button>-->
        <button onclick="alert('Online functionality is a WIP for now.')">Online</button>
      </div>
    </div>
  </div>
`;
//settingsHTML only applies to the local mode. hostHTML will apply to the online mode settings.
const settingsHTML = `
  <div id="settingsHTML">
    <h3>Set the settings for your game:</h3>
    <div id="shInputs"> 
      <div class="rulesets" id="sMoDay">
        <form>
          <h5>Category</h5>
          <br>
          <input type="radio" class="radio" id="days" name="moDay" value="day"> 
          <label for="days" class="radio">Food Days</label>
          <br>
          <input type="radio" class="radio" id="months" name="moDay" value="month"> 
          <label for="months" class="radio">Food Months</label>
          <br>
          <input type="radio" class="radio" id="both" name="moDay" value="both"> 
          <label for="both" class="radio">Both</label>
        </form>
      </div>
      <div class="rulesets" id="sTime">
        <h5>Timer</h5>
        <br>
        <label id="timeLabel" for="time" class="range">Time limit: 60 sec</label>
        <input id="time" type="range" class="range" min="15" max="300" value="60" onchange="liveTimeUpdate()"> 
      </div>
      <div class="rulesets" id="sPlayers">
        <h5>Add players</h5>
        <br>
        <input class="pName" id="player" type="text" placeholder="Player Name" maxlength="10">
        <button class="pName" onclick="addPlayer()">
<!--      <img class="icon" src="assets/img/plus.svg/">-->
          +
        </button>
        <br>
        <div id="nameBox">

        </div>
      </div>
    </div>
    <button id="beginBtn">Create game</button>
  </div>
`;
//for the Time input, I want to display the time that the range input is set to as a label. I also want to change how the bar looks.
//Time input done yay
//for the MoDay input, I want to choose whether the player is guessing food months or days.
window.onload = setBkg();
function setBkg(){
  let imgn = Math.floor(Math.random() * 14) + 1;
  document.getElementById("body").style.backgroundImage = `url(assets/bkgGifs/bkgGif${imgn}.webp)`;
  document.getElementById("body").style.backgroundSize = 'cover';
  document.getElementById("body").style.backgroundRepeat = 'no-repeat';
}

function startGame(){$("div#titleHTML").replaceWith(modeHTML);}
function localPlay(){$("div#modeHTML").replaceWith(settingsHTML);}
//function for game to start goes here

function liveTimeUpdate(){;
  let time = $("#time").val();
  $("#timeLabel").text("Time limit: " + time + " secs");
}

function addPlayer(){
  let player = $("#player");
  let playerName = player.val();
  if (playerCount >= 8){
    alert("Playing with more than 8 players can get a bit cramped. Maybe they can join in the next round?");
  }
  if (playerName === ""){
    alert("You need to put a name there.");
    return;
  }
  if (playerName.includes(" ")){
    alert("For now, names cannot include spaces. Instead, use an underscore. (_)")
  }
  if (players.indexOf(playerName) >= 0){
    alert("This name is taken.");
    player.val("");
    return;
  }
  //prevent duplicate playerName inputs
  let pName = `<span class='nameList' id='` + playerName + `'>` + playerName + ` <button id='rm_` + playerName + `' class='rmvBtn'>x</button></span>`;
  $("#nameBox").append(pName);
  playerCount += 1;
  players.push(playerName);
  player.val("");
  if (playerCount < 8){
    player.focus();
  }
}
//will need to redo this fnction because if a name has spaces it doesn't work
$("body").on("click", ".rmvBtn", function(){
//get span and name
  let id = $(this).attr('id');
  let id_parsed = id.split('_');
  let playerName = id_parsed[1];
  $("#" + playerName).remove();
//remove span and name from players[] array
  let i = players.indexOf(playerName);
  if (i >= 0){
    players.splice(i,1);
  }
});

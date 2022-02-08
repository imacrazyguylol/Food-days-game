/*const hostHTML;
const joinHTML;
const gameHTML;*/
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
  </div>
`;
//for the Time input, I want to display the time that the range input is set to as a label. I also want to change how the bar looks.
//Time input done yay
//for the MoDay input, I want to choose whether the player is guessing food months or days.
window.onload = setBkg();
function setBkg(){
  let imgn = Math.floor(Math.random() * 14) + 1;
  document.getElementById("body").style.backgroundImage = `url(assets/bkgGifs/bkgGif${imgn}.webp/)`;
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
var playerCount = 0;
var playerName;
var pName = "<span class='nameList' id='" + playerName + "'>" + playerName + " <button onclick=''>x</button></span>";
function addPlayer(){
  let playerName = $("#player").val();
  $("#nameBox").append(pName);
}
//fix 'undefined', fix alignment, fix font, and everything else with the appended stuff
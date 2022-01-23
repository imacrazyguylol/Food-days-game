const modeHTML = `  
  <div id="modeHTML">
    <h3>Choose how you want to play:</h3>
    <div id="mhBtns">
      <div id="mhLocal">
        <button onclick="localPlay">Local</button>
      </div>
      <div id="mhOnline">
<!--    <button onclick="onlinePlay">Online</button>-->
        <button onclick="alert('Online functionality is a WIP for now.')">Online</button>
      </div>
    </div>
  </div>
`;
const settingsHTML = `
  <div id="settingsHTML">
    <h3>Set the settings for your game:</h3>
    <div id="shInputs">
      <div id="sTime">
        
      </div>
      <div id="sMoDay">
        <form>
          
        </form>
      </div>
  </div>
`
//for the Time input, I want to display the time that the range input is set to as a label. i also want to change how the bar looks.
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
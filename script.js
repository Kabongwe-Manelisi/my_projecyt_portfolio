//navigation bar button functions
function showCodingNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showPens(document.getElementById(\'bodyContainer\'))">Codepens</button></span></div>'
}
function showGraphicsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan">  <button class="button" onclick="landScapes(document.getElementById(\'bodyContainer\'))">LandScapes</button>  <button class="button" onclick="portraits(document.getElementById(\'bodyContainer\'))">Portraits</button>  <button class="button" onclick="creatures(document.getElementById(\'bodyContainer\'))">Creaturs</button></span></div>'
}
function showProgramsNav() {
  document.getElementById('dropDownContent').innerHTML = '<div class="dropDownContent"><span class="dropContentSpan"><button class="button" onclick="showSoftware(document.getElementById(\'imgContainer\'))">Software</button><button class="button" onclick="showApps(document.getElementById(\'show-area\'))">Apps</button></span></div>'
}
//drop down menue content button functions
//results from the 'showacaodingNav' function
//CODEPENS BUTTON 
function showPens() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer"><span class="penButtonSpan">  <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/zYJeWLz">Hover Dropdown Menu</a></button>  <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/vYQmRwG">Popup Onclick</a></button>  <button class="Button"><a href="https://codepen.io/DemonNoSh0kan/pen/VwVmbOe">Replace HTML Onclick</a></button>  </span><span class="penButtonSpan"><button class="Button"><a href="">Space Odyssey</a></button></span></div>'
}

//Results from the 'showGraphicsNav' function
//LANDSCAPES BUTTON
function landScapes() {
  document.getElementById('bodyContainer').innerHTML = '<div class="imgContainer">   <div class="flipCard"><div class="flipCardInner"><div class="flipCardFront"></div><div class="flipCardBack"><img class="img" src="img/kmmanzini.png"></div></div></div>   </div>';
}
//PORTRAITS BUTTON
function portrsaits() {
  document.getElementById('imgContainer').innerHTML ='<div class="imgContainer"></div>'
}
//CREATURES BUTTON
function creatures() {
  document.getElementById('imgContainer').innerHTML ='<div class="imgContainer"></div>'
}
function showSoftware() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}
function showApps() {
  document.getElementById('imgContainer').innerHTML = '<div class="imgContainer"><div class="item__container"><div class="item_img_container"></div></div></div>'
}


// Adding All The Elements Required

reload = document.getElementById("reload");
code = document.getElementById("code");
redelement = document.getElementById("red")
blueelement = document.getElementById("blue")
greenelement = document.getElementById("green")
rgbelement = document.getElementById("rgbelmnt")

// Making Variables Global
window.refreshedcolor;
window.red;
window.green;
window.blue;
window.rgbcode

// A function to convert RGB (RED, GREEN, BLUE) code to HEX (#FFFFFF)
rgbToHex = function(r, g, b) {
 return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// Generating Random Colors
makecolor = function() {
 // Red
 window.red = Math.floor((Math.random() * 256) + 1);
 // Green
 window.green = Math.floor((Math.random() * 256) + 1);
 // Blue
 window.blue = Math.floor((Math.random() * 256) + 1);
 // Return RGB Code
 window.rgbcode = `rgb(${window.red}, ${window.green}, ${window.blue})`

 // Return Hex Code
 hexcode = rgbToHex(red, green, blue);
 return hexcode;
}

// Applying Values
startcolor = makecolor();
rgbelement.innerHTML = window.rgbcode;
document.body.style.background = startcolor;
code.innerHTML = startcolor;
redelement.innerHTML = window.red;
greenelement.innerHTML = window.green;
blueelement.innerHTML = window.blue;

// Regenerate Color On Click Of Regenerate Button
reload.addEventListener("click", function() {
 reload.classList.toggle('rotate');
 window.refreshedcolor = makecolor()
 document.body.style.background = window.refreshedcolor;

 code.style.opacity = 0;
 redelement.style.opacity = 0;
 blueelement.style.opacity = 0;
 greenelement.style.opacity = 0;
 rgbelement.style.opacity = 0;

 code.innerHTML = window.refreshedcolor;
 redelement.innerHTML = window.red;
 greenelement.innerHTML = window.green;
 blueelement.innerHTML = window.blue;
 rgbelement.innerHTML = window.rgbcode;

 setTimeout(() => {
  code.style.opacity = 1;
  redelement.style.opacity = 1;
  blueelement.style.opacity = 1;
  greenelement.style.opacity = 1;
  rgbelement.style.opacity = 1;
 }, 50)

 setTimeout(() => { reload.classList.toggle('rotate'); }, 500)
})


// Copy To Clipboard On Click
code.addEventListener("click", () => {
 navigator.clipboard.writeText(window.refreshedcolor.toUpperCase());
})

redelement.addEventListener("click", () => {
 navigator.clipboard.writeText(window.red.toString());
})

blueelement.addEventListener("click", () => {
 navigator.clipboard.writeText(window.blue.toString());
})

greenelement.addEventListener("click", () => {
 navigator.clipboard.writeText(window.green.toString());
})

rgbelement.addEventListener("click", () => {
 navigator.clipboard.writeText(window.rgbcode)
})


// Some Other CSS
code.addEventListener("mousedown", () => {
 code.style.color = window.rgbcode;
})

code.addEventListener("mouseup", () => {
 code.style.color = "#fff";
})

code.addEventListener("touchstart", () => {
 code.style.color = window.rgbcode;
})

code.addEventListener("touchend", () => {
 code.style.color = "#fff";
})
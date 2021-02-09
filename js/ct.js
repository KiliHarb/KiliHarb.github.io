var objCol = document.getElementById("title_text");
var ro = document.getElementById("r");
var go = document.getElementById("g");
var bo = document.getElementById("b");
var dotr = document.getElementById("dotr");
var dotg = document.getElementById("dotg");
var dotb = document.getElementById("dotb");
var dotTextR = document.getElementById("textr");
var dotTextG = document.getElementById("textg");
var dotTextB = document.getElementById("textb");


var counterColR = Math.PI/1.5 * 1;
var counterColG = Math.PI/1.5 * 2;
var counterColB = Math.PI/1.5 * 3;
var r = 1;
var g = 1;
var b = 1;

//~~~~CONFIG~~~~
var stepsCol = 0.1; /*per*/ var timeCol = 60; /*ms*/
var modeCol = 1;
//~~~~CONFIG~~~~

async function main() {

  while (modeCol == 1) {
    counterColR = counterColR + stepsCol;
    counterColG = counterColG + stepsCol;
    counterColB = counterColB + stepsCol;
    r = (Math.sin(counterColR) + 1) / 2 * 255;
    g = (Math.sin(counterColG) + 1) / 2 * 255;
    b = (Math.sin(counterColB) + 1) / 2 * 255;
    objCol.style.color = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";

    dotr.style.transform = "translateY(" + (1 - Math.sin(counterColR) + 1) / 2 * 100 + "px)";
    dotg.style.transform = "translateY(" + (1 - Math.sin(counterColG) + 1) / 2 * 100 + "px)";
    dotb.style.transform = "translateY(" + (1 - Math.sin(counterColB) + 1) / 2 * 100 + "px)";

    dotr.style.width = (Math.sin(counterColR) +1) / 2 * 60 + "px";
    dotg.style.width = (Math.sin(counterColG) +1) / 2 * 60 + "px";
    dotb.style.width = (Math.sin(counterColB) +1) / 2 * 60 + "px";
    dotr.style.height = (Math.sin(counterColR) +1) / 2 * 60 + "px";
    dotg.style.height = (Math.sin(counterColG) +1) / 2 * 60 + "px";
    dotb.style.height = (Math.sin(counterColB) +1) / 2 * 60 + "px";

    dotr.style.filter = "brightness(" + (Math.sin(counterColR) +1) / 2 * 100 + "%)";
    dotg.style.filter = "brightness(" + (Math.sin(counterColG) +1) / 2 * 100 + "%)";
    dotb.style.filter = "brightness(" + (Math.sin(counterColB) +1) / 2 * 100 + "%)";

    if (r < 5) {
      dotr.style.zIndex = "3";
      dotg.style.zIndex = "2";
      dotb.style.zIndex = "1";
    } else if (g < 5) {
      dotr.style.zIndex = "1";
      dotg.style.zIndex = "3";
      dotb.style.zIndex = "2";
    } else if (b < 5) {
      dotr.style.zIndex = "2";
      dotg.style.zIndex = "1";
      dotb.style.zIndex = "3";
    }

    await sleep(timeCol);
  }
}

main();

function sleep(ms) {
  return new Promise((accept) => {
    setTimeout(() => {
      accept();
    }, ms);
  });
}

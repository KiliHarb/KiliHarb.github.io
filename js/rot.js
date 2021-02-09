var objRot = document.getElementById("title_text");

var sinRot = 0;
var counterRot = 0;
var angleRot = 0;

//~~~~CONFIG~~~~
var angleMultRot = 10;
var stepsRot = 0.08; /*per*/ var timeRot = 70; /*ms*/
//~~~~CONFIG~~~~

async function rot() {

  while (1+2==3) {
    if (counterRot >= Math.PI * 2) {
      counterRot = 0;
    }
    counterRot = counterRot + stepsRot;
    angleRot = Math.sin(counterRot) * angleMultRot;
    objRot.style.transform = "rotate(" + angleRot + "deg)";
    await sleep(timeRot);
  }
}

function sleep(ms) {
  return new Promise((accept) => {
    setTimeout(() => {
      accept();
    }, ms);
  });
}

rot();

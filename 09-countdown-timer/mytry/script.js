const inHour = document.getElementById("inHour");
const inMin = document.getElementById("inMin");
const inSec = document.getElementById("inSec");

const startBtn = document.getElementById("startBtn");

const outHour = document.getElementById("outHour");
const outMin = document.getElementById("outMin");
const outSec = document.getElementById("outSec");

let targetTime;
startBtn.onclick = () => {
  const fHour = Number(inHour.value);
  const fMin = Number(inMin.value);
  const fSec = parseInt(inSec.value);
  let date = new Date();
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const currentSec = date.getSeconds();

  date.setHours(currentHour + fHour);
  date.setMinutes(currentMin + fMin);
  date.setSeconds(currentSec + fSec);

  targetTime = date.getTime();
  localStorage.setItem("targetTime", targetTime);
  setInterval(update, 1000);
};

const update = () => {
  let allSeconds = (targetTime - Date.now()) / 1000;
  const cH = Math.floor(allSeconds / 3600);
  const cM = Math.floor(allSeconds / 60) % 60;
  const cS = Math.floor(allSeconds % 60);
  outHour.innerText = `Hour: ${cH}`;
  outMin.textContent = `Minute: ${cM}`;
  outSec.textContent = `Second: ${cS}`;
};

const checkTarget=localStorage.getItem('targetTime');

if(checkTarget){
    targetTime=checkTarget;
    setInterval(update,1000)
}




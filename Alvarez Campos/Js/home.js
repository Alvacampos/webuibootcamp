//Background Color Randomizer
let body= document.getElementById("gradient");
let button1= document.getElementById("Background");
getRandomColor=()=> {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 colorRandom=()=>{
  body.style.background = "linear-gradient(to right, " + getRandomColor() + ", "
  + getRandomColor() + ")";
  css.textContent = body.style.background + ";";
}
button1.addEventListener("click", colorRandom);
// ----------
// Clock
const renderTime = () =>{
  let currentTime = new Date();
  let diem = "AM";
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  if(h === 0){
    h=12;
  }else if(h>12){
    h=h-12;
    diem ="PM";
  }

  if(h<10){
    h = "0" + h;
  }
  if(m<10){
    m = "0" + m;
  }
  if(s<10){
    s = "0" + s;
  }
  let myClock=document.getElementById('clockDisplay');
  myClock.textContent = `${h}:${m}:${s}-${diem}`;
  setTimeout('renderTime()', 1000);
}
renderTime();

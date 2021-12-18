
document.body.onmouseover = handler;
const div1 = document.getElementById('red');
const div2 = document.getElementById('green');
const div3 = document.getElementById('blue');
const div4 = document.getElementById('light');
const inf = document.getElementById('inf_car');
let timer;
let k = 0;

function handler(event){
    const pr = event.target;
    if (pr.className === "first") {
        inf.value = 'Jaguar E-Type 1961';
     }
      if (pr.className === "second") {
        inf.value = 'Morgan Plus 8 1968';
      }
      if (pr.className === "third") {
        inf.value = 'MG MGB 1962';
      }
      if (pr.className === "forth") {
        inf.value = 'Polls-Royce Silver Shadow 1965';
      }
}

function out(){
  inf.value ="";
}

function another(img1, i)
    {
      img1.src = 'images/' + i + '.jpg';
      switch(i)
      {
        case 1: 
          img1.className = "first"; 
          break;
        case 2: 
          img1.className = "second"; 
          break;
        case 3: 
          img1.className = "third"; 
          break;
        case 4: 
          img1.className = "forth"; 
          break;
      }
    }
function Start(){
    timer = setInterval(function () {
        another(div1, k % 4 + 1);
        another(div2, (k + 1) % 4 + 1);
        another(div3, (k + 2) % 4 + 1);
        another(div4, (k + 3) % 4 + 1);
        k++;
    },400)
}

function Finish(){
	clearInterval(timer);
}



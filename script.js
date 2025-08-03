const rgbDisplay = document.getElementById("rgb-display");
const rgbContainer = document.getElementById("rgb-container");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let correctColor = "";

function generateRandomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function setupGame(){
  rgbContainer.innerHTML = "";
  result.textContent = "";

  const colors = [];
  for(let i = 0; i < 6; i++ ){
    colors.push(generateRandomColor());
  }


correctColor = colors[Math.floor(Math.random() * colors.length)];
rgbDisplay.innerHTML = correctColor;

colors.forEach((color) => {
  const div = document.createElement('div');
  div.className = "box";
  div.style.backgroundColor = color;
  
  div.addEventListener('click', () => {
    if(color === correctColor){
      result.textContent = "Correct";
      result.style.color = "lightgreen";

      document.querySelectorAll('.box').forEach((box) => {
        box.style.backgroundColor = correctColor;
      })
    }
    else{
      result.textContent = "Try Again";
      result.style.color = "#f87171";
      div.style.visibility = "hidden";
    }
  })

  rgbContainer.appendChild(div);  
})
}

setupGame();

restart.addEventListener('click',setupGame);
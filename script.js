const container = document.querySelector(".container");
const blackbtn = document.querySelector("#black");
const rainbowbtn = document.querySelector("#rainbow");
const graybtn = document.querySelector("#gray");
const clear = document.querySelector("#clear");
const sizeDisplay =document.querySelector("#size-display");
const allModeBtn = [blackbtn,rainbowbtn,graybtn];
let currentMode = "black";
function createGrid(gridSize){
    container.innerHTML = '';
        const containerWidth = container.clientWidth;
        const gridWidthHeight = containerWidth/gridSize;
    for( let i=0; i<(gridSize * gridSize); i++ ){
        const grid = document.createElement('div');
        grid.style.height = gridWidthHeight + "px";
        grid.style.width = gridWidthHeight + "px";
        grid.style.border = "1px solid gray";
        grid.style.boxSizing = "border-box";
        container.appendChild(grid);
        
        
    }
}
container.addEventListener("mouseover", function(e){
if(e.target.parentNode !== container)return
if(currentMode === "black"){
    e.target.style.backgroundColor = "black";
}
else if(currentMode ==="rainbow"){
    const r =Math.floor(Math.random() * 256);
     const g =Math.floor(Math.random() * 256);
      const b =Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
}
else if(currentMode === "gray"){
    let currentOpacity = Number(e.target.style.opacity);
    if(!currentOpacity){
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = "0.1";
    }
    else if(currentOpacity < 1){
        e.target.style.opacity = (currentOpacity +0.1).toFixed(1);
    }
}

});
createGrid(16);
const range = document.querySelector('#grid-size');
range.addEventListener("change",function(e){
const currentsize = parseInt( e.target.value);
createGrid(currentsize);
});
range.addEventListener("input",function(e){
const newSize = parseInt( e.target.value);
sizeDisplay.textContent= `${newSize} * ${newSize}`;
});
blackbtn.addEventListener('click',()=>{
     currentMode = "black";
     setActiveButton(blackbtn);
    });

rainbowbtn.addEventListener('click',() =>{
     currentMode = "rainbow";
     setActiveButton(rainbowbtn);
    });
graybtn.addEventListener('click', () =>{
     currentMode = "gray";
     setActiveButton(graybtn);
    });
clear.addEventListener('click',()=>{
    const currentsize = parseInt(range.value);
    createGrid(currentsize);
});
function setActiveButton(activebutton){
    allModeBtn.forEach(btn =>btn.classList.remove('active'));
    activebutton.classList.add('active');
}
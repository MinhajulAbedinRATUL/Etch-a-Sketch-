const gridBox = document.querySelector(".gridBox");
const slider = document.querySelector('#grid-resize');
const gridSize = document.querySelector('.grid-size');
const clear = document.querySelector('.clear-btn');
const normal = document.querySelector('.normal-btn');
const rainbow = document.querySelector('.rainbow-btn');
const eraser = document.querySelector('.eraser-btn');
let gridWidth = 600;
let gridHeight = 600;


function createGrid(gridNum) {
  //clear the existing grid
  gridBox.innerHTML = '';

  //calculate width and height
  let width = gridWidth/gridNum;
  let height = gridHeight/gridNum;

  //create grid items
  for(let i = 0; i < gridNum * gridNum; i++) {
    const grid = document.createElement("div");
    grid.style.width = width + "px" ;
    grid.style.height = height + "px";
    grid.classList.add("grid");
    gridBox.appendChild(grid);
   }

  //add hover effect for grid items
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "#1F2937"
     })
  });
}


//initial setup
let gridNum = Number(slider.value);
gridSize.textContent = `${gridNum}x${gridNum}`;
createGrid(gridNum);

//update grid when slider value changes
slider.addEventListener('input', () => {
  gridNum = Number(slider.value);
  gridSize.textContent = `${gridNum}x${gridNum}`;
  createGrid(gridNum);

})
  
//Clear the whole grid
clear.addEventListener('click', () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
})

//add hover effect for grid items
normal.addEventListener('click', () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "#1F2937"
    })
  });
})



//erase color
eraser.addEventListener('click', () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = "white";
      })
  });
})



function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

//create random color grid
rainbow.addEventListener('click', () => {
  
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      })
  });
})



  
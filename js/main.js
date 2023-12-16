// var clickBtn = document.querySelector(".div")

// function getRandomColor(){
//     clickBtn.style.backgroundColor = getRandomColor();

// }

// clickBtn.addEventListener("click", getRandomColor)

var clickBtn = document.querySelector(".div");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  clickBtn.style.backgroundColor = color;
}

clickBtn.addEventListener("click", getRandomColor);

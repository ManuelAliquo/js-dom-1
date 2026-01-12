const changeImg = document.getElementById("off-lamp-img");
console.log(changeImg);

const actionButton = document.querySelector(".btn");
console.log(actionButton);

actionButton.addEventListener("click", function () {
  changeImg.src = "../img/yellow_lamp.png";
});

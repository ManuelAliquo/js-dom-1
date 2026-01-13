const changeImg = document.getElementById("off-lamp-img");
const actionButton = document.querySelector(".btn");

actionButton.addEventListener("click", function () {
  if (actionButton.innerHTML.includes("Accendi")) {
    changeImg.src = "./img/yellow_Lamp.png";
    changeImg.alt = "On Lamp";
    actionButton.innerHTML = "Spegni";
  } else if (actionButton.innerHTML.includes("Spegni")) {
    changeImg.src = "./img/white_Lamp.png";
    changeImg.alt = "Off Lamp";
    actionButton.innerHTML = "Accendi";
  }
});

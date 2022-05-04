// Тоглогчдын ээлжийг хадгалдаг хувьсагч
var activePlayer = 0;

// Тоглогчдын оноог хадгалах хувьсагч
var playerScore = [0, 0];

// Тоглогчын ээлжийн оноог хадгалах хувьсагч
var currentScore = 0;

// Шооны аль талаараа буусныг шалгах хувьсагч, тэр нь 1-6 гэсэн утгыг санамсаргүйгээр авна.

// Программ эхэлхэд бэлтгэе!
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-0").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоо шидэх товчыг ажилдаг болгох код
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    currentScore = currentScore + diceNumber;

    document.getElementById("current-" + activePlayer).textContent =
      currentScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = 0;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
  }
});

// document.querySelector(".btn-hold").addEventListener("click", function () {
//     if()

// }

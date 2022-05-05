// Тоглогчдын ээлжийг хадгалдаг хувьсагч
var activePlayer = 0;

// Тоглогчдын оноог хадгалах хувьсагч
var playerScore = [0, 0];

// Тоглогчын ээлжийн оноог хадгалах хувьсагч
var currentScore = 0;

//Шоог олон хайхаас сэргийлж хувьсагчид хадгална
var diceDom = document.querySelector(".dice");

// Программ эхэлхэд бэлтгэе!
newGame();

//Тоглоомыг шинээр эхлүүлэх функц
function newGame() {
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  diceDom.style.display = "none";
}

//Шоо шидэх event listener

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 хүртэл тоог рандомоор гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6 + 1);

  // Шоог ил гаргана.
  diceDom.style.display = "block";
  // Гаргаж авсан тоонд харгалзах шооны зургийг харуулна.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Тоглогчийн ээлжийн оноог өөрчлөх нөхцөл
  if (diceNumber !== 1) {
    // Шооны буусан тоог ээлжийн онооны хувьсагчид нэмнэ.
    currentScore = currentScore + diceNumber;
    // Ээлжийн онооны хувьсагч дахь тоог идэвхитэй тоглогчид харуулна
    document.getElementById("current-" + activePlayer).textContent =
      currentScore;
  } else {
    swithPlayers();
  }
});

//hold товчийн домоос олж эвэнт листенер холбоно.
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (currentScore !== 0) {
    // Тухайн тоглочийн ээлжийн оноог идэвхитэй тоглогчийн оноон дээр нэмж дэлгэцэнд харуулна.
    playerScore[activePlayer] = playerScore[activePlayer] + currentScore;

    document.getElementById("score-" + activePlayer).textContent =
      playerScore[activePlayer];

    if (playerScore[activePlayer] > 10) {
      if (activePlayer === 0) {
        alert("1-р тоглогч хожлоо");
        newGame();
      } else {
        alert("2-р тоглогч хожлоо");
        newGame();
      }
    }

    swithPlayers();
  }
});

//hold товчийн домоос олж эвэнт листенер холбоно.
document.querySelector(".btn-new").addEventListener("click", function () {
  newGame();
  alert("Тоглоом шинээр эхэллээ");
});

//Тоглогчийн ээлжийг солих функц
function swithPlayers() {
  // Идэвхитэй тоглогчийн оноог хадгалж байгаа хувьсагчийг 0 болгоно.
  currentScore = 0;

  // Идэвхитэй тоглогчийн дэлгэцэнд харуулж байгаа тоог 0 болгоно.
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Идэвхитэй статусын улаан цэгийн арилгаж, нөгөө тоглогчид нэмнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Ээлж сольсон тул шоог алга болгоно.
  diceDom.style.display = "none";

  // Идэвхитэй тоглогчийн хувьсагчийг сольж өгнө.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}

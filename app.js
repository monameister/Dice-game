var activePlayer;
var playerScore;
var currentScore;
var isNewGame;

//Шоог олон хайхаас сэргийлж хувьсагчид хадгална
var diceDom1 = document.querySelector(".dice1");
var diceDom2 = document.querySelector(".dice2");

// Программ эхэлхэд бэлтгэе!
newGame();

//Тоглоомыг шинээр эхлүүлэх функц
function newGame() {
  isNewGame = true;

  // Тоглогчдын ээлжийг хадгалдаг хувьсагч
  activePlayer = 0;

  // Тоглогчдын оноог хадгалах хувьсагч
  playerScore = [0, 0];

  // Тоглогчын ээлжийн оноог хадгалах хувьсагч
  currentScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom1.style.display = "none";
  diceDom2.style.display = "none";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

//Шоо шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    //1-6 хүртэл тоог рандомоор гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    // Шоог ил гаргана.
    diceDom1.style.display = "block";
    diceDom2.style.display = "block";
    // Рандомоор гаргаж авсан тоонд харгалзах шооны зургийг харуулна.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Тоглогчийн ээлжийн оноог өөрчлөх нөхцөл
    if (diceNumber !== 1) {
      // Шооны буусан тоог ээлжийн онооны хувьсагчид нэмнэ.
      currentScore = currentScore + diceNumber;

      // Ээлжийн онооны хувьсагч дахь тоог идэвхитэй тоглогчид харуулна
      document.getElementById("current-" + activePlayer).textContent =
        currentScore;
    } else {
      // 1 буусан тохиолдолд ээлжийг сольно.
      swithPlayers();
    }
  }
});

//hold товчийн домоос олж эвэнт листенер холбоно.
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Хэрэв тоглогчийн оноо 0 биш үед товчлуур ажиллана.
    if (currentScore !== 0) {
      // Тухайн тоглочийн ээлжийн оноог идэвхитэй тоглогчийн оноон дээр нэмнэ.
      playerScore[activePlayer] = playerScore[activePlayer] + currentScore;

      // Нэмсэн оноог тоглогчийн самбарт харуулна
      document.getElementById("score-" + activePlayer).textContent =
        playerScore[activePlayer];

      // Хэрэв тухайн тоглогчийн оноо 100-с их болсон үед ялагч болно.
      if (playerScore[activePlayer] >= 100) {
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document
          .querySelector(".player-" + activePlayer + "-panel")
          .classList.add("winner");
        isNewGame = false;
      } else {
        swithPlayers();
      }
    }
  }
});

//hold товчийн домоос олж эвэнт листенер холбоно.
document.querySelector(".btn-new").addEventListener("click", newGame);

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

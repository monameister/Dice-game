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
    // 1 буухад идэвхитэй тоглогчийн дэлгэцэнд харуулж байгаа тоог 0 болгоно.
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Идэвхитэй тоглогчийн оноог хадгалж байгаа хувьсагчийг 0 болгоно.
    currentScore = 0;

    // Идэвхитэй статусын улаан цэгийн арилгаж, нөгөө тоглогчид нэмнэ.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // 1 буусан тул шоог алга болгоно.
    diceDom.style.display = "none";

    // Идэвхитэй тоглогчийн ээлжийг сольно.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
});

//hold товчийн домоос олж эвэнт листенер холбоно.
// document.querySelector(".btn-hold").addEventListener("click", function () {
//   //currentScore-ын оноог идэвхитэй тоглогчийн оноон дээр нэмж дэлгэцэнд харуулна. Мөн ээлжийг солино.
//   currentScore = ;
//   //Хэрэв оноо 100 хүрсэн байвал тоглоомын дуусгана.
// });

document
  .querySelector(".btn-new-game")
  .addEventListener("click", function () {});

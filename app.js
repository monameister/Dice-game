// Тоглогчдын ээлжийг хадгалдаг хувьсагч
var activePlayer = 1;

// Тоглогчдын оноог хадгалах хувьсагч
var playerScore = [0, 0];

// Тоглогчын ээлжийн оноог хадгалах хувьсагч
var currentScore = 0;

// Шооны аль талаараа буусныг шалгах хувьсагч, тэр нь 1-6 гэсэн утгыг санамсаргүйгээр авна.
var dice = Math.floor(Math.random() * 6 + 1);

// Программ эхэлхэд бэлтгэе!
document.getElementById("score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log(dice);

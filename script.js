const questions = [
  {
    question: "Apple so‘zining tarjimasi?",
    options: ["Olma", "Banan", "Uzum", "Anor"],
    answer: 0
  },
  {
    question: "Book so‘zining tarjimasi?",
    options: ["Daftar", "Kitob", "Qalam", "Parta"],
    answer: 1
  },
  {
    question: "Sun so‘zining tarjimasi?",
    options: ["Oy", "Yulduz", "Quyosh", "Bulut"],
    answer: 2
  },
  {
    question: "Water so‘zining tarjimasi?",
    options: ["Suv", "Choy", "Sharbat", "Sut"],
    answer: 0
  }// words.js
const wordsA1 = [
  { word: "apple", meaning: "olma" },
  { word: "book", meaning: "kitob" }
  // ...
];function getRandomWord(level) {
  let array;
  switch(level) {
    case "A1": array = wordsA1; break;
    case "A2": array = wordsA2; break;
    case "B1": array = wordsB1; break;
    case "B2": array = wordsB2; break;
    case "C1": array = wordsC1; break;
    default: array = wordsA1;
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Misol
const randomWord = getRandomWord("B2");
console.log(randomWord.word, "-", randomWord.meaning);

function getRandomWord(level) {
  // ... shu funksiya
}
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
  document.getElementById("startBtn").style.display = "none";
  showQuestion();
  startTimer();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("quiz");
  container.innerHTML = 
    <div class="card">
      <h3>${q.question}</h3>
      ${q.options.map((opt, index) => 
        <button onclick="checkAnswer(${index})">${opt}</button><br><br>
      ).join("")}
      <p id="timer">Time: ${timeLeft}s</p>
    </div>
  ;
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    startTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft + "s";
    if (timeLeft <= 0) {
      nextQuestion();
    }
  }, 1000);
}

function endQuiz() {
  document.getElementById("quiz").innerHTML = 
    <div class="card">
      <h2>Quiz Tugadi!</h2>
      <p>Sizning natijangiz: ${score}/${questions.length}</p>
      <button onclick="location.reload()">Qayta boshlash</button>
    </div>
  ;
}

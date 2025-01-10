const quiz = [
  {
    question: "What is the capital city of France?",
    ans1text: "Madrid",
    ans2text: "Paris",
    ans3text: "Rome",
    ans4text: "Berlin",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    ans1text: "Earth",
    ans2text: "Mars",
    ans3text: "Venus",
    ans4text: "Jupiter",
    answer: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    ans1text: "William Shakespeare",
    ans2text: "Charles Dickens",
    ans3text: "Mark Twain",
    ans4text: "Jane Austen",
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    ans1text: "Elephant",
    ans2text: "Blue Whale",
    ans3text: "Giraffe",
    ans4text: "Polar Bear",
    answer: "Blue Whale",
  },
  {
    question: "Which is the smallest prime number?",
    ans1text: "1",
    ans2text: "2",
    ans3text: "3",
    ans4text: "5",
    answer: "2",
  },
];

const question = document.getElementById("quiz-question");

const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll('.answer');

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener('click', () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAns);
  console.log(checkedAns.nextElementSibling.textContent);
  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
      score++;
    }

    checkedAns.check = false;
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    } else {
      alert("Your score is " + score + " out of " + quiz.length);
      location.reload();
    }
  }
});
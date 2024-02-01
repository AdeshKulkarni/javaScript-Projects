const QuizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 0,
  },
  {
    question: "What is the capital of Tamilnadu?",
    options: ["Chennai", "Madurai", "Coimbatore", "Trichy"],
    correct: 1,
  },
  {
    question: "What is the capital of Karnataka?",
    options: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru"],
    correct: 0,
  },
  {
    question: "What is the capital of Kerala?",
    options: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    correct: 3,
  },
  {
    question: "What is the capital of Andhra Pradesh?",
    options: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Tirupati"],
    correct: 2,
  },
];

// store this in local storage

localStorage.setItem('QuizData', JSON.stringify(QuizData));
const quizData = JSON.parse(localStorage.getItem('quizData'));


// console.log(QuizData);
// step2 : - initialization of javascript

const answerElements = document.querySelectorAll(".answer");

const [questionElement, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    ".question, .option_1 , .option_2 , .option_3, .option_4"
  );

const submit_btn = document.querySelector("#btn");

let currentQuiz = 0;
let score = 0;

// step3 = load quiz function

const loadQuiz = () => {
  const { question, options } = QuizData[currentQuiz];
  // console.log(question);

  questionElement.innerHTML = question;

  options.forEach(
    (currOption, index) =>
      (window[`option_${index + 1}`].innerHTML = currOption)
  );
};

loadQuiz();

// step: 4

const diselectedAnswers = () => {
  answerElements.forEach((currAnsElement) => (currAnsElement.checked = false));
};

const getCheckAnswer = () => {
  let answer;

  answerElements.forEach((currAnsElement, index) => {
    if (currAnsElement.checked) {
      answer = index;
    }
  });

  return answer;
};

const submit_rest_quiz = () => {
  if (currentQuiz === QuizData.length - 1) {
    let new_div = document.createElement("div");
 new_div.style.backgroundColor = "green";
 new_div.style.color = "white";
 new_div.style.padding = "10px";
 new_div.style.margin = "10px";
 new_div.style.borderRadius = "10px";
 new_div.style.textAlign = "center";
 new_div.style.fontSize = "30px";
    // new_div.innerHTML = "You have completed the quiz";
    
    let out_off = QuizData.length;
   
    let new_score = (score)+"/"+ (out_off);
 new_div.innerHTML = " Your Score is " + new_score;

    document.body.appendChild(new_div);
    submit_btn.innerHTML = "Finish";

    restartQuiz();
  }
};

function restartQuiz() {
  let newbtn = document.createElement("button");
  newbtn.id = "newbtn";
  newbtn.style.backgroundColor = "green";
  newbtn.style.color = "white";
  newbtn.innerHTML = "Restart Quiz";

  newbtn.style.margin = "10px";
  newbtn.style.borderRadius = "10px";
  newbtn.style.padding = "10px";
  newbtn.style.fontSize = "20px";
  newbtn.style.cursor = "pointer";
  newbtn.style.textAlign = "center";

  document.body.appendChild(newbtn);
  const new_btn = document.getElementById("newbtn");

  new_btn.addEventListener("click", () => {
    window.location.reload();
  });
}

submit_btn.addEventListener("click", () => {
  const SelectedAnswer = getCheckAnswer();
  // console.log(SelectedAnswer);

  if (SelectedAnswer === QuizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < QuizData.length) {
    diselectedAnswers();
    loadQuiz();

    submit_rest_quiz();
  }
});


// let time = document.getElementById("time");
// console.log(time);

// creating button to start the quiz

let start = document.getElementById("btn_start");
// console.log(start);


start.addEventListener("click" , function() {
  let timeLeft = 10 * 60; // 10 minutes in seconds

  const timerDisplay = document.getElementById('time'); // Assuming you have an HTML element with id 'timer'
  
  const timer = setInterval(function() {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
  
      // If the seconds are less than 10, add a leading zero
      if (seconds < 10) {
          seconds = '0' + seconds;
      }
  
      // Display the current timer value
      timerDisplay.textContent = `${minutes}:${seconds}`;
  
      timeLeft--;
  
      // If the timer reaches zero, stop the interval
      if (timeLeft < 0) {
          clearInterval(timer);
      }
  }, 1000); 

   let new_div = document.createElement("h4");
  new_div.style.backgroundColor = "green";
  new_div.style.color = "white";
  new_div.style.padding = "10px";
  new_div.style.margin = "7px";
  new_div.style.borderRadius = "10px";
  new_div.style.textAlign = "center";
  new_div.style.fontSize = "20px";
  new_div.style.cursor = "pointer";
  new_div.style.marginTop = "50px";
  new_div.innerHTML = "You have 10 minutes to complete the quiz";
  document.body.appendChild(new_div);

})




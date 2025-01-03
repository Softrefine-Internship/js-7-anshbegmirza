'use strict';

const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen1 = document.getElementById('screen1');

const questionNumber = document.getElementById('questionNumber');

const questionCategory = document.getElementById('questionCategory');

const questionDifficulty = document.getElementById('questionDifficulty');

const questionType = document.getElementById('questionType');

const startQuizBtn = document.getElementById('startQuizBtn');

const questionText = document.querySelector('.question-text');

const optionsContainer = document.querySelector('.options');

const exitBtn = document.getElementById('exitBtn');
const scoreBtn = document.getElementById('scoreBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');


let currentQuestionIndex = 2;
let questions = [];
let score = 0;


const TIMEOUT_SEC = 10;

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long ! Timeout after ${s} seconds`))
    }, s * 1000);
  });
};

// Function to build the API URL dynamically
const buildApiUrl = () => {
  return `https://opentdb.com/api.php?amount=${questionNumber.value}&category=${questionCategory.value}&difficulty=${questionDifficulty.value}&type=${questionType.value}`;
};

// Function to fetch and handle JSON data
const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    questions = data.results;
    console.log(questions); // Log the fetched data
    return questions;
  } catch (err) {
    console.error(err);
    alert(`Error fetching data: ${err.message}`);
  }
};

const toggleHidden = function (scr1, scr2) {
  scr1.classList.toggle('hidden');
  scr2.classList.toggle('hidden');
}


// Event listener for the Next button
startQuizBtn.addEventListener('click', async function () {
  const apiUrl = buildApiUrl();
  await getJSON(apiUrl);
  toggleHidden(screen1, screen2);
  displayQuestions(2)
});



// getting questions from the result 
const displayQuestions = function (index) {
  if (index >= questions.length) {
    // alert('You have completed the quiz 💥')
    return
  };

  const question = questions[index];
  questionText.textContent = question.question;

  const options = [...question.incorrect_answers, question.correct_answer]
  // console.log(options);
  console.log(question.question);
  console.log(options);

  console.log(question.correct_answer,);

  const shuffledOptions = shuffleArray(options);


  optionsContainer.innerHTML = ""; // clear all the contents
  shuffledOptions.forEach(option => {
    const optionBtn = document.createElement('button');
    optionBtn.textContent = option;
    optionBtn.classList.add('container-btn', 'optionBtn')
    optionsContainer.appendChild(optionBtn);
  });

};








// helper functions
const shuffleArray = function (array) {
  // looping in reverse order
  for (let i = array.length - 1; i > 0; i--) {

    // Generate random index 
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

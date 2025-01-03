// imports

import { TIMEOUT_SEC, BUILD_API_URL } from "./config.js";

import * as model from './model.js';
import { getJSON, timeout, shuffleArray } from "./helper.js"



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



let currentQuestionIndex = 0;
let score = 0;
let questions = [];






// Event listener for the Next button
startQuizBtn.addEventListener('click', async function () {
  const apiUrl = BUILD_API_URL();
  await getJSON(apiUrl);
});



const displayQuestions = function (index) {
  if (index >= questions.length) {
    alert('You have completed the test !!!');
    return;
  };
}

// write javascript here

'use strict';

const questionNumber = document.getElementById('questionNumber');

const questionCategory = document.getElementById('questionCategory');

const questionDifficulty = document.getElementById('questionDifficulty');

const questionType = document.getElementById('questionType');


const nextBtn = document.getElementById('nextBtn');





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

    console.log(data); // Log the fetched data
    return data;
  } catch (err) {
    console.error(err);
    alert(`Error fetching data: ${err.message}`);
  }
};

// Event listener for the Next button
nextBtn.addEventListener('click', async function () {
  const apiUrl = buildApiUrl();
  await getJSON(apiUrl);
});
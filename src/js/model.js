import { async } from 'regenerator-runtime';
import 'core-js/es/object/create';
import * as helper from "./helper.js";


// all the data abt the quiz app

export const state = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  totalQuestions: 0
};


// Function to fetch and handle JSON data
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(config.TIMEOUT_SEC)]);
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

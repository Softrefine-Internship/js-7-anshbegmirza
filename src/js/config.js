// this contains all the variables which we are going to use throughout this project.

// the ones which are responsible for the imp stuff.

// use uppercase for consts

export const TIMEOUT_SEC = 10;

// Function to build the API URL dynamically
export const buildApiUrl = () => {
  const amount = questionNumber.value || 10; // minimum 10 questions
  const category = questionCategory.value || 9; // any category
  const difficulty = questionDifficulty.value || 'medium'; // default level
  const type = questionType.value || 'multiple'; // default type

  return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
};
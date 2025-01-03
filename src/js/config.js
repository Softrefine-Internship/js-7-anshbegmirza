// this contains all the variables which we are going to use throughout this project.

// the ones which are responsible for the imp stuff.

// use uppercase for consts

export const TIMEOUT_SEC = 10;

// Function to build the API URL dynamically
export const BUILD_API_URL = () => {
  return `https://opentdb.com/api.php?amount=${questionNumber.value}&category=${questionCategory.value}&difficulty=${questionDifficulty.value}&type=${questionType.value}`;
};

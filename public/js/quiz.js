
// require('./db/conn');





const quizdata = [
  {
    question: "apple",
    options: ["Apple", "pineapple", "hello", "orange"],
    correct: 0,
  },
  {
    question: "pink",
    options: ["Apple", "pink", "again", "hi"],
    correct: 1,
  },
  {
    question: "again",
    options: ["blue", "again", "yellow", "father"],
    correct: 1,
  },
  {
    question: "mother",
    options: ["father", "cousin", "mother", "orange"],
    correct: 2,
  },
];
//logic of quiz
const quiz = document.querySelectorAll(".quiz_section");
const answerelm = document.querySelectorAll(".answer");
const [questionelm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll("#question,.option_1,option_2,option_3,option_4");
const submitbtn = document.querySelector(".btn1");
let currquiz = 0;
let score = 0;
// export{score};
const loadquiz = () => {
  const { question, options } = quizdata[currquiz];
  console.log(options);
  document.getElementById("box").innerHTML =
    "<img src='images/" + question + ".png'>";

  options.forEach(
    (curroption, index) =>
      (window[`option_${index + 1}`].innerHTML = curroption)
  );
};
loadquiz();

//submit button
const get = () => {
  let selectedindex;
  answerelm.forEach((curroptio, index) => {
    if (curroptio.checked) {
      selectedindex = index;
    }
  });
  return selectedindex;
};

const deselected = () => {
  answerelm.forEach((curropti) => (curropti.checked = false));
};
submitbtn.addEventListener("click", () => {
  const selectedoption = get();
  console.log(selectedoption);
  if (selectedoption == quizdata[currquiz].correct) {
    score += 1;
  }
  currquiz++;
  if (currquiz < quizdata.length) {
    deselected();
    loadquiz();
  } else {
    document.getElementById("hg").innerHTML = 
      `<div class="result">
        <h2>
          Your Score: ${score}/${quizdata.length} Correct Answers
        </h2>

        <p>Congratulations on completing the quiz! </p>

        
      </div>`;
    
  }

  console.log(score);

});

 





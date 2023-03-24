
const quizData = [
  {
    question: "What is my middle name?",
    a: "Samuel",
    b: "Jordan",
    c: "Michael",
    d: "Lee",
    correct: "a"
  },

  {
    question: "Out of the 4, what genre of music do I listen to the least",
    a: "Drum n Bass",
    b: "House",
    c: "Jazz",
    d: "Hip-Hop",
    correct: "c"
  },

  {
    question: "These are all my favorite foods except:",
    a: "Sushi",
    b: "Meatloaf",
    c: "Wings with Blue Cheese",
    d: "Chicken Parmesain",
    correct: "b"
  },

  {
    question: "My favorite snack is what?",
    a: "Popcorn",
    b: "Ramen",
    c: "Chips n Salsa",
    d: "M&M's",
    correct: "c"
  },

  {
    question: "My favorite video game genre is what?",
    a: "First Person Shooter Games",
    b: "Racing",
    c: "Role Playing",
    d: "Simulation",
    correct: "b"
  },

  {
    question: "My favorite pizza topping combo?",
    a: "Olives, Chicken, Pineapple",
    b: "Spinach and Mushroom,",
    c: "Pepperoni and Chicken",
    d: "Bacon and Sausage",
    correct: "a"
  },

  {
    question: "What is my favorite fruit?",
    a: "Grapes",
    b: "Pineapple",
    c: "Blueberry",
    d: "Watermelons",
    correct: "d"
  },

  {
    question: "In high school I played what two sports?",
    a: "Basketball and Soccer",
    b: "Soccer and Track",
    c: "Basketball and Track",
    d: "Basketball and Tennis",
    correct: "b"
  },

  {
    question: "Favorite color?",
    a: "Salmon",
    b: "Yellow",
    c: "Indigo",
    d: "Turquoise",
    correct: "a"

  },

  {
    question: "My Favorite soda (careful on this one its tricky)",
    a: "Sprite",
    b: "Ginger Ale",
    c: "Vanilla Coke",
    d: "Cherry Pepsi",
    correct: "c"

  },

  {
    question: "Favorite fast food restaurant",
    a: "McDonalds",
    b: "Chic Fil A",
    c: "Popeyes",
    d: "Taco Bell",
    correct: "c"

  },

  {
    question: "What is my favorite month?",
    a: "October",
    b: "December",
    c: "July",
    d: "May",
    correct: "a"

  },

  {
    question: "I have a fear of what?",
    a: "Closed spaces",
    b: "Snakes",
    c: "Heights",
    d: "The ocean",
    correct: "c"

  },

  {
    question: "Out of these singers, who is my favorite",
    a: "SIA",
    b: "Bjork",
    c: "Sade",
    d: "Whitney Houston",
    correct: "b"

  },

  {
    question: "If I were a journalist, I would write about what?",
    a: "Celebrity gossip",
    b: "Consumer technology",
    c: "Travel & Food",
    d: "Politics",
    correct: "b"

  },

]

let questionNum = 1
let grade = 0
let answer = ""

const questionDiv = document.querySelector('#question')
const answerADiv = document.querySelector('#a')
const answerBDiv = document.querySelector('#b')
const answerCDiv = document.querySelector('#c')
const answerDDiv = document.querySelector('#d')
const nextBtn = document.querySelector('#btn')

let score = document.getElementById('questionDiv')
let question = document.getElementById('question')
let questionUpdate = document.createElement('p')
let questionStatus = document.createElement('p')


let answerA = document.getElementById('a')
let answerB = document.getElementById('b')
let answerC = document.getElementById('c')
let answerD = document.getElementById('d')

let answerAText = document.createElement('p')
let answerBText = document.createElement('p')
let answerCText = document.createElement('p')
let answerDText = document.createElement('p')


const questionOne = () => {
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[0].question)

  answerAText.innerText = (quizData[0].a)
  answerBText.innerText = (quizData[0].b)
  answerCText.innerText = (quizData[0].c)
  answerDText.innerText = (quizData[0].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)

  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)



  
  

}

const questionTwo = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[1].question)

  answerAText.innerText = (quizData[1].a)
  answerBText.innerText = (quizData[1].b)
  answerCText.innerText = (quizData[1].c)
  answerDText.innerText = (quizData[1].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)


}

const questionThree = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')

  questionUpdate.innerText = (quizData[2].question)

  answerAText.innerText = (quizData[2].a)
  answerBText.innerText = (quizData[2].b)
  answerCText.innerText = (quizData[2].c)
  answerDText.innerText = (quizData[2].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFour = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[3].question)

  answerAText.innerText = (quizData[3].a)
  answerBText.innerText = (quizData[3].b)
  answerCText.innerText = (quizData[3].c)
  answerDText.innerText = (quizData[3].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFive = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[4].question)

  answerAText.innerText = (quizData[4].a)
  answerBText.innerText = (quizData[4].b)
  answerCText.innerText = (quizData[4].c)
  answerDText.innerText = (quizData[4].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionSix = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[5].question)

  answerAText.innerText = (quizData[5].a)
  answerBText.innerText = (quizData[5].b)
  answerCText.innerText = (quizData[5].c)
  answerDText.innerText = (quizData[5].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionSeven = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[6].question)

  answerAText.innerText = (quizData[6].a)
  answerBText.innerText = (quizData[6].b)
  answerCText.innerText = (quizData[6].c)
  answerDText.innerText = (quizData[6].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionEight = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[7].question)

  answerAText.innerText = (quizData[7].a)
  answerBText.innerText = (quizData[7].b)
  answerCText.innerText = (quizData[7].c)
  answerDText.innerText = (quizData[7].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionNine = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[8].question)

  answerAText.innerText = (quizData[8].a)
  answerBText.innerText = (quizData[8].b)
  answerCText.innerText = (quizData[8].c)
  answerDText.innerText = (quizData[8].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionTen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[9].question)

  answerAText.innerText = (quizData[9].a)
  answerBText.innerText = (quizData[9].b)
  answerCText.innerText = (quizData[9].c)
  answerDText.innerText = (quizData[9].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionEleven = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[10].question)

  answerAText.innerText = (quizData[10].a)
  answerBText.innerText = (quizData[10].b)
  answerCText.innerText = (quizData[10].c)
  answerDText.innerText = (quizData[10].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionTwelve = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[11].question)

  answerAText.innerText = (quizData[11].a)
  answerBText.innerText = (quizData[11].b)
  answerCText.innerText = (quizData[11].c)
  answerDText.innerText = (quizData[11].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionThirteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[12].question)

  answerAText.innerText = (quizData[12].a)
  answerBText.innerText = (quizData[12].b)
  answerCText.innerText = (quizData[12].c)
  answerDText.innerText = (quizData[12].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFourteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[13].question)

  answerAText.innerText = (quizData[13].a)
  answerBText.innerText = (quizData[13].b)
  answerCText.innerText = (quizData[13].c)
  answerDText.innerText = (quizData[13].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFifteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[14].question)

  answerAText.innerText = (quizData[14].a)
  answerBText.innerText = (quizData[14].b)
  answerCText.innerText = (quizData[14].c)
  answerDText.innerText = (quizData[14].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

//highlight answer Divs on click

//A
selectedAnswerA = () => {
  answerADiv.style.backgroundColor = "rgb(145, 252, 136)";
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "white"
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "white"
  answerCDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "white"
  answerDDiv.style.borderRadius = "20px"

}

answerClickA = () => {
  setTimeout(selectedAnswerA, 100);
}

answerADiv.addEventListener('click', () => {
  answerClickA()
})

//B
selectedAnswerB = () => {
  answerBDiv.style.backgroundColor = "rgb(145, 252, 136)";
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "white";
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "white"
  answerADiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "white"
  answerDDiv.style.borderRadius = "20px"
}

answerClickB = () => {
  setTimeout(selectedAnswerB, 100);
}

answerBDiv.addEventListener('click', () => {
  answerClickB()
})

//C
selectedAnswerC = () => {
  answerCDiv.style.backgroundColor = "rgb(145, 252, 136)";
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "white"
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "white"
  answerBDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "white"
  answerDDiv.style.borderRadius = "20px"
}

answerClickC = () => {
  setTimeout(selectedAnswerC, 100);
}

answerCDiv.addEventListener('click', () => {
  answerClickC()
})

//D
selectedAnswerD = () => {
  answerDDiv.style.backgroundColor = "rgb(145, 252, 136)";
  answerDDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "white"
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "white"
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "white"
  answerBDiv.style.borderRadius = "20px"
  
}

answerClickD = () => {
  setTimeout(selectedAnswerD, 100);
}

answerDDiv.addEventListener('click', () => {
  answerClickD()
})


//Remove answer div highlight
resetAnswerDiv = () => {
  answerADiv.style.backgroundColor = "white";
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "white"
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "white"
  answerCDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "white"
  answerDDiv.style.borderRadius = "20px"

}



//Next question button
nextBtn.addEventListener('click', () => {
  if (questionNum === 1) {
    if (answerADiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }
    resetAnswerDiv()
    questionTwo()
  }

  else if (questionNum === 2) {
    if (answerCDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionThree()
  }

  else if (questionNum === 3) {
    if (answerBDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionFour()
  }
  else if (questionNum === 4) {
    if (answerCDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionFive()
  }
  else if (questionNum === 5) {
    if (answerBDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionSix()
  }
  else if (questionNum === 6) {
    if (answerADiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionSeven()
  }
  else if (questionNum === 7) {
    if (answerDDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionEight()
  }
  else if (questionNum === 8) {
    if (answerBDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv() 
    questionNine()
  }
  else if (questionNum === 9) {
    if (answerADiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionTen()
  }
  else if (questionNum === 10) {
    if (answerCDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionEleven()
    
  }

  else if (questionNum === 11) {
    if (answerCDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionTwelve()
  }

  else if (questionNum === 12) {
    if (answerADiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionThirteen()
  }

  else if (questionNum === 13) {
    if (answerCDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionFourteen()
  }
  else if (questionNum === 14) {
    document.getElementById("btn").innerHTML=
    "Finish";
    if (answerBDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    questionFifteen()
  }
  else if (questionNum === 15) {
    if (answerBDiv.style.backgroundColor === "rgb(145, 252, 136)"){
      grade++
  }  
    resetAnswerDiv()
    finishQuiz()
  }


}) 


//Shows final score of quiz
const finishQuiz = () => {
  answerADiv.remove()
  answerBDiv.remove()
  answerCDiv.remove()
  answerDDiv.remove()

  questionUpdate.innerText = ("Your score:" + grade + "/15" + "Correct Answers" + "\n" +
  "1: Samuel" + "\n" + 
  "2: Jazz" + "\n" + 
  "3: Meatloaf" + "\n" + 
  "4: Chips and Salsa" + "\n" + 
  "5: Racing Games" + "\n" + 
  "6: Olives, Chicken, and Pineapple" + "\n" + 
  "7: Watermelon" + "\n" + 
  "8: Soccer and Track" + "\n" + 
  "9: Salmon" + "\n" + 
  "10: Vanilla Coke" + "\n" +
  "11: Popeyes" + "\n" + 
  "12: October" + "\n" + 
  "13: Heights" + "\n" +  
  "14: Bjork" + "\n" + 
  "15: Consumer Tech" + "\n" )
  question.appendChild(questionUpdate)

}

questionOne()




/*const quiz = () => {
let questionBox = document.getElementById('question');

let insertQuestion = document.createElement('p')

//populate quiz with 3 questions from quizData array
let questions = []
  do {
      let picker = quizData[Math.floor(Math.random() * quizData.length)];
        if (questions.includes(picker)){
          continue;
        }
        else {
          questions.push(picker);
        }
    } while (questions.length < 3);
}

questionPick = (questions[0].question);

console.log(questionPick)*/
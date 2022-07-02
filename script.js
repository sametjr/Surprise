const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const container = document.getElementsByClassName('container');
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  if(currentQuestionIndex >= 3){
    console.log("Helloo??")
    // let newDiv = document.createElement("div");
    // let content = document.createComment("Selam");

    // newDiv.appendChild(content);

    clearStatusClass(document.body)
  }
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Beni seviyor musun?',
    answers: [
      { text: 'Hem de deliler gibii', correct: true },
      { text: 'Evet', correct: false }
    ]
  },
  {
    question: 'İlk öpüştüğümüz yer?',
    answers: [
      { text: 'Gölbaşı parkı çimleri', correct: true },
      { text: 'Kampüs', correct: false },
      { text: 'Kızılay', correct: false },
      { text: 'Ev', correct: false }
    ]
  },
  {
    question: 'Güzelliğine ölebilir miyim?',
    answers: [
      { text: 'Hayır', correct: false },
      { text: 'Evet', correct: true },
      { text: 'Öllll', correct: true },
      { text: 'Ayrı ölmek yok', correct: true }
    ]
  },
  {
    question: 'https://www.youtube.com/watch?v=EdtYzzqSxZ0',
    answers: [
    //   { text: '6', correct: false },
    //   { text: '8', correct: true }
    ]
  }
]
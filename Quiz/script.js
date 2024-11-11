const questionBank = [
    { question: "What is the first book of the Bible?", answers: ["Genesis", "Exodus", "Leviticus", "Numbers"], correct: "Genesis" },
    { question: "Who built the ark?", answers: ["Moses", "Noah", "Abraham", "David"], correct: "Noah" },
    { question: "Who was swallowed by a great fish?", answers: ["Jonah", "Moses", "Elijah", "Noah"], correct: "Jonah" },
    { question: "Where was Jesus born?", answers: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"], correct: "Bethlehem" },
    { question: "How many days did God take to create the world?", answers: ["7", "6", "5", "8"], correct: "6" },
    // Add more questions as needed...
];

let selectedQuestions = [];
let currentPage = 0;
const questionsPerPage = 5;
const totalQuestions = 20;
const totalPages = Math.ceil(totalQuestions / questionsPerPage);

// Function to shuffle and pick 20 random questions
function getRandomQuestions() {
    selectedQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
}

// Function to display the questions in the HTML
function loadQuiz(page) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear previous questions

    const start = page * questionsPerPage;
    const end = start + questionsPerPage;
    const questionsToDisplay = selectedQuestions.slice(start, end);

    questionsToDisplay.forEach((q, index) => {
        const questionElem = document.createElement('div');
        questionElem.classList.add('question');
        questionElem.innerHTML = `
            <h3>Question ${start + index + 1}: ${q.question}</h3>
            ${q.answers.map(answer => `
                <label>
                    <input type="radio" name="question${start + index}" value="${answer}">
                    ${answer}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElem);
    });

    updatePaginationControls();
}

// Function to update pagination controls (Next/Previous buttons)
function updatePaginationControls() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;
    submitBtn.style.display = currentPage === totalPages - 1 ? 'block' : 'none';
}

// Function to check answers and show the result
function checkAnswers() {
    let score = 0;
    const results = [];

    selectedQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === q.correct) {
                score++;
            } else {
                results.push(`Question ${index + 1}: Correct answer is "${q.correct}"`);
            }
        } else {
            results.push(`Question ${index + 1}: You didn't select an answer. Correct answer is "${q.correct}"`);
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>You scored ${score} out of ${totalQuestions}</p>`;
    results.forEach(result => {
        const resultElem = document.createElement('p');
        resultElem.textContent = result;
        resultContainer.appendChild(resultElem);
    });
}

// Event listeners for pagination buttons
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        loadQuiz(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        loadQuiz(currentPage);
    }
});

// Event listener for the submit button
document.getElementById('submit-btn').addEventListener('click', checkAnswers);

// Initial load
getRandomQuestions();
loadQuiz(currentPage);

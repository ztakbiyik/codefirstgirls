

const questions = [
    {
        question: "Choose a color ?",
        optionA: "red",
        optionB: "yellow",
        optionC: "purple",
        optionD: "blue",
        correctOption: "optionD"
    },

    {
        question: "Choose one of these songs",
        optionA: "Im not Okay by MCR",
        optionB: "Pied Piper by BTS",
        optionC: "Katy Perry California Girls",
        optionD: "Doja Cat Need to know",
        correctOption: "optionB"
    },

    {
        question: "Pick a film",
        optionA: "Perks of Being a Wallflower",
        optionB: "Evil Dead",
        optionC: "Avengers Infinity War",
        optionD: "After",
        correctOption: "optionD"
    },

    {
        question: "What do you do in your freetime",
        optionA: "Reading books",
        optionB: "Listening music",
        optionC: "Play Video Games",
        optionD: "Paint",
        correctOption: "optionC"
    },

    {
        question: "Choose a saying",
        optionA: "Every cloud has a silver lining",
        optionB: "Don't put all your eggs in one basket",
        optionC: "Snakes and stones may break my bones",
        optionD: "what goes comes back around",
        correctOption: "optionD"
    },

    {
        question: "Soldier Poet King Dragon?",
        optionA: "Soldier",
        optionB: "Poet",
        optionC: "King",
        optionD: "Dragon",
        correctOption: "optionA"
    },

    {
        question: "Any Bewareges besides a monster",
        optionA: "Tea",
        optionB: "Coffee",
        optionC: "Water",
        optionD: "Orange Juice",
        correctOption: "optionC"
    },

    {
        question: "Choose a snack with it",
        optionA: "Walkers",
        optionB: "Nick Nacks",
        optionC: "Snickers",
        optionD: "Skittles",
        correctOption: "optionA"
    },

    {
        question: "Choose a book",
        optionA: "Iliad",
        optionB: "No Longer Human",
        optionC: "Momo",
        optionD: "Fahrenit",
        correctOption: "optionD"
    },

    {
        question: `"Choose a constellation cause why not"`,
        optionA: "Ursa Major",
        optionB: "Ursa Minor",
        optionC: "Taurus",
        optionD: "Orion",
        correctOption: "optionD"
    }

]


let questionArray = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to questionArray array
    while (questionArray.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!questionArray.includes(random)) {
            questionArray.push(random)
        }
    }
}


let questionNumber = 1
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = questionArray[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = questionArray[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    wrongAttempt = 0
    indexNumber = 0
    questionArray = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

$(function(){
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function(){
        let i, stop;
        i = 1;
        stop = 4; //num elements
        setInterval(function(){
            if (i > stop){
                return;
            }
            $('#len'+(i++)).toggleClass('bounce');
        }, 500)
    });
});
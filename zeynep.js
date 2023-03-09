

const questions = [
    {
        question: "How many albums does Taylor Swift have (excluding re-recordings)?",
        optionA: "10",
        optionB: "12",
        optionC: "7",
        optionD: "15",
        correctOption: "optionA"
    },

    {
        question: "What is Taylor Swift's middle name?",
        optionA: "Andrea",
        optionB: "Allie",
        optionC: "Alison",
        optionD: "Augustine",
        correctOption: "optionC"
    },

    {
        question: "When is Taylor Swift's birthday?",
        optionA: "February 14th",
        optionB: "January 12th",
        optionC: "November 14th",
        optionD: "December 13th",
        correctOption: "optionD"
    },

    {
        question: "What is the name of the last cat Taylor Swift adopted?",
        optionA: "Peter Parker",
        optionB: "Olivia Benson",
        optionC: "Benjamin Button",
        optionD: "Tyler Durden",
        correctOption: "optionC"
    },

    {
        question: "Where was Taylor Swift born?",
        optionA: "Albany, NY",
        optionB: "Memphis, TN",
        optionC: "Nashville, TN",
        optionD: "Reading, PA",
        correctOption: "optionD"
    },

    {
        question: "What is Taylor Swift's latest album called?",
        optionA: "Midnights",
        optionB: "Lavender Haze",
        optionC: "Red",
        optionD: "Folklore",
        correctOption: "optionA"
    },

    {
        question: "Complete the quote 'No it's ____?'",
        optionA: "Me",
        optionB: "Taylor",
        optionC: "Becky",
        optionD: "You",
        correctOption: "optionC"
    },

    {
        question: "What is Taylor Swift's latest world tour called?",
        optionA: "The Eras Tour",
        optionB: "Midnights Mayhem",
        optionC: "The Lover Fest",
        optionD: "World Tour Taylor's Version",
        correctOption: "optionA"
    },

    {
        question: "How many cats does Taylor Swift currently have?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionB"
    },

    {
        question: "Taylor Swift's brother's name is...",
        optionA: "Joe",
        optionB: "Tom",
        optionC: "Scott",
        optionD: "Austin",
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
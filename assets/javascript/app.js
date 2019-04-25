var counter = 0;

var questionsObj = [
    {question:"On average, how many different parts does a standard car have?", answer:"d"},
    {question:"During a car accident, how fast do airbags inflate?",answer:"b"},
    {question:"What was the first automobile with an internal combustion engine?",answer:"a"},
    {question:"How many cars are produced worldwide every year?",answer:"b"},
    {question:"What percentage of of electric/hybrid vehicles are sold in Norway each year?",answer:"a"},
    
]

var answersObj = [
    {choiceA:"850", choiceB:"5,000", choiceC:"1,500", choiceD:"30,000"},
    {choiceA:"1 Second", choiceB:"30 Milliseconds", choiceC:"5 Seconds", choiceD:"100 Milliseconds"},
    {choiceA:"Benz Motorwagon", choiceB:"Ford Model T", choiceC:"Studebaker Flanders 20", choiceD:"Maybach Stahlradwagen"},
    {choiceA:"410,000", choiceB:"165,000", choiceC:"55,000", choiceD:"1 Million"},
    {choiceA:"50%", choiceB:"10%", choiceC:"75%", choiceD:"30%"}
]

function populateQuestions(){
    $("#question").text(questionsObj[counter].question);
    $("#answerA").text(answersObj[counter].choiceA);
    $("#answerB").text(answersObj[counter].choiceB);
    $("#answerC").text(answersObj[counter].choiceC);
    $("#answerD").text(answersObj[counter].choiceD);
    
}

$(document).ready(function() {

    for(i=0; i <questionsObj.length; i++){
        if (i == counter){
            populateQuestions();
            $("#submitBtn").on("click", function(){
                counter++;
                console.log(counter);
                populateQuestions();
            })            
        }
    }
    
})

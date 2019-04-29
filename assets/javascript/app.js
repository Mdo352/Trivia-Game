$(document).ready(function() {

  var counter = 0;
  var correctAnswer = 0;
  var userChoice;
  // var number = 10;
  var intervalId;
  var numberOfQuestions = 5;
  var questionsLeft = true;


  var questionsObj = [
      {question:"On average, how many different parts does a standard car have?", answer:"d"},
      {question:"During a car accident, how fast do airbags inflate?",answer:"b"},
      {question:"What was the first automobile with an internal combustion engine?",answer:"a"},
      {question:"How many cars are produced worldwide every year?",answer:"b"},
      {question:"What percentage of of electric/hybrid vehicles are sold in Norway each year?",answer:"a"},
      // {question:"You got "+numberOfQuestions+" out of "+5+" ,answers correct", answer:""},
      
  ]

  var answersObj = [
    {choiceA:"850", choiceB:"5,000", choiceC:"1,500", choiceD:"30,000"},
    {choiceA:"1 Second", choiceB:"30 Milliseconds", choiceC:"5 Seconds", choiceD:"100 Milliseconds"},
    {choiceA:"Benz Motorwagon", choiceB:"Ford Model T", choiceC:"Studebaker Flanders 20", choiceD:"Maybach Stahlradwagen"},
    {choiceA:"410,000", choiceB:"165,000", choiceC:"55,000", choiceD:"1 Million"},
    {choiceA:"50%", choiceB:"10%", choiceC:"75%", choiceD:"30%"},
    // {choiceA:"", choiceB:"", choiceC:"", choiceD:""}
  ]
  
  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
    
  }

  function clearText(){
    $("#target").empty();
    $("#question").empty();
  }

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement(){
    number--;
    $("#timer").text(number);

    if (number === 0) {
      stop();
      $('#submitBtn').trigger('click');
    }
  }

  function stop() {
    clearInterval(intervalId);
  }
  
  function populateQuestions(){
    if (questionsLeft == true){
      var radioAnswerA = $("<p id='answerA'><input type='radio' name='q-"+counter+"' value=a>a. "+answersObj[counter].choiceA+"</p>")
      var radioAnswerB = $("<p id='answerB'><input type='radio' name='q-"+counter+"' value=b>b. "+answersObj[counter].choiceB+"</p>")
      var radioAnswerC = $("<p id='answerC'><input type='radio' name='q-"+counter+"' value=c>c. "+answersObj[counter].choiceC+"</p>")
      var radioAnswerD = $("<p id='answerD'><input type='radio' name='q-"+counter+"' value=d>d. "+answersObj[counter].choiceD+"</p>")
      var questionCycle = $("<p>"+questionsObj[counter].question+"</p>")
      
      $("#question").text(questionsObj[counter].question);
      
      radioAnswerA.appendTo("#target");
      radioAnswerB.appendTo("#target");
      radioAnswerC.appendTo("#target");
      radioAnswerD.appendTo("#target");
      console.log('question # '+counter)
      
      number = 15;
    }
  }
  
  function lastQuestion(){
    if(counter == questionsObj.length-1){
      var element = document.getElementById("submitBtn");
      element.parentNode.removeChild(element);
      // alert(correctAnswer+"/"+questionsObj.length);
      $("#question").append("final score will go here");
      console.log(correctAnswer)
    }
  }
  
  
    
    for(i=0; i < questionsObj.length; i++){
      if(questionsLeft == true){
        if (i == counter){
            populateQuestions();
            run();
            $("#submitBtn").on("click", function(){
                userChoice = $("input[name='q-"+counter+"']:checked").val();
                console.log(userChoice);
                if(userChoice==questionsObj[counter].answer){
                  console.log('correct');
                  correctAnswer++;
                  lastQuestion();
                }else{
                  console.log("wrong");
                  lastQuestion();
                }
                clearText();
                counter++;
                if(counter >= questionsObj.length){
                  questionsLeft = false;
                }
                populateQuestions();
                run();
                if (questionsLeft == false){
                  var finalScore = correctAnswer/questionsObj.length;
                  $("#question").text("You got "+correctAnswer+" questions correct");
                  $("#target").text(finalScore * 100 + '%');
                }           
            })
        }

      }else{
      }
      
    }
    
})
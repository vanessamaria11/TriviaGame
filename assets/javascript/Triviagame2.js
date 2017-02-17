//PseudoCode:
//Load start button when you get to the page, hiding all elements on the page
//When the start button is clicked, reveal questions and choices with prospective buttons
//and start timer
//when timer is finished, save user clicked answers and calculate the incorrect and correct answers
//assign classes to the wrong answers, and id to the right ones. 

var question1Answer;
var question2Answer;
var incorrect;
var timer=120;
var countdown;
var points=0;
var rightChoice=1;

window.onload = function() {

$("#submit").hide();
$(".question1choices").hide();
$(".question2choices").hide();
// $("#start").click(game.start)
$("#display").hide();
$("#score").hide();
};
// var game =
// {

	$("#start").on('click', function()
	{
	$("#question1-holder").html("Which of the following is not part of the five boroughs of New York City?");
	$("#question1-choiceA").html("Manhattan");
	$("#question1-choiceB").html("The Bronx");
	$("#question1-choiceC").html("Queens");
	$("#question1-choiceD").html("Staten Island");
	$("#question1-choiceE").html("Long Island");
	$("#question2-holder").html("In what state is the Statue of Liberty located?");
	$("#question2-choiceA").html("Connecticut");
	$("#question2-choiceB").html("New Jersey");
	$("#question2-choiceC").html("New York");
	$("#question2-choiceD").html("New Hampshire");
	$(".question1choices").show();
	$(".question2choices").show();
	$("#display").show();
	stopwatch();
	countdown = setInterval(stopwatch, 1000);
	$("#start").hide();
	$("#score").hide();
	$("#submit").show();
	});

var stopwatch = function()
{
	timer--;
	
	$("#display").html(timer);

	stop();
};


var stop = function()
	{
		if (timer===0){
			clearInterval(countdown);
			alert("Times Up!");
			$("#display").hide();
		}
		
	};


var correctclick = function()
	{
		$("#correct1").on('click');
		changepoints();
	};

var changepoints = function()
{
	return ++points;
};

// var combinethetwo = function()
// {

// }

$("#submit").on('click', function()
	{
	// $("#question1-holder").hide;
	$("#showtime").hide();
	$("#score").show();
	$("#score").html(changepoints);
	$("#submit").hide();
	});


	// 	if ($("#correct1").on('click')){
	// 	points++;
	// 	$("#score").html(points)
	// // }
	// };

// var points = function()
// 	{

// 	}

//stop();

	
// var stopwatch = {
// 	time: 0,

// reset: function(){
// 	stopwatch.time = 0;
// 	$
// }
// 	start: function(){
// 		t=setInterval(
// 			function()
// 				{stopwatch.time=stopwatch.time+1;
// 				}, 1000
// 			);
// 	}
// };
// var countdown;

// var question1choices= ["Manhattan", "the Bronx", "Queens", "Staten Island", "Long Island"];
	// time: 0,
	// Counting: function(){
	// showtime++;
	// $("#showtime").html(stopwatch.start);

	// },
// $(".btn btn-default").click(correctIncorrect.right){

// };

// 	var correctIncorrect=
// 	{
// 	right: function()
// 	{

// 	}
// 	}

// 	}
	

// 	}



	// <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

	// document.getElementById("question1-choiceD").onclick=function(correct)
	// 	var markCorrect=0;
	// 	question1Answer="Staten Island";
	// 	question2Answer="New Jersey";
	// 	document.getElementById("question1-choiceD").onclick = function(correct){
	// 		if (correct){
	// 			markCorrect++
	// 		}
	// 	} 

// {
	// 	// var question1choices=["Manhattan","the Bronx", "Queens", "Staten Island", "Long Island"],	
	// 	var correct1;
	// 	var correct2;
	// 	var userClick=[];

	// 	correctchoice1=question1choices[4];
	// 	$()
// <div id="QuestionAnswerHolder">
// 	<div id="question1">Which of the following is not part of the five boroughs of New York City?
// 		<div id="choices1">
// 			<div class="row">
// 			<span class="input-group-btn">
//         		<button class="btn btn-default" type="button">Manhattan</button>
//         		<button class="btn btn-default" type="button">The Bronx</button>
//         		<button class="btn btn-default" type="button">Queens</button>
//         		<button class="btn btn-default" type="button">Staten Island</button>
//         		<button class="btn btn-default" type="button">Long Island</button>
//       		</span>
// 			</div>
// 		</div>
// 		</div>
// 	<div id="question2"></div>
// 		<div id="choices2"></div>
// 	<div id="question3"></div>
// 		<div id="choices3"></div>
// 	<div id="question4"></div>
// 		<div id="choices4"></div>
// 	<div id="question5"></div>
// 		<div id="choices5"></div>
// </div>


// var questions=
// {
// 	Question1: 
// 	{
// 		question:["Which of the following is not part of the five boroughs of New York City?"],
// 		choices: ["Manhattan","the Bronx", "Queens", "Staten Island", "Long Island"],
// 	},

// };

// function showQuestions()
// {
// question-holder.innerhtml = questions;
// }

// showQuestions();

// // $()
// // 		var answer1=questions.Question1.choices[4]
// 	// {
// 	// question: "In what state is the Statue of Liberty located?",
// 	// choices: "Connecticut", "New Jersey", "New York", "New Hampshire",
// 	// answer: "New Jersey"
// 	// },

// 	// {
// 	// question:"Atlantic City has the longest boardwalk in the world."
// 	// choices: "True", "False",
// 	// answer: "True"
// 	// },
// // ];
// // };


// document.getElementById("showquestions").on("click",function()
// 	{
// 	var questions=
// 	{
// 	Question1: 
// 	{
// 		question:["Which of the following is not part of the five boroughs of New York City?"],
// 		choices: ["Manhattan","the Bronx", "Queens", "Staten Island", "Long Island"],
// 	},
// 	};
// 	}
// 	innerhtml= questions;


// function questionTimer()
// {
// $("#QuestionAnswerHolder").html("")
// };

// function onClick()
// {

// };

// function revealQuestions()
// {
// 	showQuestions=setInterval(function, 120)
// };




	// {
	// question:
	// choices:
	// answer:
	// },

	// {
	// question:
	// choices:
	// answer:
	// },
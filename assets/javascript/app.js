$("#submit").hide();
$("#restart").hide();
var tallycorrect=0;
var tallyincorrect=0;
var timer=120;
var countdown;
$("#qc").hide();
$("#qw").hide();
//clue: function to create circuit timers or "smart interval timers"
function createCircuitTimer(timeInterval){
	return {
		time: timeInterval
		, interval: null
		, rotation: 0
		, running: false
		, start: function(callMe){
			//clue: remember the booleans!!!
			if(this.running !== true){
				this.interval = setInterval(callMe, this.time);
				this.running = true;
			}
		}
		, stop: function(){
			//clue: remember the booleans!!!
			if(this.running === true){
				clearInterval(this.interval);
				this.running = false;
			}
		}
	};
};


var circuitTimer=createCircuitTimer(1000);

var trivia=[
{
	question: "Which of the following is not part of the five boroughs of New York City?"
	,choices:["Manhattan", "The Bronx","Queens","Staten Island", "Long Island"]
	,correctanswer:4
	,chosenanswer:-1
},
{
	question: "In what state is the Statue of Liberty located?"
	,choices:["Connecticut", "New Jersey","New York","New Hampshire"]
	,correctanswer:1
	,chosenanswer:-1
},
{
	question: "Which of the following artists is a New Jersey native?"
	,choices:["Beyonce", "Dolly Parton","Rick James","Bruce Springsteen"]
	,correctanswer:3
	,chosenanswer:-1
},
{
	question: "True or False? Atlantic City has the longest boardwalk in the entire world"
	,choices:["True", "False"]
	,correctanswer:0
	,chosenanswer:-1
},
{
	question: "New Jersey has the most _____ in the world."
	,choices:["boardwalks", "pizza parlors","diners","counties"]
	,correctanswer:2
	,chosenanswer:-1
},
{
	question: "Thanks to this state salt water taffy:"
	,choices:["California", "Delaware","New Jersey","North Carolina"]
	,correctanswer:2
	,chosenanswer:-1
},
{
	question: "Which of the following, first found in North America, first found in New Jersey?"
	,choices:["mummy", "a giant skeleton","lochness monster","dinosaur skeleton"]
	,correctanswer:3
	,chosenanswer:-1
},

];
var start = function(){
	$('#trivia-form').empty();
	for (var i=0; i<trivia.length; i++){
		// console.log($("#trivia-form"));
		$("#trivia-form").append("<label>"+trivia[i].question+"</label><br>");
		for (var j=0; j<trivia[i].choices.length; j++){
			console.log(i+","+j+","+trivia[i]);
			if (j===trivia[i].correctanswer){
			$("#trivia-form").append('<input type="radio" name="question'+i+'" value="correct">'+trivia[i].choices[j]+'<br>');
			}
			else{	
			$("#trivia-form").append('<input type="radio" name="question'+i+'" value="incorrect">'+trivia[i].choices[j]+'<br>');
			}	
			//$("trivia-form").show(trivia.question);
		}
		console.log(trivia[i].question);
	}
	//stopwatch();
	//countdown=setInterval(stopwatch,1000);
	circuitTimer.start(function(){
		timer--;
		$("#display-time").html(timer);
		if(timer <= 0){
			circuitTimer.stop();
			alert("Time's Up");
			submitAnswers();
		}
	});
	$("#start").hide();
	$("#submit").show();
	$("#submit").on('click', function(){
		
		submitAnswers();
	});
	//stopwatch();
	//countdown=setInterval(stopwatch,1000);
	$("#restart").show();

}

$("#start").on('click', start);

var submitAnswers = function()
{	tallycorrect=0;
	tallyincorrect=0;
    var radioValue = $("input[name='question0']:checked").val();
	console.log(radioValue);
	for (var i=0; i<trivia.length; i++){
		if ( $("input[name='question"+i+"']:checked").val()==="correct")
		{
			console.log(true)
			tallycorrect++;
		}
		else
		{
			tallyincorrect++;
		}
	}
	$(".container").show();
	$("#tallyright").html("Questions correct: "+tallycorrect);
	$("#tallywrong").html("Questions incorrect: "+tallyincorrect);
	$("#tallyright").show();
	$("#tallywrong").show();
	circuitTimer.stop();
	//reallystop();
	$("#qc").show();
	$("#qw").show();
};
/*
var stopwatch = function()
{
	timer--;

	$("#display-time").html(timer);

	stop();
};

var stop = function(){
	if (timer ===0){
	clearInterval(countdown)
	alert("Times Up!");
	$("#display-time").hide();
	$("#trivia-form").hide();
	submitAnswers();
	}

};
var reallystop = function(){
	clearInterval(countdown);
	timer=10;

};*/

$("#restart").on('click', function(){
$("input[type=radio]").prop("checked",false);
	tallycorrect=0;
	tallyincorrect=0;
	timer=120;
	$("#tallyright").html("0");
	$("#tallywrong").html("0");
	$("#tallyright").hide();
	$("#tallywrong").hide();
	start();
	$("#trivia-form").show();
	$("#qc").hide();
	$("#qw").hide();

});
/*
var stopwatch = function()
{
	timer--;

	$("#display-time").html(timer);

	stop();
};

var stop = function(){
	if (timer ===0){
	clearInterval(countdown)
	alert("Times Up!");
	$("#display-time").hide();
	$("#trivia-form").hide();
	submitAnswers();
	}

};
var reallystop = function(){
	clearInterval(countdown);
	timer=10;

};*/

$("#restart").on('click', function(){
$("input[type=radio]").prop("checked",false);
	tallycorrect=0;
	tallyincorrect=0;
	timer=120;
	$("#tallyright").html("0");
	$("#tallywrong").html("0");
	$("#tallyright").hide();
	$("#tallywrong").hide();
	start();
	$("#trivia-form").show();
	$("#qc").hide();
	$("#qw").hide();

});
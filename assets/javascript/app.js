

var answerBank = [
	{
	question: "Louise is a closeted _____________",
	answer: "Boo Boo Booster",
	option1: "Allen-coholic", 
	option2: "De-Griffth",
	correctMessage: "Yup! Remember when she slapped him?",
	wrongMessage: "She slapped him! How do you not remember that?",
	// imageRight:,
	// imageWrong:,
	},

	{
	question: "Gene most used sample is a _____________",
	answer: "Fart Sound",
	option1: "Symbol Clash", 
	option2: "Gale’s Cats",
	correctMessage: "It’s certainly a classic for Gene!",
	wrongMessage: "Nope, Gene is definitely a fart man",
	},

	{
	question: "When the kids trick or treat on King’s Island, what is Gene’s Halloween Costume?",
	answer: "Queen Latifah (U.N.I.T.Y. Phase)",
	option1: "Edward Scissors Hands", 
	option2: "Mommy Mummy",
	correctMessage: "Why? Because he’s knows what’s up.",
	wrongMessage: "Nah bruh, he chose to be a true Queen Latifah.",
	},
];

// ----------- Variables -------------

var seconds = 30; 
var usedNum= [];
var qOrder = [];
var choiceOrder = [];
var count = 0;
var wins = 0;
var losses = 0;
var timeOut = 0;

// ----------- functions -------------
	
function downTime(){
    // Decrease number by one.
    seconds--;
        
    // Show the number in the #show-number tag.
    $('#timerText').html('<h2>' + seconds + '</h2>');

    if (seconds === 0){
    	stopTimer();
    };

};

function resetTimer (){
    seconds = 30;
    timer = setInterval(downTime,1000);
};

function stopTimer (){
	clearInterval();
};

function shuffle(max){

	usedNum = [];

	while (usedNum.length < max) {
		var j = Math.floor(Math.random() * max);

		if (!usedNum.includes(j)){
			usedNum.push(j);
			
		};
	};
};

function fill() {
	
	$('#qText').html('<h2>' + answerBank[qOrder[count]].question + '</h2>');
	$('#choice'+ choiceOrder[0] + 'Text').html('<h2>' + answerBank[qOrder[count]].answer + '</h2>');
	$('#choice' + choiceOrder[1] + 'Text').html('<h2>' + answerBank[qOrder[count]].option1 + '</h2>');
	$('#choice' + choiceOrder[2] + 'Text').html('<h2>' + answerBank[qOrder[count]].option2 + '</h2>');
	resetTimer;

};

function correct(){
	// display correctMessage, correctImage, bannerImg
	$('#answerArea').empty();
	$('#banner').html("<img src= 'assets/images/yes.png'>");
	$('#qText').html(answerBank[qOrder[count]].correctMessage);
	// $('answerArea').html(answerBank[qOrder[count]].imageRight);
	wins++;
}	

function wrong(){
	// display wrongMessage, wrongImage
	$('#answerArea').empty();
	$('#banner').html("<img src= 'assets/images/no.png'>");
	$('#qText').html(answerBank[qOrder[count]].wrongMessage);
	// $('answerArea').html(answerBank[qOrder[count]].imageWrong);
	losses++;
}
		
function timesUp(){
	timesUp++;

	$('#answerArea'),empty();
	$('#qText').html(answerBank[qOrder[count]].wrongMessage);
	$('#banner').html("<img src= 'assets/images/hold.jpg'>");
	// $('answerArea').html(answerBank[qOrder[count]].imageWrong);

}


// -------- the Good Stuff ---------

$(document).ready(function() {

	var qAreaClone = $("#qArea").clone(true);
	var answerAreaClone = $('#answerArea').clone(true);

	function qClone(){
		$("#qArea").replaceWith(qAreaClone.clone(true));
	};

	function aClone(){
		$("#answerArea").replaceWith(answerAreaClone.clone(true));
	};

	$('button').click(function(event){

		timer = setInterval(downTime,1000);
		
		shuffle(3);
		var temp = usedNum;
		choiceOrder = temp;
		console.log("choice " + choiceOrder)

		shuffle(3);
		var temp2 = usedNum;
		qOrder = temp2;
		console.log("qOrder " + qOrder);

		fill();	

		$('#button').empty();
		console.log("count " + count);

	});

	$("#answerArea").on("click", ".choice", function(event){
		
		var temp = $(this).find('h2').html();
		console.log(temp);

		stopTimer();

		if (temp == answerBank[qOrder[count]].answer){
			correct();
			console.log("wins " + wins);
		} else {
			wrong();
			console.log("losses " + losses);
		}

		setTimeout(aClone,3400);

		setTimeout(fill,3500);

		setTimeout(count++,3500);
		console.log("count " + count);

	});




});

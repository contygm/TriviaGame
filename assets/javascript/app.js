






var answerBank = [
	{
	question: "Louise is a closeted _____________",
	answer: "Boo Boo Booster",
	option1: "Allen-coholic", 
	option2: "De-Griffth",
	correctMessage: "Yup! Remember when she slapped him?",
	wrongMessage: "She slapped him! How do you not remember that?",
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
	}
];

var second = 30; 
	
function downTime(){
    // Decrease number by one.
    second--;
        
    // Show the number in the #show-number tag.
    $('#timer').html('<h2>' + second + '</h2>');

};

var usedNum= [];

function shuffle(max){

	usedNum = [];

	while (usedNum.length < max) {
		var j = Math.floor(Math.random() * max) + 1;

		if (!usedNum.includes(j)){
			usedNum.push(j);
			
		};
	};
};

$(document).ready(function() {

	$('button').click(function(event){

		timer = setInterval(downTime,1000);
		$('#question').html('<h2>' + answerBank[0].question + '</h2>');
		$('#choice1').html('<h2>' + answerBank[0].answer + '</h2>');
		$('#choice2').html('<h2>' + answerBank[0].option1 + '</h2>');
		$('#choice3').html('<h2>' + answerBank[0].option2 + '</h2>');

		// answers in array,
		
	});


});

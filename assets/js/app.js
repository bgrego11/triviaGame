

game = {
	gameLive: false,
	userGuess: "",
	right: 0,
	wrong: 0,
	grader: function() {
		if (this.activeQuestion.correct_answer === this.userGuess) {
			this.right ++;
			$('#right').html("# Right: "+this.right)
			this.getQuestion();
		} else {
			this.wrong ++;
			$('#wrong').html("# Wrong: "+this.wrong)
			this.getQuestion();
		}
	},
	questions: [],
	quest_init: function() {this.questions =  [
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
"correct_answer": "John and Mary",
"incorrect_answers": [
"Joseph and Catherine",
"William and Elizabeth",
"George and Anne"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which German field marshal was known as the `Desert Fox`?",
"correct_answer": "Erwin Rommel",
"incorrect_answers": [
"Ernst Busch",
"Wolfram Freiherr von Richthofen",
"Wilhelm List"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Which king was killed at the Battle of Bosworth Field in 1485? ",
"correct_answer": "Richard III",
"incorrect_answers": [
"Edward V",
"Henry VII",
"James I"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "The Spitfire L.F. Mk IX had what engine?",
"correct_answer": "Merlin 66",
"incorrect_answers": [
"Griffon 65",
"Merlin 50",
"Merlin X"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "What number does the Roman numeral &quot;D&quot; stand for?",
"correct_answer": "500",
"incorrect_answers": [
"100",
"1000",
"50"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "In relation to the British Occupation in Ireland, what does the IRA stand for.",
"correct_answer": "Irish Republican Army",
"incorrect_answers": [
"Irish Rebel Alliance",
"Irish Reformation Army",
"Irish-Royal Alliance"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "The idea of Socialism was articulated and advanced by whom?",
"correct_answer": "Karl Marx",
"incorrect_answers": [
"Vladimir Lenin",
"Joseph Stalin",
"Vladimir Putin"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "In what year did the Wall Street Crash take place?",
"correct_answer": "1929",
"incorrect_answers": [
"1932",
"1930",
"1925"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Who was the Prime Minister of the United Kingdom for most of World War II?",
"correct_answer": "Winston Churchill",
"incorrect_answers": [
"Neville Chamberlain",
"Harold Macmillan",
"Edward Heath"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following was NOT a capital of Assyria:",
"correct_answer": "Harran",
"incorrect_answers": [
"A&scaron;&scaron;ur",
"Kalhu",
"Nineveh"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following battles is often considered as marking the beginning of the fall of the Western Roman Empire?",
"correct_answer": "Battle of Adrianople",
"incorrect_answers": [
"Battle of Thessalonica",
"Battle of Pollentia",
"Battle of Constantinople"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "According to scholarly estimates, what percentage of the world population at the time died due to Tamerlane&#039;s conquests?",
"correct_answer": "5%",
"incorrect_answers": [
"1%",
"3%",
"&lt;1%"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following Assyrian kings did NOT rule during the Neo-Assyrian Empire?",
"correct_answer": "Shamshi-Adad III",
"incorrect_answers": [
"Shalmaneser V",
"Esharhaddon",
"Ashur-nasir-pal II"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
"correct_answer": "Illyrians",
"incorrect_answers": [
"Dorians",
"Achaeans",
"Ionians"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he/she never said it at all?",
"correct_answer": "Marie Antoinette",
"incorrect_answers": [
"Czar Nicholas II",
"Elizabeth I",
"Henry VIII"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "The creator of the Enigma Cypher and Machine was of what nationality?",
"correct_answer": "German",
"incorrect_answers": [
"American",
"British",
"Polish"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "What age was King Henry V when he died?",
"correct_answer": "36",
"incorrect_answers": [
"62",
"87",
"73"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "When was the United States National Security Agency established?",
"correct_answer": "November 4, 1952",
"incorrect_answers": [
"July 26, 1908",
" July 1, 1973",
" November 25, 2002"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
"correct_answer": "55",
"incorrect_answers": [
"50",
"60",
"54"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
"correct_answer": "USS Pueblo",
"incorrect_answers": [
"USS North Carolina",
"USS Constitution",
"USS Indianapolis"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "What did the first vending machines in the early 1880&#039;s dispense?",
"correct_answer": "Post cards",
"incorrect_answers": [
"Alcohol",
"Cigarettes",
"Sodas "
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "Which modern day country is the region that was known as Phrygia in ancient times?",
"correct_answer": "Turkey",
"incorrect_answers": [
"Syria",
"Greece",
"Egypt"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "In which year did the Invasion of Kuwait by Iraq occur?",
"correct_answer": "1990",
"incorrect_answers": [
"1992",
"1988",
"1986"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "When was the SS or Schutzstaffel (ᛋᛋ) established?",
"correct_answer": "April 4th, 1925",
"incorrect_answers": [
"September 1st, 1941",
"March 8th, 1935",
"February 21st, 1926"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed &quot;the Kingmaker&quot;?",
"correct_answer": "Richard Neville",
"incorrect_answers": [
"Richard III",
"Henry V",
"Thomas Warwick"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "When was Adolf Hitler appointed as Chancellor of Germany?",
"correct_answer": "January 30th, 1933",
"incorrect_answers": [
"September 1st, 1939",
"February 27th, 1933",
"October 6th, 1939"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "In 1720, England was in massive debt, and became in involved in the South Sea Bubble. Who was the main mastermind behind it?",
"correct_answer": "John Blunt",
"incorrect_answers": [
"Daniel Defoe",
"Robert Harley",
"John Churchill"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "hard",
"question": "The Second Boer War in 1899 was fought where?",
"correct_answer": "South Africa",
"incorrect_answers": [
"Argentina",
"Nepal",
"Bulgaria"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "Who tutored Alexander the Great?",
"correct_answer": "Aristotle",
"incorrect_answers": [
"Socrates",
"Plato",
"King Philip"
]
},
{
"category": "History",
"type": "multiple",
"difficulty": "easy",
"question": "When was Google founded?",
"correct_answer": "September 4, 1998",
"incorrect_answers": [
"October 9, 1997",
"December 12, 1989",
"Feburary 7th, 2000"
]
}
]
},
	activeQuestion: null,
	choices : [],
	shuffle: function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},


	choiceGen: function(question){
		this.choices = [];
		this.choices.push(question.correct_answer);
		this.choices = this.shuffle(this.choices.concat(question.incorrect_answers));
		$('#0').html(this.choices[0]);
		$('#1').html(this.choices[1]);
		$('#2').html(this.choices[2]);
		$('#3').html(this.choices[3]);

		

	},

	getQuestion: function() {
		this.activeQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
		rmvInd = this.questions.indexOf(this.activeQuestion);
		this.questions.splice(rmvInd,1);
		this.choiceGen(this.activeQuestion);
		$('#question').html(this.activeQuestion.question);


	}	,

}


$('#reset').on("click",function() {
	game.gameLive = false;
	game.quest_init();
	game.wrong = 0;
	game.right = 0;
	$('#wrong').html("# Wrong: "+game.wrong);
	$('#right').html("# Right: "+game.right);
	$('#status').html("Ready");
	stopwatch.stop();
	stopwatch.reset();
});

$('#go').on("click", function(){
	if (game.right === 0 || game.wrong === 0) {
	game.quest_init();
	game.gameLive = true;
	game.getQuestion()
	stopwatch.start();
	$('#status').html("Good Luck!");
}
});



$("td").on("click", function() {
	if (game.gameLive)	{	
		answer = $(this).html();
		game.userGuess = answer;
		game.grader();
	};


	
});

var intervalId;

// Our stopwatch object
var stopwatch = {

  time: 0,
  

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").html("00:00");

    // DONE: Empty the "laps" div.
  },
  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(stopwatch.count, 1000);
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here.
    clearInterval(intervalId);
  },
 
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
    if (stopwatch.time > 59) {
    	stopwatch.stop();
    	$('#status').html("Times Up");
    	game.gameLive = false;
    }
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
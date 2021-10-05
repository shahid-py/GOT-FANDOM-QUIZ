var readlineSync=require('readline-sync');
var score=0;
console.log('Lets see How well you know about Game Of Thrones Series\n\n')
var userName=readlineSync.question('What is Your Name ?\n');
console.log('\nWelcome to The GOT quiz ',userName,'!');
console.log('\nRules :    10 question\n You get 1 score for right answer \n Negative 1 score for wrong   \n Three option for 1 question \n Type answer only in lower case for example : a , b ,c      ');
console.log('Lets start\nWinter is coming !\n');

// play function
function play(question,answer)
    {

    var userAnswer=readlineSync.question(question);
    if (userAnswer===answer)
    {
      console.log("\nNice!",userName,"you r right");
      score =score+1;
    }
    else {

    console.log('\nHell no! ')
    
    }
    console.log("\nNow your score out of 10 is ",score)
    console.log('--------------')
    }
  // array of objects
  var questions=[
    {
      question:"How many kid had Tywin Lannister?\n a : Two\n b : five \n c : Three\n\n",answer:"c"
    },
    { 
      
      question:"Who was in love with Shae?\n a : Jon snow\n b : Jamie Lannister\n c : Tyrion Lannister\n\n",answer:"c"

    },
    {
      question:" How many kingdoms are there in Westeros continent?\n a : 7\n b : 3\n c : 2\n\n",answer:"a"

    },
    {
      question:" Which novel series Game of Thrones based on?\n a : nightFlyers\n b : The song of ice and fires\n c : winter wind\n\n",answer:"b"
    },
    {
      question:" who is Elia Martell for Daenerys?\n a : sister\n b : Mother\n c : sister in law\n\n",answer:"c"
    },
    {
      question:" Arya stark sword known as?\n a : needle\n b : mjolnir\n c : lead\n\n",answer:"a"
    },
    {
      question:" Last name of Bastard in Dorne?\n a : snow\n b : sand\n c : class\n\n",answer:"b"
    },
    {
      question:" who killed nightking?\n a : Brendon\n b : Daenerys\n c : Arya\n\n",answer:"c"
    },
    {
      question:" Who was nicknamed the Lightning Lord?\n a : Mycah\n b : Beric\n c : Rob\n\n",answer:"b"
    },
    {
      question:" Who leads the troop attacking the king landing during battle of black water?\n a : Stannis Baratheon\n b : Rob Stark\n c : Tywin Lannister\n\n",answer:"a"
    }
  ];
  // loop
  for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  console.log('you scored ' ,score,"out of 10\n\nThankYou");
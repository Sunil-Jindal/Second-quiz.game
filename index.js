var readlineSync = require('readline-sync');


var userName = readlineSync.question('what is your name :-'+'\n');

console.log('\n'+'welocme ' + userName  + ' do you know me ?'+'\n');

var feedback = readlineSync.question('(yes/no) '+ '\n') ;



console.log('\n'+'Lets check it I ask some question');

if(feedback === 'yes'){
  
  var score = 0;
  

  function play(question,option,answers){
     
    console.log(question);
    console.log(option);
    
   var userAnswers = readlineSync.question('   ');

     

   
  //  score = score + 1;
   if(userAnswers === answers){
      console.log('\n'+'your answers is right ' +userAnswers);

      score = score + 1;
       
      
    
   }else{
      console.log('\n'+'your answers is wrong');
       score = score - 1;
       console.log('The Right Answer is '+ answers);
   }
    console.log('your score is '+score); 
    
  }

  // if(score<1){
    

  // play('my name is ','sunil');

  var manyQuestion = [{
    question : '1. What is my full name ?',
    option : ' (a) Sunil, (b) Sunil Gupat, (c) Sunil jindal',
    answers : 'c'
  },
  {
    question : '2. What I do currently ?',
    option : ' (a) Job, (b) Study, (c) Both',
    answers : 'c'
  },{
    question : '3. Do you Konw what is my lucky number ?',
    option : ' (a) 5, (b) 7, (c) 9',
    answers : 'b' 
  },{
    question : '4. which dish i like ?',
    option : ' (a) Dhosa, (b) Paneer Naan, (c) Ladyfingure',
    answers : 'b'
  },{
    question : '5. what is my aim ?',
    option : ' (a) Front end developer , (b) back end developer, (c)  Graphics Designer',
    answers : 'a'
  }];
  
  //genrated spaces
   console.log('\n' + '---------------------------------------'+'\n');

  for(i=0; i<manyQuestion.length; i++)
  {
    // var printQna = manyQuestion[i];
    play
    (
      manyQuestion[i].question,
      manyQuestion[i].option,
      manyQuestion[i].answers
    );
     console.log('\n' + '---------------------------------------'+'\n');
     
    
  }
console.log('your total score is '+score);


}else{
  console.log('bye-bye')
}




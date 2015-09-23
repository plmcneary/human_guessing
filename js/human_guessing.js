function numberGen(){
  return Math.ceil(Math.random()*10);
}

var number = numberGen();
var msg = document.querySelector('h1');
var btn = document.querySelector('button');
var btnReset = document.querySelector('.reset');

function reset (){
  number = numberGen();
  msg.textContent = 'Take a guess!';
}

btnReset.addEventListener('click', function(){
  reset();
});

btn.addEventListener('click', function(){
  var guess = parseInt(document.querySelector('.guess').value);
  if(guess < number){
  msg.textContent = 'Too low.';
  }else if(guess > number){
  msg.textContent = 'Too high.';
  }else if(guess === number){
  msg.textContent = 'Yep, you got it!';
  }
});

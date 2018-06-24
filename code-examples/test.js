/* for (var i = 1; i <= 100; i++)
{ if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
} else if (i % 3 === 0) {
    console.log('Fizz');
} else if (i % 5 === 0) {
    console.log('Buzz');
}
  else {
    console.log(i);
  }
} */

/* var hash = "#";
var space = ' ';
var size = 8;

for (var x = 1; x <= size; x++) {
    var line = ' ';
    for (var y = 1; y <= size; y++) {
        if (x % 2) {
          if (y % 2) {
              line = line + space;
          } else {
              line = line + hash;
          }
        } else {
            if (y % 2) {
                line = line + hash;
        } else {
            line = line + space;
        }
        }
    }
    console.log(line);
} */

/* for (i = 1; i <= 100; i++)
console.log(i) */

/* var numbers = [];

for(var i=0;i<10;i++){
    numbers.push('0','1','2','3','4','5','6','7','8','9','10')
} console.log(numbers[3+6]); */

/* var hash = '#';
for (i = 0; i < 6; i++) {
    console.log(hash);
    hash += '#';
}  */

/* var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'


    if (choice < 2) {
      console.log(true)
    }
    else if (choice >= 2) {
      console.log(false)
    }
    else
      console.log('Please obey the logic')

    console.log(choice);
}

ask(); */

/* var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else';

    switch(choice) {
    case (choice < 2):
      console.log(true);
      break;
    
    case (choice = 2):
      console.log(false);
      break;

    default: 
      console.log("Please obey the logic");
      break;
    console.log(choice);
    }
}
ask(10293); */

/* function factorial(n) {
  var result = 1;
  for (i = 1; i <= n; i++) {
  result *= i;
    }  return result;
}   
console.log(factorial(3)); */

/* var sum = 0;
var numbers = [];

for (var i = 0; i <= 10; i++) {
    numbers.push(i);
}   
while (numbers.length !== 0) { 
    sum += numbers.pop();
}   console.log(sum); */


//magic eightball

 var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys + 1);
    var reply = 'You need to make some options using if/else'

    if (choice === 1) {
        console.log(true);
    }
    else if (choice === 2) {
        console.log(false);
    }
    else {
        console.log(NaN);
    }
    console.log(choice);
}   

ask(2); 


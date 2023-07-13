/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/ 

function tellFortune( job_title, geographic_location , partners_name , number_of_children )

{ 
console.log (` You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids `);
}

tellFortune("X", "Y ", "Z" , "N");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge (your_puppy_age)
{ 
    your_puppy_age = your_puppy_age * 7
    console.log(`Your doggie is ${your_puppy_age} years old in dog years!`)
}

calculateDogAge (2);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply(age, amount_per_day)
// {
//     return ((100-age)*365)*amount_per_day; 
    
// }
// let result = calculateSupply(28,2);
// console.log(` You will need ${result} to last you until the ripe old age of 100`);

function calculateSupply(age, amount_per_day)
{
   let x=((100-age)*365)*amount_per_day; 
   console.log(` You will need ${x} to last you until the ripe old age of 100`);
    
}
calculateSupply(28,2);


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
 console.log ( `Hello ${name}` )
}
greet("Rania");



/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/


function double(x) {
    return 2 * x;
  }
  
  function double(xx) {
    return 2 * 7;
  }
  
  function double(xxx) {
    return 2 * 'x';
  };


  
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) 
{
    return 2 * x ;
  }
  
  function double2 (x) 
  {
  return 2 * x;
  }
  
  function  double3 (x)
  {
    return 2 * x; 
  }



  /*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(y)
{ 
let num= (y ** 3);
console.log(num)
}
cube(3);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function  multiply(num1,num2)
{
    let num3= num1*num2;
    console.log(num3)
}
multiply(3,5);  

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age1)
{
    if (age1>=20) { console.log("yes you can")}
    else {  let x=20-age1 ;
             console.log (`please come back after ${x} years to get one`)}
}
canIGetADrivingLicense(18);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(q,w)
{
    if ( q.length == w.length) { console.log ( "true")}
    else { console.log ( "false") }
}
sameLength("Rania","Leena")


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function  largerNubmer(numb1,numb2)
{
    if (numb1>numb2) {
        console.log(numb1)
    }
    else {
        console.log(numb2)
    }

 }
 largerNubmer(16,6);


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function  smallerNumber(n1,n2,n3)
{
    if (n1<n2 && n1<n3) {
        console.log(n1)
    }
    else if (n2<n1 && n2<n3) {
        console.log(n2)
    }
    else {
        console.log(n3)
    }

 }
 smallerNumber(10,15,9);


 /*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function  shorterString(s1,s2,s3,s4,s5)
{
if (s1.length < s2.length && s1.length < s3.length
     && s1.length < s4.length && s1.length < s5.length ) {
    console.log(s1)
}
else if (s2.length < s1.length && s2.length < s3.length
&& s2.length < s4.length && s2.length < s5.length ) {
console.log(s2)
}
else if (s3.length < s1.length && s3.length < s2.length
    && s3.length < s4.length && s3.length < s5.length ) {
    console.log(s3)
    }
    else if (s4.length < s1.length && s4.length < s2.length
        && s4.length < s3.length && s4.length < s5.length ) {
        console.log(s4)
        }
else {
    console.log(s5)
}
}

shorterString("blue","red","black","yellow","green")









/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function  longerString(st1,st2,st3,st4)
{
if (st1.length >= st2.length && st1.length >= st3.length
     && st1.length >= st4.length ) {
    console.log(st1)
}
else if (st2.length >= st1.length && st2.length >= st3.length
&& st2.length > st4.length ) {
console.log(st2)
}
else if (st3.length >= st1.length && st3.length >= st2.length
    && st3.length >= st4.length  ) {
    console.log(st3)
    }

else {
    console.log(st4)
}
}

longerString("hi","hello","hello_world","welcome","hey");



/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number1)
{ if (number1 % 2 == 0) { console.log(true)}
else { console.log(false)}

}

isEven(35)



/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(numberr1)
{ if (numberr1 % 2 != 0) { console.log(true)}
else { console.log(false)}

}

isOdd(37)



// 17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed

// Ex: positive(4)
// => 4
// Ex: positive(-5)
// => 5


function positive(h1) {
    console.log( Math.abs(h1) ) ;
  }

  positive(-220)



// 18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.

// Ex: fullName("Adam","McCallen")
// => "Adam McCallen"
// Ex: fullName("Alex", "Mercer")
// => "Alex Mercer"
// */

function fullName (firstName , lastName)
{
console.log(` ${firstName}  ${lastName}`)

}
fullName ("Rania" , "Taha")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(z1, z2, z3, z4 , z5)
{
    return (z1+z2+z3+z4+z5)/5;
}
let result1=average(20, 12, 3, 9 , 4);
console.log(result1);


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/


function randomNumber() {
    return  console.log(Math.random());
  }

 


// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

// Ex: randomBetweenNumbers(1,8)
// => 7.5412

// Ex: randomBetweenNumbers(3,100)
// => 23

function randomBetweenNumbers(min, max) {
    return console.log(Math.random() * (max - min) + min); 
  }
  
  randomBetweenNumbers(3, 5); 
  randomBetweenNumbers(10, 13); 
  

// 22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49

// Ex: scoreInUniversty(96)
// => "A"

// Ex: scoreInUniversty(3)
// => "F"

// Ex: scoreInUniversty(71)
// => "C"
// */

// function scoreInUniversty(score)
// { 
//     if (score > 95 && score <100) { console.log ( "A" )}
//     else if (score >= 85 && score <= 94) { console.log ("B")}
//     else if (score >= 70 && score <= 84) { console.log ("C")}
//     else if (score >= 50 && score <= 69) { console.log ("D")}
//     else { console.log ("F") }

// } 
// scoreInUniversty(80) 
// scoreInUniversty(44);

function scoreInUniversty(score1){
    switch (true) {
      
      case score1 >= 50 && score1 <= 59:
        return(console.log("E"));
      case score1 >= 60 && score1 <= 69:
        return(console.log("D"));
      case score1 >= 70 && score1 <= 79:
        return(console.log("C"));
      case score1 >= 80 && score1 <= 89:
        return(console.log("B"));
      case score1 >= 90 && score1 <= 100:
        return(console.log("A"));
        case score1 < 50:
        return(console.log("F"));
    }
  }

scoreInUniversty(66) 
scoreInUniversty(33);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

let count = 0;
function counter(){
  
  return count++

}

console.log(counter()) ;
console.log(counter()) ;
console.log(counter()) ;







/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

let count2 =3;
function resetCounter(){
 
  return  count2-- + " and the counter reset now";}

  console.log (resetCounter());
  console.log (resetCounter());
  console.log (resetCounter());
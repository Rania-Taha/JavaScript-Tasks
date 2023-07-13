/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/*** Start Your Code ***/
let x = prompt ("write first number")
let y = prompt ("write second number")
if (x > y) {
console.log( "The larger number =" + x)
}
else if (y > x) { 
    console.log ("The larger number =" + y)
}
else {
    console.log ("The Numbers are equal")
}


 /*** End Your Code *** */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/*** Start Your Code ***/
let x1= 3, x2=-7, x3=2 
let product= x1 * x2 * x3 ;
if (product < 0  ) {
    alert ("The sign is -")
} else {
    alert ("The sign is +")
}

 /*** End Your Code *** */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/*** Start Your Code ***/
  let num1 = 0 ;
  let num2 = -1 ;
  let num3 = 4 ;
  let sortednum ;

  if (num1 > num2 && num1 > num3) {
   if ( num2 > num3) {
    sortednum = num1 + "," + num2 + "," + num3 
   } else {sortednum = num1 + "," + num3 +"," +num2
  } }
  else if (num2 > num1 && num2 > num3) {
    if ( num1 > num3) {
     sortednum = num2 + "," + num1 + "," + num3 
    }
    else { sortednum = num2 + "," + num3 +"," +num1}}
    else if (num1 > num2)
    {sortednum = num3 + "," + num1 +"," +num2}
    else {sortednum = num3 + "," + num2 +"," +num1 } 
     alert ( "sorted numbers:" + sortednum )


 /*** End Your Code *** */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

let num= [-5,-2, -6,  0, -1];
let largest = num[0];

for (i=0 ; i< num.length;  i++)
{ if ( num[i] >= largest) {largest = num[i]}}
alert ( " largest:" + largest)

/*** Start Your Code ***/
  
 /*** End Your Code *** */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/*** Start Your Code ***/
let b = 5
let c = 10 
if (b > c) {
    console.log ("Hello World")
}else { 
    alert ("Goodbye")
}
  
 /*** End Your Code *** */

// Task 2

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let rate = 52 ; 
switch (true)
{  
    case ( rate >= 90 &&  rate <= 100) : 
    console.log ( "A");
    break; 
    case ( rate >=80 && rate <=89) :
        console.log ( "B");
        break;
        case ( rate >=70 && rate <=79) :
        console.log ( "C");
        break;
        case ( rate >=60 && rate <=69) :
        console.log ( "D");
        break;
        case (rate >=50 && rate <=59) :
        console.log ( "E");
        break;
        default :
         console.log ("Fail")
}

// Task 3

// 1. Write a JS code to print numbers from 1 to 10

for ( let t=1; t<=10; t++)
{ console.log(t)}


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13, 23, 12, 45, 22, 48, 66, 100];

for (var j = 0; j < arr.length; j++) {
  if (arr[j] % 2 === 0) {
    console.log(arr[j]);
  }
}

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

let p="";
for(let i=1;i<9;i++){
    
    for(let j=i;j<=i;j++){
        
   p+=j + " ";
       
    }

  
    console.log(p)
}
 


 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let e = "don't know why";

if (e.includes('y')) {
  console.log("yes");
} else {
  console.log("no");
}
/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
console.log("Task1 ");
let x = 250 ;
let y= 0.025 * x;
console.log("Value of Zakat =" + y + " JD") 




/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
console.log([1, 7, 9, 45]);
console.log(["str", "alex", "moh"]);
console.log(["the", "fox", "over", "Lazy", "dog"]);




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
console.log("Task2");
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf ("Tomato"));




/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
console.log("Task3");
const Rania= ["Pizza", "Burger","Swimming" , "tennis", "BasketBall", "Shawshank Redumption", "The night's Tale"];
console.log(Rania);




/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("Task4");
let arr1 = ['red', 'blue', 'green'];
console.log(arr1[0]);





/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("Task5");
let arr2 = ['red', 'blue', 'green'];
console.log(arr2[arr2.length - 1]);



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("Task6");
var arr3 = [0, 5, 7, 9];
arr3.shift();
arr3.unshift(1);
arr3.pop();
arr3.pop();
arr3.pop();
arr3.push(3);
arr3.push(4);
arr3.push(6);
arr3.push(8);
arr3.push(9);
arr3.push(10);
console.log(arr3);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("Task7");
var arr4 = [0, 5, 7, 9];
arr4.shift();
arr4.pop();
arr4.pop();
arr4.push(9);
arr4.push(-7);
arr4.push(3.5);
console.log(arr4);




/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
console.log("Task8");
let arr5 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr5.sort());

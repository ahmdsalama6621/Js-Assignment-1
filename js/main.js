// First question

// var number = window.prompt("5");
// console.log(number);



///////////////


// second question

// var number = prompt("12");
// if (number % 3 === 0 && number % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }



///////////////



// The third question

// var number1 = prompt("the first number");
// var number2 = prompt("the last number");

// var maxNumber;
// if (number1 > number2) {
//   maxNumber = number1;
// }
// console.log("The maximum number is " + maxNumber);





///////////


// the fourth question

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   var number = document.getElementById("number").value;
//   if (number < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Positive");
//   }
// });


///////////


// The fifth question

// var number1 = (prompt("7 "));
// var number2 = (prompt("8 "));
// var number3 = (prompt("5 "));

// var maxNumber = Math.max(number1, number2, number3);

// var minNumber = Math.min(number1, number2, number3);

// console.log("Maximum element: " + maxNumber);
// console.log("Minimum element: " + minNumber);


//////////


// Sixth question

// var number = (prompt("8"));
// if (number % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }




//////////


// Seventh question

// var character = prompt(" a ");
// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }


//////////


// Eighth question

// var number = (prompt("5"));

// for (var i = 1; i <= number; i++) {
//   console.log(i);
// }



///////////



// Question nine

// var number = 5;
// do {
//   number = (prompt("5"));
// } while (isNaN(number));
// for (var i = 1; i <= 12; i++) {
//   var result = number * i;
//   console.log(`${number} × ${i} = ${result}`);
// }



///////////



// Question ten 

// var number = (prompt("15"));
// console.log("12");
// for (var i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }



/////////////



// Eleventh question

// var x = (prompt(" العدد"));
// var o = (prompt(" الاسس "));
// var result = 1;
// for (var i = 1; i <= o; i++) {
//   result *= x;
// }
// console.log( " الناتج:" + result);



//////////



// Twelfth question

// var marks = [];
// for (var i = 0; i < 5; i++) {
//   var subjectMarks = (prompt(" قم بادخال درجه الماده "));
//   marks.push(subjectMarks);
// }
// var totalMarks = 0;
// for (var i = 0; i < marks.length; i++) {
//   totalMarks += marks[i];
// }
// var averageMarks = totalMarks / marks.length;
// var percentage = (totalMarks / (marks.length * 100)) * 100;
// console.log("المجموع الكلي= " + totalMarks);
// console.log("المتوسط = " + averageMarks);
// console.log("النسبه المئويه = " + percentage);





/////////



// Question thirteen

// var monthNumber = (prompt("Month"));
// var daysInMonthTable = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var daysInMonth;
// if (monthNumber >= 1 && monthNumber <= 12) {
//   daysInMonth = daysInMonthTable[monthNumber - 1];
// } else {
//   daysInMonth = "undefined";
// }
// console.log("days in month : " + daysInMonth);




//////////



// Fourteenth question

// var physicsMarks = (prompt(" فيزيا "));
// var chemistryMarks = (prompt(" كيميا "));
// var biologyMarks = (prompt(" أحياء "));
// var mathematicsMarks = (prompt(" رياضه "));
// var computerMarks = (prompt(" pc "));
// var totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathematicsMarks + computerMarks;
// var percentage = (totalMarks / 500) * 100;
// var grade;
// if (percentage >= 90) {
//   grade = "A";
// } else if (percentage >= 80) {
//   grade = "B";
// } else if (percentage >= 70) {
//   grade = "C";
// } else if (percentage >= 60) {
//   grade = "D";
// } else if (percentage >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log( percentage + "%");
// console.log(" التقدير : " + grade);




///////////



// Question fifteen

// var monthNumber = (prompt("أدخل رقم الشهر: "));
// var totalDays;
// switch (monthNumber) {
//   case 1: // يناير
//   case 3: // مارس
//   case 5: // مايو
//   case 7: // يوليو
//   case 8: // أغسطس
//   case 10: // أكتوبر
//   case 12: // ديسمبر
//     totalDays = 31;
//     break;
//   case 4: // أبريل
//   case 6: // يونيو
//   case 9: // سبتمبر
//   case 11: // نوفمبر
//     totalDays = 30;
//     break;
//   case 2: // فبراير
//     totalDays = 28;
//     break;
//   default:
//     console.log("undefined");
// }
// if (totalDays) {
//   console.log("عدد الايام  في الشهر: " + totalDays);
// }




//////////




// Sixteenth question

// var character = prompt(" character ").toLowerCase();
// var characterType;
// switch (character) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     characterType = "vowel ";
//     break;
//   default:
//     characterType = "consonant ";
// }
// console.log(" character type : " + characterType);




//////////


// Question seventeen

// var num1 = (prompt(" first number : "));
// var num2 = (prompt(" second number : "));
// var maximumNumber;
// switch (true) {
//   case num1 > num2:
//     maximumNumber = num1;
//     break;
//   case num2 > num1:
//     maximumNumber = num2;
//     break;
//   default:
//     console.log("العدد متساوي .");
// }
// if (maximumNumber) {
//   console.log("العدد الأكبر: " + maximumNumber);
// }





////////////


// Question eighteen

// var number = (prompt("أدخل العدد: "));
// var numberType;
// switch (number % 2) {
//   case 0:
//     numberType = "عدد زوجي";
//     break;
//   case 1:
//     numberType = "عدد فردي";
//     break;
//   default:
//     numberType = "عدد غير صحيح";
// }
// console.log("نوع العدد: " + numberType);



////////////


// Question nineteen

// var number = (prompt("Enter a number: "));
// switch (number % 2) {
//   case 0:
//     console.log("The number is even.");
//     break;
//   case 1:
//     console.log("The number is odd.");
//     break;
//   default:
//     console.log("Invalid input.");
// }






///////////


// Question twenty

// function getInput(message) {
//   return prompt(message);
// }
// function printResult(result) {
//   console.log("النتيجة هي: " + result);
// }
// var num1 = (getInput(" الرقم الاول: "));
// var num2 = (getInput(" الرقم الثاني: "));
// var operator = getInput(" ادخال عمليه  (+, -, *, /): ");
// var result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     console.log("عامل غير صحيح.");
// }
// if (result !== undefined) {
//   printResult(result);
// }

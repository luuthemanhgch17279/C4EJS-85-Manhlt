//Bài Tập 1: Variable swap:
// console.log("Cách 1:=======================");
// let a = 5;
// let b =6;
// console.log("a = " + a + "; b = " + b);

// let c;
// c = a;
// a = b;
// b = c;
// console.log("a = " + a + "; b = " + b);

// console.log("Cách 2:=======================");
// let a = 5;
// let b =6;
// console.log("a = " + a + "; b = " + b);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = " + a + "; b = " + b);

// Bài Tập 2: Split String into Array
// const s = "Hello beauty there";
// let splitExamples = s.split(" ");
// const a = Array(splitExamples);
// console.log(a);

//Bài Tập 3:
    // const a = [0, 9, 11, 99, 17, 04, 20, 01];
    // console.log(a);
    // console.log(...a);

//Bài Tập 4:
// let listItem = ["Jeans", "T-shirt", "Socks"];
// let choiceSystem = ["c", "r", "u", "d"];
// while (true) {
//   let userChoice = prompt( "Hi there, welcome to shop admin panel!, what do you want (C, R, U, D)");
//   if (userChoice == choiceSystem[1]) {
//     console.log("The current item are: ");
//     for (let i = 0; i < listItem.length; i++) {
//       console.log(i + 1 + ". " + listItem[i]);
//     }
//     break;
//   } else if (userChoice == choiceSystem[0]) {
//     let newItem = prompt("Enter the name of new item");
//     lisItem = listItem.push(newItem);
//     alert("Done");
//     console.log(listItem);
//   } else if (userChoice == choiceSystem[2]) {
//     let positionItem = prompt("Enter the position you want you want to update");
//     let newName = prompt("Enter the new name");
//     listItem[positionItem] = newName;
//     alert("Done");
//     console.log(listItem);
//   } else if (userChoice == choiceSystem[3]) {
//     let positionDelete = prompt("Enter the position you want to delete");
//     listItem.splice(positionDelete, 1);
//     alert("Done");
//     console.log(listItem);
//   } else {
//     alert("This command is not supported");
//   }
//}

//Bài Tập 5
// let sequenceNumber = prompt("Enter a sequence of Numbers, separated by commas");
// let splitNumber = sequenceNumber.split(",");
// //preValue là giá trị trước
// //currentValue là giá trị hiện thời
// let totalSum = splitNumber.reduce((preValue, currentValue) => {
//     totalSum =Number(preValue) + Number(currentValue);
//     return totalSum;
// }, 0);
// alert("The sum of them is " + toalSum);

//Bài Tập 6:
// let sequenceNumber = prompt("Enter a sequence of Numbers, separated by commas");
// let splitNumber = sequenceNumber.split(",");
// //preValue là giá trị trước
// //currentValue là giá trị hiện thời
// let smallestNumber = splitNumber.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//         return currentValue;
//     }else{
//         return preValue;
//     }
// }, splitNumber[0]);
// //Ví dụ: array(99, 0, 1, 89, -9);
// //1. preValue = 99, currentValue = 0; =>  return current = 0 => smallestNumber = 0;
// //2. preValue = 0, currentValue = 1 =>  return preValue = 0 => smallestNumber = 0;
// //3. preValue = 0, currentValue = 89 =>  return preValue = 0 => smallestNumber = 0;
// //4. preValue = 0, currentValue = -9 =>  return current = -9 => smallestNumber = -9;
// alert("The smallestNumber in array is " + smallestNumber);

//Bài Tập 7:
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let userChoice = prompt("Enter a number");
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (userChoice == arr[i]) {
//       count++;
//   }
// }
// if(count == 0) {
//     alert(userChoice + " is NOT found in array");
// }else{
//     alert(userChoice + " is FOUND in array at index " + arr.indexOf(Number(userChoice)));
// }

//Bài Tập 8
//8.1 In ra sheep size
// let  sheepSizes = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
// console.log(...sheepSizes);

//8.2 tìm sheep size lớn nhất
// let  sheepSizes = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
// console.log(...sheepSizes);
// let biggestSize = sheepSizes.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//                 return preValue;
//             }else{
//                 return currentValue;
//             }
// }, sheepSizes[0]);
// console.log("Now my biggest sheep has size " + biggestSize + " , let's shave it");

//8.3 chuyển sheep size lớn nhất về mặc định bằng 8
// let  sheepSizes = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
// console.log(...sheepSizes);
// let biggestSize = sheepSizes.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//                 return preValue;
//             }else{
//                 return currentValue;
//             }
// }, sheepSizes[0]);
// console.log("Now my biggest sheep has size " + biggestSize + " , let's shave it");

// const indexSize = 8;
// let index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = indexSize;
// console.log(`After shearing, here is my flock:`);
// console.log(...sheepSizes);

//8.4 tăng sheep size lên 50 sau thang 1;
// let  sheepSizes = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is Phuong Nam and here is my sheep sizes:');
// console.log(...sheepSizes);
// let biggestSize = sheepSizes.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//                 return preValue;
//             }else{
//                 return currentValue;
//             }
// }, sheepSizes[0]);
// console.log("Now my biggest sheep has size " + biggestSize + " , let's shave it");

// const indexSize = 8;
// let index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = indexSize;
// console.log(`After shearing, here is my flock:`);
// console.log(...sheepSizes);

// let increaseNumber = 50;
// sheepSizes = sheepSizes.map((currentValue) => {
//     sheepSizes = currentValue + increaseNumber;
//     return sheepSizes;
// });
// console.log("MONTH 1");
// console.log("One month has, passed, my sheeps have grown, here are there sizes");
// console.log(...sheepSizes);

// //8.5 Sau 4 tháng:
// biggestSize = sheepSizes.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//                 return preValue;
//             }else{
//                 return currentValue;
//             }
// }, sheepSizes[0]);
// console.log("Now my biggest sheep has size " + biggestSize + " , let's shave it");
// index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = indexSize;
// console.log(`After shearing, here is my flock:`);
// console.log(...sheepSizes);

// //tháng 2:
// sheepSizes = sheepSizes.map((currentValue) => {
//     sheepSizes = currentValue + increaseNumber;
//     return sheepSizes;
// });
// console.log("MONTH 2");
// console.log("One month has, passed, my sheeps have grown, here are there sizes");
// console.log(...sheepSizes);

// biggestSize = sheepSizes.reduce((preValue, currentValue) => {
//     if(currentValue < preValue){
//                 return preValue;
//             }else{
//                 return currentValue;
//             }
// }, sheepSizes[0]);
// console.log("Now my biggest sheep has size " + biggestSize + " , let's shave it");
// index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = indexSize;
// console.log(`After shearing, here is my flock:`);
// console.log(...sheepSizes);

// //Tháng 3:
// sheepSizes = sheepSizes.map((currentValue) => {
//     sheepSizes = currentValue + increaseNumber;
//     return sheepSizes;
// });
// console.log("MONTH 3");
// console.log("One month has, passed, my sheeps have grown, here are there sizes");
// console.log(...sheepSizes);

// //8.6 Tính tổng sheep sizes và tính tiền nhận đc:
// let totalSheepSizes = sheepSizes.reduce((preValue, currentValue) => {
//     totalSum =Number(preValue) + Number(currentValue);
//     return totalSum;
// }, 0);

// console.log("My flock has size in total: " + totalSheepSizes);
// console.log("I would get " + totalSheepSizes + " * 2$ " + "= " + totalSheepSizes*2);



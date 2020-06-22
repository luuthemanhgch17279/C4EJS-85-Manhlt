// console.log("Bài Tập 1: let, var, and const");
// console.log("Q1: var và const Trong JS là gì?");
// console.log("Trong JavaScript var, const là từ khóa để khai báo một biến ");
// console.log("////////////////////////////////////////////////////////////////");
// console.log("Q2: Sự Khác nhau giữa let và var?");
// console.log("let và var đều có tác dụng là để khai báo 1 biến, chỉ khác nhau ở phạm vi hoạt động.")
// Ví dụ Q2:
// ========================================
// {
//     let x = "Hello Mind X";
// }
// console.log(x);
// ========================================
// {
//     var y = "Hello Mind X";
// }
// console.log(y);
// console.log("////////////////////////////////////////////////////////////////");
// console.log("Q3: Sự Khác nhau giữa let và const?");
// console.log("let và var đều có tác dụng là để khai báo 1 biến, chỉ khác nhau ở điểm, khi sử dụng const để khai báo 1 biến thì giá trị của biến sẽ không thể thay đổi");
//Ví dụ Q3:
// ========================================
//  let x = 10;
//  x = 5;
//  console.log(x);
// ========================================
//   const y = 3.14;
//   y = 3.15;
//   console.log(y);
// console.log("Q4: Trường hợp nào sử dụng vả, let , const");
// console.log("1. Không dùng var trong mọi trường hợp mà thay bằng đùng let");
// console.log("2. Sử dụng const để khai báo biến khi cần định nghĩa 1 hằng số");

// console.log("Bài Tập 2: Boolean");
// console.log("Q1: Boolean là gì?");
// console.log("Boolean là kiểu dữ liệu giúp kiểm tra giá trị đúng hay sai.");
// console.log("Q2: Boolean trả về kết quả là gì?");
// console.log("Boolean trả về hai giá trị là TRUE và FALSE")

//Ví Dụ Q2:
// let x = 8;
// let y = 9;
// if(x>y){
//     console.log("true");
// }else{
//     console.log("false");
// }

// console.log("Bài Tập 3:");
// console.log("a. In ra 7 số, bắt đầu từ 0:");
// for(let i = 0; i < 7; i++){
//     console.log(i);
// }

// console.log("b. In ra n số, bắt đầu từ 0, trong đó n được user nhập:");
// let x = prompt("Enter your number:");
// for(let i = 0; i < x; i++){
//     console.log(i);
// }

// console.log("c. In ra các số từ 3 => n -1, trong đó n được user nhập:");
// let x = prompt("Enter your number:");
// for(let i = 3; i < x; i++){
//     console.log(i);
// }

// console.log("d. In ra các số từ c => n-1; trong đó n, c được nhập từ bàn phím");
// let c = prompt("Enter first number:");
// let n = prompt("Enter second number:");
// for(let i = c; i < n; i++){
//     console.log(i);
// }

// console.log("e. In ra các số từ c => n-1 (Stepping = 3), trong đó n, c được nhập từ bàn phím.");
// let c = Number(prompt("Enter c"));
// let n = prompt("Enter n");
// for(let i = c; i < n; i+=3){
//     console.log(i);
// }
// console.log("f. In ra các số từ c => n-1 (Stepping = k), trong đó n, c, k được nhập từ user");
// let n = prompt("Enter n ");
// let c = Number(prompt("Enter c"));
// let k = Number(prompt("Enter k"));
// for(let i = c; i < n; i+=k){
//   console.log(i);
// }

// console.log("Bài Tập 4: Tính tích từ 1 => n");
// let n = prompt("Enter n:");
// let a = 1;
// for(let i = 1; i <= n; i++){
//   a = a * i;
// }
// alert("The factorial of " + n + " is " + a);

// console.log("Bài Tập 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content")
// let ageUsers = prompt("Enter your age: ");
// if(ageUsers >= 14){
//   alert("Enjoy!!!!!!");
// }else{
//   alert("You are not old enough to view this content!");
// }

// console.log("Bài Tập 6: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range");
// let x = prompt("Enter a number:");
// if(x > 9/2){
//   alert("Higher half of 9");
// }else if(x < 9/2){
//   alert("Lower half of 9");
// }else{
//     alert ("Your number equals half of 9")
// }

// console.log("Bài Tập 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n");
// let n = prompt("Enter n = ");
// let x = prompt("Enter x = ");
// if(x  < n/2){
//   alert(x + " is in lower half of " + n)
// }else if(x > n/2){
//   alert(x + " is in higher half of " + n)
// }else{
//   alert(x + " equals half of " + n)
// }

// console.log("Bài Tập 8: Write a script to check if a number is even (divisible by 2) or odd number");
// let x = prompt("Enter your number:");
// if(x%2 == 0){
//   alert( x + " is an even number");
// }else{
//   alert( x + " is an odd number");
// }

// console.log("Bài Tập 9: in L và H theo yêu cầu")
// let low = "L";
// let high = "H";
// for(let i=1; i <= 3; i++){
//  console.log(low);
// }
// for(let i = 1; i <= 3; i++){
//   console.log(high);
// }
//////////////////////////////////////////////////////////////
// let totalNumber = prompt("Enter your number");
// let low = "L";
// let high = "H";
// let number = (totalNumber/2) - ((totalNumber%2)/2);
// for(let i =1; i <= number; i++){
//     console.log(low);
// }
// for(let i =1; i <= totalNumber - number; i++){
//   console.log(high);
// }
////////////////////////////////////////////////////////
// let firstNumber = 0;
// let secondNumber = 1;
// for(let i=1; i <= 8/2; i++){
//  console.log(firstNumber);
//  console.log(secondNumber);
// }
//////////////////////////////////////////////////////
// let n = prompt("Enter your number:");
// let firstNumber = 0;
// let secondNumber = 1;

// if (n %2 == 0){
//   for(let i=1; i <= n/2; i++){
//     console.log(firstNumber);
//     console.log(secondNumber);
//   }
// }else{
//   for(let i=1; i <= n/2; i++){
//     console.log(firstNumber);
//     console.log(secondNumber);
//   }
//   console.log(firstNumber);
// }

// console.log("Bài Tập 10: Write a script to calculate the BMI (Body Mass Index) of a person");
// let massUser = prompt("Enter your weigh in kg:");
// let heightUser = prompt("Enter your height in cm:");
// heightUser = heightUser/100;
// let bmiUser = massUser / (heightUser*heightUser);
// if(bmiUser < 16){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Severely underweight");
// }else if( 16 <= bmiUser < 18.5){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Underweight");
// }else if(18.5 <= bmiUser <25){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Normal");
// }else if(25<= bmiUser < 30){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Overweight");
// }else if(bmiUser >= 30){
//   alert("Your BMI = " + bmiUser);
//   alert("You are Obese");
// }

// console.log("Bài Tập Câu điều kiện If-Else");
// let a = prompt("Enter a");
// let b= prompt("Enter b");
// let c = prompt("Enter c");
// let delta = b*b - (4*a*c);
// if(delta>0){
//   console.log("Phương Trình Có 2 Nghiệm Phân Biệt");
// }else if(delta<0){
//   console.log("Phương Trình Vô Nghiệm");
// }else{
//   console.log("Phương Trình Có 1 Nghiệm Duy Nhất");
// }

// Vẽ Hình Vuông:
// function drawSquare(){
// for(let i=1; i <= 4; i++){
// 	fd(100);
//   	lt(90);
// }
// }
// drawSquare();

//Vẽ Hình Tam Giác:
// clear();
// lt(60);
// function drawTriangle(){
// 	for(let i = 1; i <=3; i++){
//     	fd(150);
//      lt(120);
//     }
// }
// drawTriangle();

// Vẽ Hình Ngũ Giác
// clear();
// function draw(){
// for(let i = 1; i <= 5; i++){
// 	fd(150);
//   	rt(72);
// }
// }
// draw();

//Vẽ Hình Lục Giác
// clear();
// function draw(){
// for(let i = 1; i <= 6; i++){
// 	fd(150);
//   	rt(60);
// }
// }
// draw();

//Bai 12
// Ve hinh theo so canh user nhap
// clear();
// function draw(){
// let x = prompt("Enter number of edge:")
// for(let i = 1; i <= x; i++){
// 	fd(150);
//   	rt(360/x);
// }
// }
// draw();

// Vẽ Hình Tròn (Nhap 999)
// clear();
// function draw(){
// let x = prompt("Enter number of edge:")
// for(let i = 1; i <= x; i++){
// 	fd(1);
//   	rt(360/x);
// }
// }
// draw();


//Bài 13:
// clear();
// function draw() {
//   let x = prompt("Enter number of polygons: ");
//   for (let i = 1; i <= x; i++) {
//     for (let j = 1; j <= i + 2; j++) {
//       fd(100);
//       rt(360 / (i + 2));
//     }
//   }
// }
// draw();

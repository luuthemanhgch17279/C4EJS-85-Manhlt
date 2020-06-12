console.log("Bai 1: =========================");
console.log("================================");
console.log("Trong JavaScript, cac truong hop gay ra loi syntax (SyntaxError) bao gom: ");
console.log("1. Biến được khởi tạo bắt đầu bằng số.");
console.log("2. Biến được khởi tạo chưa những ký tưn đặc biệt.");
console.log("3. Biến được khởi tạo trùng tên với các từ khóa");
console.log("Ví dụ cho các trường hợp gây lỗi khi khai báo biến");
console.log("VD1 Bien bat dau bang so: let 5it");
console.log("VD2 Bien chua ky tu dac biet: let  abc@xyz");
console.log("VD3 Bien trung voi keyword: let case")
console.log("In JavaScript, how to check a variable data types?")
console.log("Sử dụng the typeof operator để kiểm tra kiểu dữ liệu của biến")
console.log("================================");
console.log("Bai 2: =========================");
console.log("Aswer: 1-b, 2-a, 3-e, 4-c")
console.log("Bai 3: =========================");
let message = 'Coding is great';
console.log(message);
let studentCount = 0;
console.log("Student Count: " + studentCount);
console.log("Bai 4: =========================");
console.log("a.")
message = 'Coding might not be easy, but still great';
console.log(message);
console.log("b.")
studentCount = 16;
console.log("Student count: " + studentCount);
console.log("c.")
let z1 = message.toLowerCase();
console.log(z1);
console.log("d.")
studentCount++;
console.log("Student count: " +studentCount);
console.log("Bai 5: =========================");
alert("have nice a good day!!!!!");
console.log("Bai 6: =========================");
let name = prompt("Hi friend, What is your name?")
alert("Hello " + name);
console.log("Bai 7: =========================");
let fName = prompt("Enter your first name: ");
let lName = prompt("Enter your last name: ");
alert( "Hello " + fName + " " + lName);
console.log("Bai 8: =========================");
let areaSquare = prompt("Enter length of the square: ");
alert("The area square is " + areaSquare*areaSquare)
console.log("Bai 9: =========================");
let areaCircle = prompt("Enter the radius of the circle: ");
alert("The area circle is " + areaCircle*areaCircle*3.14);
console.log("Bai 10: =========================");
let convert = prompt("Enter the temperature in Celius");
alert(convert+"(C) = " + (convert*1.8) + 32 + "(F)");
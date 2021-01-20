//Bai 1: Khong su dung condition. Hay viet chuong trinh
//Khi nhap vao 0 --> hien thi ra 1
//Khi nhap vao 1 --> hien thi ra 0

// var x = Number(prompt('Nhap 0 hoac 1'));
// var so1 = 1-x;
// console.log (so1);

//B2: Cho mảng sau [9,8,7,6,5,4,3,2,1]. Không dùng vòng lặp, không dùng condition, hãy in ra màn hình
//các số chẵn có trong mảng
// var arr = [9,8,7,6,5,4,3,2,1];
// var SoChan = arr.filter (function (num) {
//     return num % 2 == 0;
// })
// console.log ('Các số chẵn là: ', SoChan)


//B3: Xây dựng ứng dụng như sau
// onmouseover, onclick là bắt sự kiện khi ta di chuột vào 1 phần tử
// window.onload = function () { //window.onload là đợi cho đến khi toàn bộ file HTML load hết trên trang web thì mới chạy JS, và lúc này chúng ta có 
//     let $no = document.getElementById("No") //$no được sử dụng để xem biến đó có dùng DOM hay không
//     let opacity = 1;
// $no.addEventListener('mouseover', function() {
//     $no.style.position = "absolute";
//     let randomLeft = Math.random() * (window.innerWidth - 300);
//     let randomTop = Math.random() * (window.innerHeight - 200);
//     $no.style.top = randomTop + 'px';
//     $no.style.left = randomLeft + 'px';
//     opacity = opacity - 0.2;
//     $no.style.opacity = opacity; // thuộc tính opacity là làm mờ đi 1 khối 
// })
// }

// import {hellobyVN, hellobyLaos} from "./hello.js"
// hellobyVN();
// hellobyLaos();

// import goodbye from "./goodbye.js"
// goodbye();

// var dayso = [2,9,4,5,7,3,11,13,14,15,19];
// console.log ('Dãy số là:', dayso);
// var i = 2;
// var SNT = dayso.filter(function (num){
//     if (num % 2 !== 0) {
//         return num;
//     }
// })
// console.log ('Số nguyên tố là: ', SNT);

// var flag = true;
// function KTSNT(n)
// {
//     if (n < 2) {
//         flag = false;
//     }
//     else {
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
// }
// var arr = [];
// var x1 = prompt ('Nhập số thứ 1');
// var x2 = prompt ('Nhập số thứ 2');
// var x3 = prompt ('Nhập số thứ 3');
// arr.push(x1);
// arr.push(x2);
// arr.push(x3);
// var SNT = arr.filter (function(n) {
//     if (flag == true) {
//         return n;
//     }
// });
// console.log ('Các số nguyên tố là: ', SNT);

//Bài tập: Nhập từ bàn phím 1 dãy số, mỗi số cách nhau bởi dấu ",". Tìm và in ra những số nguyên tố có trong dãy số đó
    //VD: Input: 2, 9, 4, 5, 7
    //Output: 2, 5, 7
// var arr = [];
// var SNT;
// function dayso() {
//     for (let i = 0; i < 4; i++) {
//         SNT = Number(prompt("Nhập số bạn muốn kiểm tra số nguyên tố: "));
//         arr.push(SNT)   
//     }
//     return arr;
// }
// arr = dayso();
// console.log(arr);
// for (let j = 3; j >= 0; j--) {
//     let count = 0;
//     console.log(arr);
//     if (arr[j] < 2) {
//         arr.splice(j, 1);
//     } else {
//         for (let i = 2; i < arr[j]; i++) {
//             if (arr[j] % i == 0) {
//                 count++ ;
//             }
//         }
//         console.log(count)
//         if (count >= 1) {
//             arr.splice(j, 1);
//         }
//        count = 0; 
//     }
// }
// alert(arr)
//kiểm tra từng giá trị trong mảng nhập vào với index tương ứng, ví dụ nếu arr[3] = 8, chia hết cho 2 thì sẽ tăng 
//biến count lên 1 lần và sẽ splice đi giá trị của arr[3], và đồng nghĩa số đó không là số nguyên tố
//ngược lại nếu giá trị arr[j] không chia hết cho i = 2 thì biến count sẽ không tăng và cũng sẽ không splice giá trị đó, 
//và số đó là số nguyên tố
// function odd1() {
//     let number = Number(document.getElementById("int1").value);
//     if (number > 0) {
//         document.getElementById("display").innerHTML = "positive";
//     }

//     else {
//         document.getElementById("display").innerHTML = "negative";
//     }
// }



//1
// let word = "vishanth";
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]); 
// }

// //2
// let text = "fathir";
// console.log(text.length);


// //3
// let text1 = "     robin";
// let result = text1.trimStart();
// console.log(result.length);

// //4
// let text2 = "      robin      ";
// let result1 = text2.trimEnd();
// console.log(result1.length);

// //5
// let name = "Vishanth";
// console.log(typeof name);
// let age = 25;
// console.log(typeof age);

// //6
// let text3 = "vishanth";
// console.log(text3.toUpperCase());

// let text4 = "VISHANTH";
// console.log(text4.toLowerCase());

// //7
// let usertext = "mehdi"
// console.log(usertext[4])

// //8
// let x = "I Like java"
// console.log(x.replace("java", "javascript"))  

// //9
// let y = "bike";
// console.log(y.charAt(0));


// let text2 = "apple banana orange"
// let fruits = text2.split(" ");
// console.log(text2.split(" ").join("_"))

// var fruitString = fruits.join("_");
// console.log(fruitString)


// let name = "I Love learning javascript";
// let text = name.split(' ').join("$")
// console.log(text)


// let text = "Iam learning JavaScript";
// console.log(text.split(" ").reverse().join(" "))

// let arr = [10, 20, 30, 40, 50]
// arr.push(60)
// console.log(arr)

// arr.pop()
// console.log(arr)


// let mynum = [4, 2, 7, 1, 9];
// let result = []
// for(let i=0; i<mynum.length; i++){
//     if(mynum[i] >5){
//         result.push(mynum[i])

//     }
// }

// console.log(result)


// let muyNum = [3, 8, 11, 14, 20, 7, 6];
// let result = []

// function sub(a){
//     console.log(a * a)
// }
// sub(8)


// let num = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7]
// let result = []
// for (let i = 0; i < num.length; i++) {
//     if(num[i]%2 != 0){
//         result.push(num[i])
//     }
// }
// console.log(result)

// let arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let mapres = arr3.map((value, index, array) => {
//     return value * 10
// })
// console.log(mapres)


// let arr5 = [2, 4, 6, 8, 10];
// let maprp = arr5.map((value) => {
//     return value / 2
// })
// console.log(maprp);



// let arr6 = [1, 2, 3, 4, 5];
// let mapr = arr6.map((value) => {
//     return value * value
// })
// console.log(mapr);

//sum 1
// let num = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7]
// let result1 = num.filter((value, index) => {
//     return num.indexOf(value) == index;
// });

// console.log(result1)


//sum 2
// let num1 = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7]
// let result2 = num1.filter((value, index) => {
//     return num1.indexOf(value) != index;
// });

// console.log(result2)


//sum 3
// let arr = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7];
// arr.sort((a, b) => b - a);
// function largest(n) {
//     return arr.find((value, index) =>
//         index == n - 1);
// }

// console.log(largest(2));


// sum 3 
// let arr = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7];
// let result3 = arr.filter((value, index) => {
//     return arr.indexOf(value) == index;
// });
// result3.sort((a, b) => {   
//     return b - a;                 // [9, 7, 6, 5, 2, 1, 0]
// });
// function largest(n) {
//     return result3.find((value, index) => {
//         return index == n - 1;
//     });
// }

// console.log(largest(1));


// sum 4  
// let arr2 = [9, 0, 2, 5, 6, 7, 0, 6, 1, 7];
// let result4 = arr.reduce((total, value) => {
//     return total + value;
// });

// console.log(result4);


var mydata = { name: "vishanth", age: 21, location: "chennai" }

// console.log(mydata)
// console.log(mydata.name)


// for(let data in mydata){
//     console.log(mydata[data])
// }


let userResponse = [
    { name: "person1", age: 2 },
    { name: "person2", age: 4 },
    { name: "person3", age: 3 },
    { name: "person4", age: 8 },
    { name: "person5", age: 5 },
    { name: "person6", age: 9 },

]

// console.log(value.name)

let user = userResponse.filter((value) => {
    return value.age > 5;
});

// console.log(user)

// console.log(Object.values(mydata))


/// IMPORTANT
// let number = (a, b) => {
//     let arr2 = [];
//     for (let i = 0; i < a; i++) {
//         arr2.push(i);
//     }
//     let arr3 = arr2.filter((value, index) => {
//         let count = ((value - 1) % 9) + 1;

//         if (count == b) {
//             return value;
//         }
//     });
//     console.log(arr3);
// }

// console.log(number(100, 3));


//1
// let orders = [
//     { orderId: 101, amount: 250 },
//     { orderId: 102, amount: 999 },
//     { orderId: 103, amount: 50 },
//     { orderId: 104, amount: 500 },
//     { orderId: 105, amount: 75 },
// ];

// let validOrders = orders.filter((value) => {
//     value.amount >= 100
// });

// console.log(validOrders);


//2
// let cars = [
//     { model: "Car A", mileage: 15 },
//     { model: "Car B", mileage: 22 },
//     { model: "Car C", mileage: 18 },
//     { model: "Car D", mileage: 25 },
//     { model: "Car E", mileage: 12 },
// ];

// let midMileageCars = cars.filter((value) => 
//     value.mileage >= 15 && value.mileage <= 22
// );

// console.log(midMileageCars);


//3
// let employees = [
//     { name: "Arun", dept: "HR", salary: 30000 },
//     { name: "Bala", dept: "IT", salary: 55000 },
//     { name: "Chitra", dept: "IT", salary: 60000 },
//     { name: "Deepa", dept: "Sales", salary: 40000 },
//     { name: "Elango", dept: "IT", salary: 45000 },
// ];

// let itHighEarner = employees.find((value) => 
//     value.dept === "IT" && value.salary > 50000
// );

// console.log(itHighEarner);


//4
// let students = [
//     { name: "Ravi", marks: 45 },
//     { name: "Kumar", marks: 72 },
//     { name: "Anitha", marks: 33 },
//     { name: "Divya", marks: 88 },
//     { name: "Suresh", marks: 50 },
// ];

// let sorted = students.sort((a, b) => {
//     return b.marks - a.marks
// });

// console.log(sorted);


//5
// let students = [
//     { name: "Ravi", marks: 45 },
//     { name: "Kumar", marks: 72 },
//     { name: "Anitha", marks: 33 },
//     { name: "Divya", marks: 88 },
//     { name: "Suresh", marks: 50 }
// ];

// let result = students.map((value) => {
//     return value.name.toUpperCase();
// });

// console.log(result);


// console.log(1)
// console.log(2)
// setInterval(() => {
//     console.log(3)
// }, 1000)
// console.log(4)
// console.log(5)


const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 3000)
})


async function testfun() {
    console.log(1)
    let proData = await pro3
    console.log(proData)
    console.log(3)
}

testfun()
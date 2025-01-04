
// t1
var input =[ 1 ,2 , 3, 4 ,5]
console.log(input.toString())
console.log("-------------------")

// t2
var input2 =[ 1 ,2 , 3, 4 ,5]
for (x=0; x<=input2; x++);
console.log(input2.join())
console.log("-------------------")

// t3
var input2 =[ 1 ,2 , 3, 4 ,5]
for (x=0; x<=input2; x++);
console.log(input2.join([","]))
console.log("-------------------")

// t4

var input =[ 1 ,2 , 3, 4 ,5]
console.log(Array.isArray(input));
console.log("-------------------")

// t5

console.log("-------------------")

// m1
var input1= [1, 2, 3]; 
var input2= [4, 5, 6];
console.log(input1.concat(input2))
console.log("-------------------")

// m2
var input3= [0,1, 2, 3 , 4 ,5]; 
console.log(input3.indexOf(1)+",",
input3.indexOf(2)+",",
input3.indexOf(3)+",",
input3.indexOf(4)+",",
input3.indexOf(5)
)

console.log("-------------------")

// M3
var input1= [1, 2, 3, 4, 5, 6]
console.log(input1.slice(0,2)+","+input1.slice(4))
console.log("or")
var input2 =[ 1 ,2 , 3, 4 ,5,6]
console.log(input2.slice(0,2,"+"))
console.log(input2.slice(4,6))
console.log("-------------------")
// m4
 var Input = [1, 2, 3, 4, 5]; 
 input1.splice(2);
 input1.splice(0,1);
 console.log(input1)

// m5
var input1= '1, 2, 3, 4, 5, 6';
console.log(input1.split())
console.log("-------------------")

// m6
 var input = [1, 2, 3, 4, 5];  
  console.log(input.at(4))
  console.log("-------------------")

//   m7
var input =(1, 2, 3);

console.log(Array.of(1,2,3))
console.log("-------------------")

// m8

var input = [1, 2, 3, 4, 5];  
var print = input.fill


// m10
var fr = ["apple" , "banana" , "cherry"]
console.log(fr.sort())
console.log("-------------------")

// m11
var fr = ["apple" , "banana" ," cherry"]
console.log(fr.reverse());
console.log("-------------------")

// a1
// var input = [1, 2, 3, 4, 5];  
//   console.log(input.map(input=>input*2))
//   console.log("-------------------")

//   a2

var input = [1, 2, 3, 4, 5];  
  console.log(input.filter(input=>input))

//   console.log("----8+9+1+2+3---------------")
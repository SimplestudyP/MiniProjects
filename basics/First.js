console.log("Hello from JS")
name="Psquare"
console.log(name)
age=20
price=69.69
let x=null
let y=undefined
z=null
z1=undefined
isTrue=false
console.log(x + " "+ y);
let fuck=0
fuck=1
fuck=2
console.log(fuck);
const pi=3.14
x=BigInt("12345")
y=Symbol("Panda")
console.log(typeof(x)+" "+typeof(y)+" "+typeof(z))
console.log(fuck**fuck) //exponent
console.log(price===pi) //equal to with same sata type
console.log(price!==age) 
let fullname=prompt("Enter your name:") //this works on website only not in terminal
console.log("Welcome Miss "+ fullname)
for (let i of fullname) { //for array and strings
    console.log(i+" ")
}
let student={  //defining objects just like structs
    name:"Ayudh Raj", //key,value pairs
    age: 20,
    cgpa: 9.2,
    isPass: true
}
console.log(student["name"]) //or student.name ->returns value of key
for (i in student) {
    console.log(i) //returns keys in order
    console.log(student[i]) //returns values at key i
}
console.log(student["name"].length)
console.log("Body count=", fuck, "name=", fullname)
console.log(`Body count= ${fuck} name= ${fullname}`) //template literal
str="Hello from JS"
console.log(str.trim())//removes whitespaces only from last and front
//without assigning back to str these lose their value as strings are immutable
str=str.slice(6,13) //removes from 0 to 5
str=str.concat(" Concatenated string")
str=str.replace("JS","JAVA") //similarly replaceAll
console.log(str)
console.log(str.charAt(0))
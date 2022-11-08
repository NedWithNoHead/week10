// alert("HE IS COMING BACK NEXT WEEK")
// console.log("RUN")

// for (let i =1; i < 1025; i = i *2) {
//     console.log(i);
// }

// let i = 1
// while (i<1024){
//     i = i* 2
//     console.log(i)
// }

// let input = "";

// do {
//     input = prompt("What is your name?");
// }while(!isNaN(Number(input)));
//     console.log(input);

// alert(`Welcome  ${input}`);

let fruits = ['Apple', 'Banana'];
fruits.push('Orange');
fruits.pop();
fruits.unshift("Mango");
fruits.shift()

console.log(fruits)

for (let i = -; i < fruits.length; i++)
{
    console.log(fruits[i]);
}
for (let item in fruites)
{
    console.log(item);
}

const  person = {
    name:['Bob','Smith'],
    age: 32,
    gender: 'male',
    interests: ["music", "hiking"],
}
console.log(`My name is ${person.name[0]} ${person.name[1]}`)
console.log(`I am interested in ${interests[0]} and ${interests[1]}`)

for (let props in person)
{
    console.log(`My ${prop} is ${person[prop]}`)
}

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
for (let stud of students)
{
    if(stud.program === "CIT" && stud.GPA > 3)
    console.log(stud)
}
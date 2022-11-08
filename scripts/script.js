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

let input = "";

do {
    input = prompt("What is your name?");
}while(!isNaN(Number(input)));
    console.log(input);

alert(`Welcome  ${input}`);
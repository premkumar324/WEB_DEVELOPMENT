// // // let i="prem";
// // // for(let x of i){
// // //     console.log(x);
// // // }
// // // const student={
// // //     name:"prem",
// // //     class:"se",
// // //     roll_no:43
// // // };
// // // for(let i in student){
// // //     console.log(student[i]);
// // // }
// // // console.log(student.i);
// // // // console.log("prem is ")
// // // // let x=200;
// // // // x=100;
// // // // const student={
// // // //     name:"Prem",
// // // //     class:"SE",
// // // //     Roll_no:32
// // // // };
// // // // console.log(the roll no of student named ${student.name} is ${student.Roll_no})
// // // let x="prem";
// // // console.log(x.toUpperCase());

// // // let name = prompt("Enter your name");
// // // console.log(name);
// // // name = name.trim().replace(/\s+/g, '');
// // // let len = name.length; // Correctly accessing the length property
// // // console.log(@${name}${len});
// // // let marks=[2,5,464,34,56,32,67,54,46,767,45,34,34];
// // for(let i of marks){
// //     console.log(i);
// // }
// // let marks=[85,97,44,37,76,60];
// // let sum=0;
// // for(let x of marks){
// //     sum+=x;
// // }
// // // console.log("avg marks is",sum/marks.length)
// // let prices=[250,645,300,900,50];
// // for(let i in prices){
// //     prices[i]=prices[i]*0.9;
// // }
// // prices.push("hello");
// // prices.pop(2);
// // prices.push("hell0","hi","bye");
// // function suma(a,b){
// // let c=a+b;
// // return c;
// // };
// // const sum =(a,b)=>{
// //     let c=a+b;
// //     return c;
// // }
// // function vowel(str){
// //     let count =0;
// //     for(let i of str){
// //         if(i=="a" || i=="e" || i=="o"||i=="i"||i=="u") count++;
// //     }
// //     return count;
// // }
// // let vowels=(str)=>{
// //     let count =0;
// //     for(let i of str){
// //         if(i=="a" || i=="e" || i=="o"||i=="i"||i=="u") count++;
// //     }
// //     return count;
// // }
// // console.dir(document.getElementById("heading"));
// // let elements =document.querySelector(".headclass");
// // console.log(elements);
// // console.log(elements.tagName);
// // console.log(elements.innerHTML);
// // console.log(document.body.lastChild);
// // elements.innerHTML="priyanka is a bot";
// // console.log(elements.textContent);
// // let hello=document.querySelector("#prac");
// // hello.textContent=hello.textContent+" from Apna College students";
// // let elements=document.querySelectorAll("p");
// // console.log(elements[0].textContent="hello world2");
// // let head=document.querySelector("#prac");
// // head.setAttribute("name","cat")
// // let name=head.getAttribute("name");
// // console.log(name);
// // let div=document.querySelector("div");
// // // div.style.backgroundColor="green";
// // // div.style.backgroundColour="red";
// // let btn=document.createElement("button");
// // btn.innerText="click me!";
// // div.append(btn);
// // div.prepend(btn);
// // div.before(btn);
// // div.after(btn);
// // let btn=document.createElement("button");
// // btn.innerText="click me!";
// // btn.style.backgroundColor="red";
// // btn.style.color="white";
// // document.querySelector("body").append(btn);
// // let para=document.createElement("p");
// // para.setAttribute("class","prime");
// // para.style.backgroundColor("yellow");
// // let div=document.querySelector("#noob");
// // div.classList.add("newclass");
// // let bt1=document.querySelector("#btn");
// //  bt1.addEventListener("click",()=>{
// //      console.log("button clicked");
// //  })
// // bt1.onclick=()=>{
// //     console.log("button was clicked");
// // }
// // employee={
// //     name:"priyanka",
// //     salary:8000,
// //     tax:0,
// //     cal_tax(){
// //         this.tax=this.salary*0.30;
// //     }
// // }
// // raju={
// //     name:"raju shinde",
// //     salary:                                                                                                                                                                         ,
// //     tax:0
// // }
// // raju.__proto__=employee;
// // raju.cal_tax();
// // console.log(raju.tax);
// class toyota{
//     constructor(brand,mileage){
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("car started");
//     }
//     stop(){
//         console.log("car stopped");
//     }
//     setbrand(brand){
//         this.brand=brand;
//     }
// }
// // fortuner.setbrand("bmw");
// let fortuner=new toyota("rr",45);
// fortuner.start();
// fortuner.stop();
// console.log(fortuner.brand," ",fortuner.mileage)
// class volkswagon extends toyota{
//     constructor(brand,mileage,engine){
//         super(brand,mileage);
//         this.engine=engine;
//         console.log("child object created");    
//     }
// }
// let swift=new volkswagon("lexus",56,"v56");
// swift.setbrand("audi");
// let greeting=()=>{
//     console.log("hello");
// }
// setTimeout(greeting,4000);
url="https://cat-fact.herokuapp.com/facts";
// let promise=fetch(url);
// console.log(promise);
let para=document.querySelector("#catfacts");
const getFacts=async()=>{
    let response=await fetch(url);
    console.log(response);
    let data=await response.json();
    para.textContent=data[0].text;
    
}
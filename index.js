//Exercice1
var x=5
let y=15
const z= 2
console.log(x,y,z)
//exercice2
//function testScope(){
  //if(true){
    //  var a="var visibke partout";
      // let b="let visible ici seulement";
    //}
    //console.log(a);
   //console.log(b);
//}
testScope();
//exercice 3
function sayHello(name){
    return ` Bonjour ${name}`;
}
const sayHelloArrow=(name)=>Bonjour ${name};
console.log( sayHello("chaimaa"));
console.log( sayHelloArrow("chaimaa"));
//les deux sont exactement la meme  chose tu donne parametre il affiche 
//exercice4
const person = {
  name: "sara",

 
  sayHello: function() {
    console.log("bonjour " + this.name);
  },

  sayHelloArrow: () => {
    console.log("bonjour " + this.name);
  },
};
person.sayHello();        
person.sayHelloArrow();   
import message ,{pi,carre}from 
"./math.js";
message();
console.log("pi=",pi);
console.log("carre de 5=",carre(5));
//exercice5
const fruits =["pomme","banane","orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);
const nums =[1,2,3,4,5];
console.log(nums.map(n=>n*2));
console.log(nums.filter(n=>n%2===0));
console.log(nums.reduce((sum,n)=>sum+n,0));
//exrcice7
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));
//exercice8
const user = { id: 1, name: "Ali", city: "Rabat" };
const { name, city } = user;
console.log(${name} habite à ${city});
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
//exercice9
const p = new Promise((resolve) => {
 setTimeout(() => resolve("Opération terminée !"), 2000);
});
 
p.then(result => console.log(result));
//exercice10
async function getUsers() {
 try {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();
   console.log(data);
 } catch (e) {
   console.error("Erreur :", e.message);
 }
}
 
getUsers();
//exercice11
const names = "Nadia";
const hour = new Date().getHours();
console.log(Bonjour ${names}, il est ${hour}h);
//exercice12
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
 
function sum(...numbers) {
 return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
//execice13
const settings = { theme: null };
console.log(settings.theme ?? "light"); 
 
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); 
console.log(user2.address?.city);  
//exercice14
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
const text=document.getElementById("loading-text");

const words=[

"Initializing...",

"Loading Neural Engine...",

"Connecting Database...",

"Starting AI...",

"Access Granted"

];

let i=0;

let interval=setInterval(()=>{

text.innerHTML=words[i];

i++;

if(i>=words.length){

clearInterval(interval);

setTimeout(()=>{

document.getElementById("loader").style.display="none";

document.getElementById("dashboard").style.display="block";

},800);

}

},800);

function clock(){

const d=new Date();

document.getElementById("clock").innerHTML=

d.toLocaleTimeString();

}

setInterval(clock,1000);

clock();

let u=0;

let g=0;

setInterval(()=>{

if(u<15284){

u+=93;

document.getElementById("users").innerHTML=u.toLocaleString();

}

if(g<2481){

g+=15;

document.getElementById("groups").innerHTML=g.toLocaleString();

}

},20);
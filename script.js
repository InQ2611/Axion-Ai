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
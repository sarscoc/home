const characters=[

{
icon:"🙂",

image:"images/character001.png",

mode:"many",

head:[
"髪を触るの？",
"まだ触るんだね。"
],

body:[
"どうしたの？",
"近いね。"
],

repeat:[
"そんなに気になる？"
]

},


{
icon:"😎",

image:"images/character002.png",

mode:"once",

head:[
"……。"
],

body:[
"用があるなら言え。"
]

}

];



let current=0;


let count={

head:0,

body:0

};



function loadCharacter(){

let c=characters[current];

document.getElementById("character").src=c.image;

}



function talk(type){


let c=characters[current];

count[type]++;


if(
c.mode==="once"
&&
count[type]>1
)
return;



let words;


if(
count[type]>=3
&&
c.repeat
){

words=c.repeat;

}else{

words=c[type];

}


document.getElementById("message")
.innerText=
words[
Math.floor(Math.random()*words.length)
];

}



document.getElementById("head")
.onclick=()=>talk("head");


document.getElementById("body")
.onclick=()=>talk("body");





/* キャラ一覧 */


const grid=document.getElementById("iconGrid");


characters.forEach((c,i)=>{


let div=document.createElement("div");

div.className="icon";

div.innerText=c.icon;


div.onclick=()=>{


current=i;

count={head:0,body:0};

loadCharacter();


document.getElementById("characterMenu")
.style.display="none";


};


grid.appendChild(div);


});





document.getElementById("characterBtn")
.onclick=()=>{

document.getElementById("characterMenu")
.style.display="block";

};



document.getElementById("backgroundBtn")
.onclick=()=>{

document.getElementById("backgroundMenu")
.style.display="block";

};





document.getElementById("closeBG")
.onclick=()=>{

document.getElementById("backgroundMenu")
.style.display="none";

};




function changeBackground(img){

document.getElementById("game")
.style.backgroundImage=`url(${img})`;

}

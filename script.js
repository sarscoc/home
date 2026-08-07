const characters=[

{
icon:"🙂",
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
mode:"once",

head:[
"……。"
],

body:[
"用があるなら言え。"
]

},


{
icon:"👹",
mode:"angry",

head:[
"頭だぞ。"
],

body:[
"何をしている。"
],

repeat:[
"落ち着きたまえ。",
"いい加減にしろ。"
]

}

];



let current=0;

let count={
head:0,
body:0
};



const home=document.getElementById("home");
const select=document.getElementById("select");


function showCharacter(){

document.getElementById("character")
.innerText=
characters[current].icon;

}



function talk(type){


let c=characters[current];

count[type]++;


let list;


if(
c.mode==="once"
&&
count[type]>1
){

return;

}



if(
c.mode==="angry"
&&
count[type]>=3
){

list=c.repeat;

}else{

list=c[type];

}


document.getElementById("message")
.innerText=
list[Math.floor(Math.random()*list.length)];

}




document.getElementById("touchHead")
.onclick=
()=>talk("head");


document.getElementById("touchBody")
.onclick=
()=>talk("body");





document.getElementById("openSelect")
.onclick=()=>{

home.style.display="none";

select.style.display="block";

};



document.getElementById("back")
.onclick=()=>{

select.style.display="none";

home.style.display="block";

};



const grid=document.getElementById("grid");


characters.forEach((c,i)=>{

let div=document.createElement("div");

div.className="icon";

div.innerText=c.icon;


div.onclick=()=>{

current=i;

count={
head:0,
body:0
};

showCharacter();

select.style.display="none";

home.style.display="block";

};


grid.appendChild(div);

});



const d=new Date();

document.querySelector(".date")
.innerText=
`${d.getMonth()+1}/${d.getDate()}`;


showCharacter();

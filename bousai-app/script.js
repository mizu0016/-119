function next(id){

let screens=document.querySelectorAll(".screen");

screens.forEach(s=>{
s.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang="ja-JP";

function startVoice(){
recognition.start();
}

recognition.onresult=function(event){

let text=event.results[0][0].transcript;

document.getElementById("voice").innerHTML="あなた:"+text;

if(text.includes("火事")){
alert("火事ですね！住所を教えてください");
}

if(text.includes("救急")){
alert("救急ですね！意識はありますか？");
}

};

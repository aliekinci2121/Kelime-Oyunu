// Kelimelerin listesi(en az 10 tane ekleyin)
const words=["merhaba","kalem","bardak","masa","bilgisayar","ayna","catal","bicak","bardak","havlu"]


let currentWord=""  // Su anki kelimeler
let shuffledWord=""//karsilastirilmis kelmiler

const wordContainer=document.getElementById("word-container")
const randomButton=document.getElementById("random-buttom")
const checkButton=document.getElementById("check-button")
const resultMessage=document.getElementById("result-message")

//!rastgele kelime secmek

function selectRandomWrd(){
    currentWord=words[Math.floor(Math.random()*words.length)]
    shuffledWord=currentWord.split('').sort(()=>Math.random() -0.5).join('')
    wordContainer.innerText=shuffledWord
    resultMessage.innerText=""
}

//!Dogru siralamayi kontrol etmek

function checkWord(){
    if(shuffledWord===currentWord){
        resultMessage.innerText="DOGRU!"
    }else{
        resultMessage.innerText="YANLIS!"
    }
}

//! Rastgele kelimeyi secmek icin 'random' dügmesine tiklandiginda

randomButton.addEventListener("click",selectRandomWrd)

//! Siralamayi kontrol etmek icin 'Check' dügmesine tiklandiginda

checkButton.addEventListener("click",checkWord)

//!sayfa yuklendiginde ilk kelimeyi sec
selectRandomWrd()
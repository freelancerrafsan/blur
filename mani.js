const image = document.getElementById("image");
const btnBlur = document.getElementById("btnBlur");
const btnCler = document.getElementById("btnCler");
const numbarCount = document.getElementById("numbarCount");

let isNumber = 0;
let intervel;

function blurFun(){
    isNumber++;
    image.style.filter = `blur(${isNumber}px)`;
    numbarCount.innerText = isNumber;
    if(isNumber === 100){
        clearInterval(intervel);
    }
    
    if(isNumber <= 9){
        numbarCount.innerText = "0"+isNumber;
    }

    if(isNumber >= 100){
        btnBlur.disabled = true;
    }
    
}


function clerFun(){
    isNumber--;
    image.style.filter = `blur(${isNumber}px)`;
    numbarCount.innerText = isNumber;
    if(isNumber === 0){
        clearInterval(intervel);
    }
    if(isNumber <= 9){
        numbarCount.innerText = "0"+isNumber;
    }
}





btnBlur.addEventListener('click',()=>{
    intervel =  setInterval(blurFun,15);
})

btnCler.addEventListener('click',()=>{
    intervel =  setInterval(clerFun,15);
})
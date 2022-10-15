const nextBtnEl = document.querySelector(".next");
const prevBtnEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img")

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

nextBtnEl.addEventListener("click", () =>{
    currentImg++
    updateImg()
});

prevBtnEl.addEventListener("click", () =>{
    currentImg--
    updateImg()
});

updateImg()


function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    setTimeout(() =>{
        currentImg++
        updateImg()
    },3000)
}


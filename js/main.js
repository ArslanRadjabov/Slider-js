const elImgs = document.getElementById("imgs");
const elLeftBtn = document.getElementById("left");
const elRightBtn = document.getElementById("right");
const elImg = document.querySelectorAll("#imgs img");

let idx = 0;
elRightBtn.addEventListener("click", function(){
    idx++;
    changeImage();
});
elLeftBtn.addEventListener("click", function(){
    idx--; 
    changeImage();
});

function changeImage(){
    if(idx > elImg.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = elImg.length-1;
    }
    imgs.style.transform = `translateX(${-idx*500}px)`;
}
function run() {
    idx++;
    changeImage();
}

setInterval(run, 3000);
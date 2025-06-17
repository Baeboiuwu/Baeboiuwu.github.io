

setTimeout(() => {
    document.getElementById("loader").style.display = "none"
}, Math.floor(Math.random() * 400) + 200)

let curretslide = 0;

function autoslideshow(){
const sliderdiv = document.getElementById("slideshow");
const sliderimage = sliderdiv.querySelectorAll("img");
    sliderimage.forEach((img) => {
        img.style.display = "none";
    })
    sliderimage[curretslide].style.display = "block";

    curretslide++;
    curretslide = curretslide % sliderimage.length;

    setTimeout(() => {
        autoslideshow();
    }, 3 * 1000);
}

autoslideshow();

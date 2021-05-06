let dimensions = {
    x: "",
    y: ""
}
let images = [
    "https://media.giphy.com/media/1hqb8LwPS2xCNCpWH8/giphy.gif",
    "https://media.giphy.com/media/3oEhmK5PD21Of23JBK/giphy.gif",
    "https://media.giphy.com/media/l2R0cE5EqO3QHiCoU/giphy.gif",
    "https://media.giphy.com/media/Saavhnp9YYN7a/giphy.gif",
    "https://media.giphy.com/media/hpQcDH5EfJRwxm03Uh/giphy.gif",
    "https://media.giphy.com/media/26xBRiIYbyjCzYMAU/giphy.gif",
    "https://media.giphy.com/media/aftvlKz6bGzS0/giphy.gif",
]
let $contenedor = document.querySelector("#contenedor-eleccion");
let $btnNo = document.querySelector("#contenedor-eleccion");
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
const getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}
const setDimensions = () => {
    dimensions.y = $contenedor.offsetHeight;
    dimensions.x = $contenedor.offsetWidth;
    // console.log(dimensions);
}
const getDimensionsBody = () => {
    return {
        x: document.querySelector("body").offsetHeight,
        y: document.querySelector("body").offsetWidth,
    }
}
const translateButton = (e) => {
    // let dimensionsBody = getDimensionsBody();
    let x = getRandomNumber(dimensions.x / 2.8);
    let y = getRandomNumber(dimensions.y / 2);
    // console.log(x, y);
    // console.log(x, dimensionsBody.x);
    // if (x > dimensionsBody.x || y > dimensionsBody.y) {
    //     translateButton(e);
    // } else {
    e.target.style.transform = `translate(${x}px,${y}px)`;
    // }
}
window.onload = () => {
    setDimensions();

}
const reproducirMusica = () => {
    let music = document.getElementById("audio");
    music.play();
}
document.addEventListener("DOMContentLoaded", () => {


});
window.onresize = () => {
    setDimensions();
    document.querySelector("#btn-no").style.transform = "none";
}

document.querySelector("#btn-no").addEventListener("mouseover", (e) => {
    // detecto el button
    translateButton(e);
});
document.querySelector("#btn-no").addEventListener("click", (e) => {
    // detecto el button
    translateButton(e);
});
document.querySelector("#btn-no").addEventListener("focus", (e) => {
    // detecto el button
    translateButton(e);
});
document.querySelector("#btn-no").addEventListener("blur", (e) => {
    // detecto el button
    translateButton(e);
});
document.querySelector("#btn-si").addEventListener("click", (e) => {
    reproducirMusica();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'w-100 p-3 mx-2 my-2  transition duration-500 transform hover:scale-110 md:p-4 md:my-4  md:text-xl md:mx-4 color-primary bg-pink-400 border-none rounded-lg shadow-xl',
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({

        title: `<h2 class='color-secondary'>Ya Sabia que querías 😍💕😻 </h2>`,
        // icon: 'info',
        html: `
            <img src="${images[getRandomNumber(images.length)]}" alt="" srcset=""/>
        `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            'Vuelve a elegir si quieres 😍',
    }).then(function () {
        document.querySelector("#btn-no").style.transform = "none";
    })
});


// document.addEventListener

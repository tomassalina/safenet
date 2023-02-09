const mainHtml = document.getElementById("main");
const footerHtml = document.getElementById("footer");
const secPan = document.getElementById("pantalla");
const butDownload = document.getElementById("descarga");
const progreso = document.getElementById("progreso");
const cargar = document.getElementById("cargar");
let fin = false;
let cantidad = 0;

butDownload.addEventListener('click',function(){
    cargar.style.display = "block";
    let tiempo = setInterval(() => {
        cantidad += 1;
        progreso.style.width = `${cantidad}%`;
        if (cantidad == 100) {
            clearInterval(tiempo);
            fin = true;
            setTimeout(() => {
                mainHtml.style.display = "none";
                document.body.style.backgroundColor = "#2b2b2b"
                footerHtml.style.display = "none";
                secPan.style.display = "block";
                cargar.style.display = "none";
            }, 40);
        }
    }, 40);
});


// secPan.style.display = "none";

// // mainHtml.style.display = "none";
// // footerHtml.style.display = "none";

// butDownload.addEventListener('click', function () {


// })


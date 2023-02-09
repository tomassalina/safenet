var rootColorProgreso = document.documentElement;
// rootColorProgreso.style.setProperty("--color_p", "blue");
let inputUser = document.getElementById("username")
let inputPassword = document.getElementById("password");
let contraseña = "";
let inicioSe = document.getElementById("iniciar");
let progreso = document.getElementById("progreso");
let progresoDat = document.getElementById("progreso-datos");
let puntaje = 0;

//Desactivo submit y hago que limpie el password
inicioSe.addEventListener('click', function () {
    inputUser.value = "";
    inputPassword.value = "";
});


let comprobarContraseña = setInterval(() => {
    contraseña = inputPassword.value
    if (contraseña.length >= 8) {
        puntaje = 1;
        if(contieneNumeros(contraseña) && contieneMinus(contraseña)){
            puntaje = 2;
            if(contieneMayus(contraseña)){
                puntaje = 3;
                if(contieneSim(contraseña)){
                    puntaje = 4;
                }
            }
        }
    }
    switch(puntaje){
        case 0 :    
        progreso.setAttribute("class","progreso");
        progresoDat.innerHTML = "Inseguro";
        break;
        case 1 :    
        progreso.setAttribute("class","progreso progreso-1");
        progresoDat.innerHTML = "fácil";
        break;
        case 2 :         
        progreso.setAttribute("class","progreso progreso-2");
        progresoDat.innerHTML = "Buena";
        break
        case 3 :         
        progreso.setAttribute("class","progreso progreso-3");
        progresoDat.innerHTML = "Muy Buena";
        breakle.log("Mayus");
        case 4 :         
        progreso.setAttribute("class","progreso progreso-4");
        progresoDat.innerHTML = "Inhackeable";
        break
    }
}, 600);

function contieneNumeros(contraseña){
    let analizar =  Array.from(contraseña);
    return analizar.some(value => Number(value));
}
function contieneMinus(contraseña){
    const abc = "abcdefghijklmnñopqrstuvwxyz";
    let analizar = Array.from(contraseña);
    return analizar.some(value => abc.includes(value));
}
function contieneMayus(contraseña){
    const ABC = "ABCDEFJHIJKLMNÑOPQRSTUVWXYZ";
    let analizar = Array.from(contraseña);
    return analizar.some(value => ABC.includes(value));
}
function contieneSim(contraseña){
    const sim = `.,;:{[^¨+"'¿?¡!"#$%&/()=°¬|`;
    let analizar = Array.from(contraseña);
    return analizar.some(value => sim.includes(value));
}
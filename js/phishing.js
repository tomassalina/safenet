const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const contenedor = document.querySelector('#contenedor')
const saveBoton = document.querySelector('#save')
saveBoton.addEventListener('click', function () {
    const mensaje = 'Te robamos tus datos :)'
    contenedor.innerHTML = `
        <div class="card">
            <p class="mensaje">${mensaje}</p>
            <ul>
                <li>Nombre: ${nombre.value}</li>
                <li>Email: ${email.value}</li>
                <li>Contraseña: ${password.value}</li>
            </ul>

        </div>
    `
    contenedor.classList.add('open')
})

contenedor.addEventListener('click', function () {
    contenedor.classList.remove('open')
})

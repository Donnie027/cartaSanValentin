
let botonCarta = document.querySelector('.open');
const valentinImagen = document.querySelector('#botonCorazones');
let soundVale = new Audio('audio/teQuieroAsi.mp3');
    soundVale.currentTime = 2;

    window.addEventListener('load', () => {
        // Oculta el contenedor de la pantalla de carga
        document.querySelector('.cargaFond').style.display = 'none';
    });
    

const lanzarConfetti = () => {
    let config = {
        particleCount: 100, // Número de corazones
        spread: 70,         // Área de dispersión
        origin: { y: 0.4 }, // Origen de la dispersión (0 = arriba, 1 = abajo)
        colors: ['#ff0000', '#ff00ff'], // Colores de los corazones (puedes personalizarlos)
        shapes: ['heart']   // Utilizar forma de corazón
    };

    // Lanzar confeti con la configuración personalizada para corazones
    confetti(config);
}

botonCarta.addEventListener('click', ()=> {
    valentinImagen.classList.toggle('valentinCajaInvisible')
    soundVale.play();
    lanzarConfetti();
});

document.getElementById('botonCorazones').addEventListener('click', () => {
    // Configuración para lanzar corazones
    lanzarConfetti();
});
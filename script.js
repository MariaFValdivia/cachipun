document.addEventListener('DOMContentLoaded', () => {
    const opciones = {
        piedra: { mensaje: "Elegiste Piedra", valor: 1 },
        papel: { mensaje: "Elegiste Papel", valor: 2 },
        tijeras: { mensaje: "Elegiste Tijeras", valor: 3 }
    };

    let jugador = 0; 

    Object.keys(opciones).forEach((opcion) => {
        document.getElementById(opcion).addEventListener('click', () => {
            jugador = opciones[opcion].valor;
            alert(opciones[opcion].mensaje);
        });
    });

    const imagenes = [
        { src: 'images/piedra.png', mensaje: "Elegí piedra", valor: 1 },
        { src: 'images/papel.png', mensaje: "Elegí papel", valor: 2 },
        { src: 'images/tijeras.png', mensaje: "Elegí tijeras", valor: 3 }
    ];

    function eleccionPc(callback) {
        const imagenPc = document.getElementById("imagenEleccionPc");
        let contador = 0;
        const intervalo = setInterval(() => {
            imagenPc.src = imagenes[contador].src;
            contador = (contador + 1) % imagenes.length;
        }, 100); 

        setTimeout(() => {
            clearInterval(intervalo); 
            const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
            const eleccion = imagenes[indiceAleatorio];
            imagenPc.src = eleccion.src;
            setTimeout(() => {
                alert(eleccion.mensaje);
                callback(eleccion.valor);
            }, 100); // Breve retraso para asegurar que la imagen se actualice antes de mostrar la alerta
        }, 1000); 
    }

    function determinarResultado(jugador, pc) {
        if (jugador === pc) {
            return "Empate";
        } else if (
            (jugador === 1 && pc === 3) || 
            (jugador === 2 && pc === 1) || 
            (jugador === 3 && pc === 2)    
        ) {
            return "¡Ganaste! 🥳";
        } else {
            return "Perdiste 😢";
        }
    }

    document.getElementById("jugar").addEventListener('click', () => {
        if (jugador === 0) {
            alert("Por favor, elige una opción antes de jugar.");
            return;
        }

        eleccionPc((pc) => {
            const resultado = determinarResultado(jugador, pc);
            setTimeout(() => {
                alert(resultado);
            }, 100); // Breve retraso para asegurar que la alerta anterior se muestre primero
        });
    });
});

        // Aquí va la función mostrarFechaHora que definimos anteriormente
        function mostrarFechaHora() {
            const ahora = new Date();

            const opcionesFecha = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const opcionesHora = { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: false 
            };

            const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
            const horaFormateada = ahora.toLocaleTimeString('es-ES', opcionesHora);

            document.getElementById('fechaHora').innerHTML = `Fecha: ${fechaFormateada} <br> Hora: ${horaFormateada}`;
        }

        mostrarFechaHora();
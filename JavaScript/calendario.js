document.addEventListener('DOMContentLoaded', function () {
    const calendarioAnualContainer = document.getElementById('calendario-anual');

    // Definir anotaciones preestablecidas (puedes personalizar estas anotaciones)
    const anotacionesPreestablecidas = {
        "2024-01-01": "Año Nuevo",
        "2024-02-14": "Día de San Valentín",
        "2024-05-01": "Día del Trabajador",
        "2024-02-28": "Feliz Cumple" // Añadimos una anotación para el 28 de febrero
    };

    function crearCalendarioAnual() {
        for (let mes = 0; mes < 12; mes++) {
            const mesContainer = document.createElement('div');
            mesContainer.classList.add('mes');

            const mesHeader = document.createElement('div');
            mesHeader.classList.add('mes-header');
            mesHeader.textContent = obtenerNombreMes(mes);
            mesContainer.appendChild(mesHeader);

            const diasMesContainer = document.createElement('div');
            diasMesContainer.classList.add('dias-mes');
            mesContainer.appendChild(diasMesContainer);

            calendarioAnualContainer.appendChild(mesContainer);

            const primerDiaMes = new Date(2024, mes, 1);
            const ultimoDiaMes = new Date(2024, mes + 1, 0);

            for (let dia = 1; dia <= ultimoDiaMes.getDate(); dia++) {
                const diaActual = new Date(2024, mes, dia);
                const diaElemento = document.createElement('div');
                diaElemento.classList.add('dia-mes');
                diaElemento.textContent = dia;
                diaElemento.setAttribute('data-date', diaActual.toISOString());

                const anotacionDia = anotacionesPreestablecidas[diaActual.toISOString()];
                if (anotacionDia) {
                    const anotacionCuadro = document.createElement('div');
                    anotacionCuadro.classList.add('anotacion-cuadro');
                    anotacionCuadro.textContent = anotacionDia;
                    diaElemento.appendChild(anotacionCuadro);
                }

                diasMesContainer.appendChild(diaElemento);
            }
        }
    }

    function obtenerNombreMes(numeroMes) {
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return meses[numeroMes];
    }

    crearCalendarioAnual();
});

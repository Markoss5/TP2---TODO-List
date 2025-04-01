var tareas = [];
var contadorID = 1;

function getID() {
    return contadorID++;
}

function agregarTarea() {
    let inputTarea = document.getElementById("tareaAagregar").value.trim();

    if (inputTarea === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const nuevaTarea = {
        id: getID(),
        texto: inputTarea,
        completado: false,
        fechaCreacion: new Date(), // Guardamos como Date
        completadoEn: null
    };

    tareas.push(nuevaTarea);
    MostrarTareas();
}

function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    if (tarea) {
        if (!tarea.completado) {
            tarea.completado = true;
            tarea.completadoEn = new Date(); // Guardamos como Date
            tarea.tiempoCompletado = Math.round((tarea.completadoEn - tarea.fechaCreacion) / 1000); // En segundos
        } else {
            tarea.completado = false;
            tarea.completadoEn = null;
            tarea.tiempoCompletado = null;
        }
    }

    MostrarTareas();
}

function MostrarTareas() {
    let listado = document.getElementById('listado');
    let contenido = `
        <table>
            <tr>
                <th>Tarea</th>
                <th>Creado</th>
                <th>Completado</th>
            </tr>
    `;

    tareas.forEach(item => {
        let fechaCreacionFormateada = item.fechaCreacion.toLocaleString();
        let completadoFormateado = item.completadoEn ? item.completadoEn.toLocaleString() : 'Pendiente';

        contenido += `
            <tr class="${item.completado ? 'completado' : ''}">
                <td>
                    <input type="checkbox" onclick="completarTarea(${item.id})" ${item.completado ? 'checked' : ''}>
                    <span>${item.texto}</span>
                </td>
                <td>${fechaCreacionFormateada}</td>
                <td>${completadoFormateado}</td>
            </tr>
        `;
    });

    contenido += `</table>`;
    listado.innerHTML = contenido;
}

function tareaMasRapida() {
    let completadas = tareas.filter(t => t.completado && t.tiempoCompletado !== null);
    if (completadas.length === 0) {
        alert("No hay tareas completadas aún.");
        return;
    }

    let tareaRapida = completadas.reduce((min, tarea) => 
        tarea.tiempoCompletado < min.tiempoCompletado ? tarea : min
    );

    alert(`La tarea más rápida fue: "${tareaRapida.texto}" en ${tareaRapida.tiempoCompletado} segundos.`);
}

function Tachar(id) {
    const tarea = tareas.find(item => item.id === id);
    if (tarea) {
        tarea.completado = !tarea.completado;
        tarea.completadoEn = tarea.completado ? Date.now() : null;
        MostrarTareas();
    }
}


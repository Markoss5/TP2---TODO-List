var tareas = [];

function getID(){
    return 1;
}

function agregarTarea(){
    let inputTarea = document.getElementById("tareaAagregar").value;
    const texto = inputTarea.trim();

    if (texto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const nuevaTarea = {
        id:getID(),
        texto: texto,
        completado: false,
        fechaCreacion: Date.now(),
        completadoEn: null
    };

    tareas.push(nuevaTarea);

    MostrarTareas();
}

function MostrarTareas(){
    document.getElementById('listado').innerHTML = "<ul>";
    

    tareas.map(item=>{
        document.getElementById('listado').innerHTML += `
            <li>
                ${item.texto}
            </li>`;
    })

    document.getElementById('listado').innerHTML += "</ul>";
}


/*var tareas = [];

function getID() {
    return tareas.length + 1; // Generar un ID único
}

function agregarTarea() {
    let inputTarea = document.getElementById("tareaAagregar").value;
    const texto = inputTarea.trim();

    if (texto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const nuevaTarea = {
        id: getID(),
        texto: texto,
        completado: false,
        fechaCreacion: new Date().toLocaleString(), // Fecha y hora en formato legible
        completadoEn: null
    };

    tareas.push(nuevaTarea);
    document.getElementById("tareaAagregar").value = ""; // Limpiar el input
    MostrarTareas();
}

function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completado = !tarea.completado;
        tarea.completadoEn = tarea.completado ? new Date().toLocaleString() : null;
        MostrarTareas();
    }
}

function MostrarTareas() {
    let listado = document.getElementById('listado');
    listado.innerHTML = "<ul>";

    tareas.forEach(item => {
        listado.innerHTML += `
            <li class="${item.completado ? 'completado' : ''}">
                <input type="checkbox" onclick="completarTarea(${item.id})" ${item.completado ? 'checked' : ''}>
                <span>${item.texto}</span> 
                <small>Creado: ${item.fechaCreacion}</small>
                ${item.completadoEn ? `<small> | Completado: ${item.completadoEn}</small>` : ""}
            </li>`;
    });

    listado.innerHTML += "</ul>";
}
*/
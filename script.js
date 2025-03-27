var tareas = [];

var contadorID = 1; 

function getID(){
    return contadorID++;
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

function MostrarTareas() {
    let listado = document.getElementById('listado');
    listado.innerHTML = "<ul>";

    tareas.forEach(item => {
        listado.innerHTML += `
            <li class="${item.completado ? 'completado' : ''}">
                <input type="checkbox" class="checkbox" ${item.completado ? 'checked' : ''} onclick="Tachar(${item.id})">
                <span>${item.texto}</span>
            </li>`;
    });

    document.getElementById('listado').innerHTML += "</ul>";
}

function Tachar(id) {
    const tarea = tareas.find(item => item.id === id);
    if (tarea) {
        tarea.completado = !tarea.completado;
        tarea.completadoEn = tarea.completado ? Date.now() : null;
        MostrarTareas();
    }
}


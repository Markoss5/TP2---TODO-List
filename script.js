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
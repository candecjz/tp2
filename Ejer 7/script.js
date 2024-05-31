async function ExtraccionDatos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const personas = await res.json();
    const contenedor = document.getElementById('contenedor');

    personas.forEach(persona => {
        const item = document.createElement('div');
        item.id = persona.id;
        item.classList.add('persona');

        const verTareas = document.createElement('button');
        verTareas.innerText = "Ver tareas";

        const ocultarTareas = document.createElement('button');
        ocultarTareas.innerText = "Ocultar tareas";
        ocultarTareas.style.display = "none";

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(verTareas);
        buttonContainer.appendChild(ocultarTareas);

        verTareas.addEventListener("click", async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            const tareas = await res.json();

            tareas.forEach(tareaElemento => {
                const tarea = document.createElement('p');
                tarea.classList.add('tarea');
                tarea.innerText = `Tarea ${tareaElemento.id} : ${tareaElemento.title}`;
                tarea.style.color = tareaElemento.completed ? "green" : "red";
                item.appendChild(tarea);
            });

            verTareas.style.display = "none";
            ocultarTareas.style.display = "block"; 
        });

        ocultarTareas.addEventListener("click", () => {
            const tareas = item.querySelectorAll('.tarea');
            tareas.forEach(tarea => tarea.remove());

            verTareas.style.display = "block";
            ocultarTareas.style.display = "none"; 
        });

        
        const userInfo = `
            <p class="id">Id: ${persona.id}</p>
            <p class="nombre">Nombre: ${persona.name}</p>
            <p class="usuario">Usuario: ${persona.username}</p>
            <p class="email">Email: ${persona.email}</p>
            <p class="sitio">Sitio: ${persona.website}</p>
        `;
        item.innerHTML = userInfo;

        item.appendChild(buttonContainer); 
        contenedor.appendChild(item);
    });
}

ExtraccionDatos();
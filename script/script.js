let datos={
    "proyectos": [
        {"Proyecto 1": "Pepe Perez, Jose Fernandez, Andrea Medio, Jose Luis Fernandez"},
        {"Proyecto 2": "Pepe Perez, Jose Fernandez,"},
        {"Proyecto 3": "Pepe Perez, Jose Fernandez,, Jose Luis Fernandez"},
    ]
};


//datos.proyectos[0]

function cargar(){
    for(let i=0; i<datos.proyectos.length; i++){
        console.log([i]);
    }
}

cargar();

function new_element(){
    $("#datos tr").append('<th>cargar()</th>');
}

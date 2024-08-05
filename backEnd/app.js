
// Iniciar el servidor

const express = require("express");
const db = require("./db");
const usuarios = require("./db");

// Crear el servidor
const app = express();

//Creamos los middleware
app.use(express.text());
app.use(express.json());

// Crear rutas
// Pagina principal

// Get (obtener o mostrar)
app.get("/",(req,res)=>{
    res.send("Hola desde mi servidor.");
});

// Creamos la pagina de las Tareas
app.get("/tareas",(req,res)=>{
    res.json(db);
});

//Obtener Tarea por su id
app.get("/tareas/:id",(req,res)=>{
    const id = parseInt(req.params.id); //id vienen como texto y las convertimos en número Entero

    const getLibro = db.find((title)=>title.id === id);
    res.json(tareas);
});

// Crear un Tarea

app.post("/tareas",(req,res)=>{
    const {id,title} = req.body;

    const newTarea = db.push({id:id,title:title});
    res.json({message: "Nueva Tarea creada con éxito"});
});

// Editar un Tarea (title)

app.put("/tareas/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const{title} = req.body;

    const getTarea = db.find((title)=>title.id === id);
    getTarea.title = title;
    
    res.json({message: "Tarea creada con éxito."});
});

//Eliminar Tarea

app.delete("/tareas/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const getTarea = db.find((title)=>title.id === id);

    const indexTarea = db.indexOf(getTarea);
    const eliminarTarea = db.splice(indexTarea, 1);

    res.json({message: "Tarea borrada con éxito!"})
})


// Crear el Puerto
app.listen(4000,()=>console.log("Servidor Corriendo en el puerto 4000"))
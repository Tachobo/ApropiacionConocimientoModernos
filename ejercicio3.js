function registrarActividad(actividad){
    const {nombre, notas} = usuario

    try {
        if (!nombre || !notas)
            throw new Error("La propiedad no existe");
            
    } catch (error) {
        console.log(error.message)
    }
}

const usuario = {
    nombre: "Dan",
    fecha: "22/11/25",
    notas: [1,2,3]
}

registrarActividad(usuario)
const perfil = {
    nombre: "Godinez",
    pais: "Colombia"
}

const actualizarPerfil = (perfil, ...nuevosDatos) => {
    return{
        perfil,
        nuevosDatos
    }
}

const nuevosDatos = actualizarPerfil(
    { perfil,
    edad: 22,
    ciudad: "Medellin"}
);

console.log(nuevosDatos);


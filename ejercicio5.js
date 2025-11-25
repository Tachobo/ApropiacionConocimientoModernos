const perfil = {
    nombre: "Godinez",
    pais: "Colombia"
}

const actualizarPerfil = (perfil, ...nuevosDatos) => {
    const nuevoPerfil = {...perfil}
    
    for (const element of nuevosDatos){
        for(const key in element){
            nuevoPerfil[key] = element[key]
        }
    }
    return nuevoPerfil;
    
}

const nuevosDatos = actualizarPerfil(perfil,
    { edad: 22,},
    {ciudad: "Medellin"},
    {genero: "Masculino"}
);

console.log(nuevosDatos);


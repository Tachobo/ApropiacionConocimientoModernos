const defaults = {tema: "clar", idioma: "es"};

function configuracionUsuario(defaults, personalizadas){
    const configurarcionCombinada = {...defaults, ...personalizadas};

    return configurarcionCombinada;
}

const personalizacion1 = {idioma: "en"}
const {idioma} = configuracionUsuario(defaults, personalizacion1);
console.log("personalizacion 1:", idioma);
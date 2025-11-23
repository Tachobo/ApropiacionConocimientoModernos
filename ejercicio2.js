const inventario = ["camara", "tripode", "microfono"]

function agregarInventario(lista, nuevoItem){
    const nuevaLista = [...lista, nuevoItem]
    console.log(`lista actualizada ${nuevaLista.length} items`);
    return nuevaLista;
}

const nuevaLista = agregarInventario(inventario, "periferico", "celular")

console.log(inventario);
console.log(nuevaLista);


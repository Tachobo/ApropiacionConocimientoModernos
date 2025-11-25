const ventas = [
    {producto: "teclado", detalles: {precio: 50, unidades: 3}},
    {producto: "mouse", detalles: {precio: 20, unidades: 5}},
    {producto: "audifonos", detalles: {precio: 30, unidades: 2}},
    {producto: "mousepad", detalles: {precio: 25, unidades: 4}}
];

function detallesPrimerProducto(){
    const [ , ,{ detalles: { precio, unidades }}] = ventas;
    console.log("Precio:", precio, "Unidades", unidades);

    return precio * unidades
}

console.log(detallesPrimerProducto());

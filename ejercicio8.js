function fusionarColecciones(lista1, lista2) {
    try {
        // valido que sean arreglos
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Las colecciones no son válidas");
        }

        // fusiono sin mutar
        const fusion = [...lista1, ...lista2]; //spread

        return fusion;

    } catch (error) {
        console.error(error.message);
    }
}
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const lista3 = lista1;

// imprimo
console.log(fusionarColecciones(lista1, lista2));

lista3.push(7);
console.log(lista1);
console.log(lista2);
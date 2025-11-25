function evaluar (...valores){
    try {
        for (let i = 0; i<valores.length; i++){
            const valor = valores[i]

            if ( typeof valor !== `number`){
                throw new Error(`El Valor "${valor}" en la posicion ${i} no es numero.`);}        
        }

        let suma = 0;
        for (const valor of valores){
            suma +=valor;
        }
        const promedio = suma / valores.length;
        console.log("Todos los valores son validos. El promedio es", promedio);
        return promedio;
    } catch (error) {
        console.log("Error en la validación", error.message);
        return null;
    }
}

evaluar (50, "sapito", 30);
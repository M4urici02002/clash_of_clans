function generarTabla() {
    let numero = prompt("Ingrese un número:");
    let tablaHTML = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= numero; i++) {
        tablaHTML += `<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
    }

    tablaHTML += "</table>";
    document.getElementById("tabla").innerHTML = tablaHTML;
}

function iniciarSumaAleatoria() {
    let num1 = Math.floor(Math.random() * 100) + 1; 
    let num2 = Math.floor(Math.random() * 100) + 1; 
    let inicio = Date.now(); 

    let respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`);
    let tiempo = (Date.now() - inicio) / 1000; 

    if (parseInt(respuesta) === num1 + num2) {
        alert(`Correcto! Tardaste ${tiempo} segundos en responder.`);
    } else {
        alert(`Incorrecto. La respuesta correcta era ${num1 + num2}. Tardaste ${tiempo} segundos en responder.`);
    }
}

function generarArregloAleatorio() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        // Generar números entre -10 y 10
        arr.push(Math.floor(Math.random() * 21) - 10);
    }
    return arr;
}

function mostrarArregloYConteo() {
    let arr = generarArregloAleatorio();
    let conteo = contador(arr);
    let tablaHTML = "<table border='1'><tr><th>N.o</th><th>Valor</th></tr>";

    // Mostrar el arreglo en la tabla
    arr.forEach((num, index) => {
        tablaHTML += `<tr><td>${index}</td><td>${num}</td></tr>`;
    });

    tablaHTML += "</table>";

    // Agregar el conteo al HTML
    tablaHTML += `<p>Negativos: ${conteo.negativos}, Ceros: ${conteo.ceros}, Positivos: ${conteo.positivos}</p>`;

    document.getElementById("resultado").innerHTML = tablaHTML;
}

function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;

    arr.forEach(num => {
        if (num < 0) negativos++;
        else if (num === 0) ceros++;
        else positivos++;
    });

    return {negativos, ceros, positivos};
}

function generarArregloDeArreglos() {
    let arr = [];
    for (let i = 0; i < 5; i++) { // Generar 5 arreglos internos como ejemplo
        let subArr = [];
        for (let j = 0; j < 3; j++) { // Cada arreglo interno tiene 3 números
            subArr.push(Math.floor(Math.random() * 21) - 10); // Números aleatorios entre -10 y 10
        }
        arr.push(subArr);
    }
    return arr;
}

function mostrarPromedios() {
    let arr = generarArregloDeArreglos();
    let promediosArr = promedios(arr);
    let tablaHTML = "<table border='1'><tr><th>Arreglo</th><th>Promedio</th></tr>";

    // Mostrar los arreglos y sus promedios
    arr.forEach((subArr, index) => {
        tablaHTML += `<tr><td>[${subArr.join(", ")}]</td><td>${promediosArr[index]}</td></tr>`;
    });

    tablaHTML += "</table>";
    document.getElementById("resultadoPromedios").innerHTML = tablaHTML;
}

function promedios(arr) {
    return arr.map(subArr => {
        return subArr.reduce((a, b) => a + b, 0) / subArr.length;
    });
}

function pedirNumeroYMostrarInverso() {
    let num = prompt("Por favor, ingresa un número para invertirlo:");
    if (num !== null) { // Verificar si el usuario ingresó un valor
        let numInverso = inverso(parseInt(num));
        let resultadoHTML = `
            <p>Número ingresado: ${num}</p>
            <p>Número inverso: ${numInverso}</p>
        `;
        document.getElementById("resultadoInverso").innerHTML = resultadoHTML;
    } else {
        // Manejar el caso en que el usuario cancele el prompt
        document.getElementById("resultadoInverso").innerHTML = "<p>Operación cancelada por el usuario.</p>";
    }
}

function inverso(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}


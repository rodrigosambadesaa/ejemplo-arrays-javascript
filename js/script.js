const nombres = [
    ['Rodrigo', 'Sambade', 29, [`Latín`, `Informática`]],
    ['Mariana', 'García', 25, [`Inglés`, `Informática`]],
    ['Fernanda', 'Palacios', 31, [`Francés`, `Informática`]],
    ['Juan', 'Perez', 35, [`Alemán`, `Informática`]],
    ['Pedro', 'Gonzalez', 28, [`Portugués`, `Informática`]],
    ['Miguel', 'Gomez', 30, [`Italiano`, `Informática`]],
    ['Ana', 'Gutierrez', 26, [`Ruso`, `Informática`]],
    ['Carlos', 'Sanchez', 27, [`Chino`, `Informática`]],
    ['Andrea', 'Hernandez', 32, [`Japonés`, `Informática`]],
    ['Luis', 'Martinez', 33, [`Coreano`, `Informática`]],
    ['Laura', 'Lopez', 24, [`Árabe`, `Informática`]],
    ['Gabriel', 'Ramirez', 36, [`Hebreo`, `Informática`]],
    ['Sofia', 'Torres', 29, [`Hindi`, `Informática`]],
    ['Diego', 'Fernandez', 31, [`Bengalí`, `Informática`]],
    ['Valentina', 'Rojas', 27, [`Javanés`, `Informática`]],
];

for (let i = 0; i < nombres.length; i++) {
    console.log(`Hola, me llamo ${nombres[i][0]} ${nombres[i][1]}, tengo ${nombres[i][2]} años y mis intereses son ${nombres[i][3]}.`);
}

const numeros = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12],
    [13, 14],
    [15]
];

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        contador += numeros[i][j];
    }
}

console.log(contador);


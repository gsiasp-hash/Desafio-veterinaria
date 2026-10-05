const registrarCita = require('./operaciones').registrarCita;
const obtenerCitas = require('./operaciones').obtenerCitas;

const operacion = process.argv[2];
const args = process.argv.slice(3);

if (operacion === 'registrar') {
    const [nombre, edad, tipodeanimal, colordelanimal, enfermedad] = args;
    registrarCita({ nombre, edad, tipodeanimal, colordelanimal, enfermedad });
    console.log('Cita registrada exitosamente.');
} 

if (operacion === 'leer'){
obtenerCitas()}
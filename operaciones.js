const fs = require('fs');


const cita = {
    Nombre: '',
    Edad: '',
    Tipodeanimal: '',
    Colordelanimal: '',
    Enfermedad:''
};

const registrarCita = (nuevaCita) => {
    const citas = fs.readFileSync('citas.json', 'utf8');
    const citasArray = JSON.parse(citas);
    citasArray.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citasArray, null, 2));
}

const obtenerCitas = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        return console.log(JSON.parse(data));
        
    } catch (error) {
        return [];
    }
    
};

module.exports = {
    cita,
    registrarCita,
    obtenerCitas
};
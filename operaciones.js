const fs = require('fs');


const cita = {
    Nombre: '',
    Edad: '',
    Tipodeanimal: '',
    Colordelanimal: '',
    Enfermedad:''
};

const registrarCita = (nuevaCita) => {
    const citas = obtenerCitas();
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
}

const obtenerCitas = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        return JSON.parse(data);
        
    } catch (error) {
        return [];
    }
    
};

module.exports = {
    cita,
    registrarCita,
    obtenerCitas
};
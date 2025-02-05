// Datos estáticos (simulando una base de datos)
const baseDatos = [
    { CLIENTE: '23 M&M', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '19110469', CODIGO: '(1100-100)' },
    { CLIENTE: 'ALMAVIVA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1903215', CODIGO: '(1100-100)' },
    { CLIENTE: 'AVON', EQUIPO: 'CUBISCAN 125', CIUDAD: 'MEDELLÍN', SERIAL: '7130697', CODIGO: '(5000-100)' },
    { CLIENTE: 'COORDINADORA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '16030055', CODIGO: '(1100-100)' },
    { CLIENTE: 'COORDINADORA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '16030056', CODIGO: '(1100-100)' },
    { CLIENTE: 'COOPIDROGAS', EQUIPO: 'CUBISCAN 325', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1903216', CODIGO: '(1100-100)' },
    { CLIENTE: 'CRUZ VERDE', EQUIPO: 'CUBISCAN 125', CIUDAD: 'COTA', SERIAL: '19050084', CODIGO: '(2300-100)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BUCARAMANGA', SERIAL: '7050281', CODIGO: '(6000-100)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CARTAGENA', SERIAL: '7050283', CODIGO: '(7000-100)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CUCUTA', SERIAL: '7050282', CODIGO: '(6000-100)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'PEREIRA', SERIAL: '7050180', CODIGO: '(6000-100)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'SANTA MARTA', SERIAL: '7050284', CODIGO: '(7000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200B', CIUDAD: 'CALI', SERIAL: '96120030', CODIGO: '(7600-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1416246', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '18102975', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200B', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '96120043', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'MEDELLÍN', SERIAL: '21418169', CODIGO: '(5000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BARRANQUILLA', SERIAL: '19110183', CODIGO: '(7000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CARTAGENA', SERIAL: '19110025', CODIGO: '(7000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BUCARAMANGA', SERIAL: '7050238', CODIGO: '(6000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070056', CODIGO: '(1100-100)' },
    { CLIENTE: 'ELITE FLOWER', EQUIPO: 'CUBISCAN 150', CIUDAD: 'FACATATIVA', SERIAL: '19110184', CODIGO: '(2300-100)' },
    { CLIENTE: 'FRESH LOGISTIK', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'QUITO', SERIAL: '14164250', CODIGO: '(9000-100)' },
    { CLIENTE: 'GLOBAL-TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'CALI', SERIAL: '17070262', CODIGO: '(7600-122)' },
    { CLIENTE: 'GLOBAL-TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'MEDELLÍN', SERIAL: '17070263', CODIGO: '(5000-122)' },
    { CLIENTE: 'GLOBAL-TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070264', CODIGO: '(1100-122)' },
    { CLIENTE: 'KUEHNE NAGEL', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '5011975', CODIGO: '(2500-100)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010228', CODIGO: '(9000-100)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010492', CODIGO: '(9000-100)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'QUITO', SERIAL: '19030115', CODIGO: '(9000-100)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'SIBERIA FUNZA', SERIAL: '14164239', CODIGO: '(2300-100)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'SIBERIA FUNZA', SERIAL: '22409685', CODIGO: '(2300-100)' },
    { CLIENTE: 'LOGYCA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130082', CODIGO: '(1100-100)' },
    { CLIENTE: 'MARKETING PERSONAL', EQUIPO: 'CUBISCAN 325', CIUDAD: 'MEDELLÍN', SERIAL: '17010192', CODIGO: '(5000-100)' },
    { CLIENTE: 'MAVESA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'GUAYAQUIL', SERIAL: '22090021', CODIGO: '(9000-100)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 325', CIUDAD: 'FUNZA', SERIAL: '23080072', CODIGO: '(2500-100)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '18090234', CODIGO: '(2500-100)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 150', CIUDAD: 'FUNZA', SERIAL: '19110110', CODIGO: '(2500-100)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'FINANCIERO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'ADMINISTRATIVO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'COMERCIAL', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'INGENIERÍA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'PUBLICIDAD', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'BIENESTAR', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'CAPACITACIÓN', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'HERRAMIENTA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'SGSST', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'PANAMERICANA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130909', CODIGO: '(1100-100)' },
    { CLIENTE: 'PANAMERICANA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130910', CODIGO: '(1100-100)' },
    { CLIENTE: 'SKECHERS', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '18090318', CODIGO: '(2500-100)' },
    { CLIENTE: 'SODIMAC', EQUIPO: 'CUBISCAN 150', CIUDAD: 'TENJO', SERIAL: '7050074', CODIGO: '(2300-100)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'SIBERIA TENJO', SERIAL: '19115740', CODIGO: '(7990-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '22404990', CODIGO: '(1100-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'MEDELLÍN', SERIAL: '17070342', CODIGO: '(5000-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '22401684', CODIGO: '(5000-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'CALI', SERIAL: '22404991', CODIGO: '(7600-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'CALI', SERIAL: '17070331', CODIGO: '(7600-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070340', CODIGO: '(1100-120)' },
    { CLIENTE: 'TIA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'GUAYAQUIL', SERIAL: '19031006', CODIGO: '(9000-100)' }
];

// Referencias a las listas desplegables
const clienteSelect = document.getElementById('cliente');
const ciudadSelect = document.getElementById('ciudad');
const equipoSelect = document.getElementById('equipo');
const serialSelect = document.getElementById('serial');

// Función para llenar las listas desplegables
function llenarListas() {
    const clientes = [...new Set(baseDatos.map(item => item.CLIENTE))];
    const ciudades = [...new Set(baseDatos.map(item => item.CIUDAD))];

    // Llenar Cliente
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente;
        option.textContent = cliente;
        clienteSelect.appendChild(option);
    });

    // Llenar Ciudad
    ciudades.forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        ciudadSelect.appendChild(option);
    });
}

// Referencias a las listas desplegables
const clienteSelect = document.getElementById('cliente');
const ciudadSelect = document.getElementById('ciudad');
const equipoSelect = document.getElementById('equipo');
const serialSelect = document.getElementById('serial');

// Función para llenar las listas desplegables
function llenarListas() {
    const clientes = [...new Set(baseDatos.map(item => item.CLIENTE))];
    const ciudades = [...new Set(baseDatos.map(item => item.CIUDAD))];

    // Log para depurar
    console.log('Clientes:', clientes);
    console.log('Ciudades:', ciudades);

    // Llenar Cliente
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente;
        option.textContent = cliente;
        clienteSelect.appendChild(option);
    });

    // Llenar Ciudad
    ciudades.forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = ciudad;
        ciudadSelect.appendChild(option);
    });
}

// Función para actualizar los equipos según el cliente y ciudad seleccionados
function actualizarEquiposYSeriales() {
    const clienteSeleccionado = clienteSelect.value;
    const ciudadSeleccionada = ciudadSelect.value;

    console.log('Cliente seleccionado:', clienteSeleccionado);
    console.log('Ciudad seleccionada:', ciudadSeleccionada);

    // Filtrar los datos según el cliente y la ciudad seleccionados
    const equiposFiltrados = baseDatos.filter(item => 
        item.CLIENTE === clienteSeleccionado && item.CIUDAD === ciudadSeleccionada
    );

    // Log para depurar
    console.log('Equipos filtrados:', equiposFiltrados);

    // Limpiar y llenar el campo de equipos
    equipoSelect.innerHTML = '';
    serialSelect.innerHTML = '';

    equiposFiltrados.forEach(item => {
        const equipoOption = document.createElement('option');
        equipoOption.value = item.EQUIPO;
        equipoOption.textContent = item.EQUIPO;
        equipoSelect.appendChild(equipoOption);

        const serialOption = document.createElement('option');
        serialOption.value = item.SERIAL;
        serialOption.textContent = item.SERIAL;
        serialSelect.appendChild(serialOption);
    });
}

// Agregar los eventos de cambio para las listas desplegables
clienteSelect.addEventListener('change', actualizarEquiposYSeriales);
ciudadSelect.addEventListener('change', actualizarEquiposYSeriales);

// Llamar a la función para llenar las listas iniciales
llenarListas();
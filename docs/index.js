document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const ciudad = document.getElementById("ciudad").value;
    const equipo = document.getElementById("equipo").value;
    const serial = document.getElementById("serial").value;
    const actividad = document.getElementById("actividad").value;
    const concepto = document.getElementById("concepto").value;
    const lugarInicial = document.getElementById("lugarInicial").value;
    const lugarFinal = document.getElementById("lugarFinal").value;
    const fecha = document.getElementById("fecha").value;
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: 'short'
    }).toUpperCase();
 
    const codigo = baseDatos.find(d => 
        (d.CLIENTE === cliente || 
         (cliente === 'TCC' && d.CLIENTE.includes('TCC'))) && 
        (d.EQUIPO === equipo || d.EQUIPO === '') && 
        (d.CIUDAD === ciudad || d.CIUDAD === '') && 
        (d.SERIAL === serial || d.SERIAL === '')
    )?.CODIGO || "";
    
    if (!cliente || !actividad || !concepto || (!serial && actividad !== 'INT') || !codigo) {
        console.log('Datos incompletos:', {
            cliente,
            actividad,
            concepto,
            serial,
            codigo
        });
        document.getElementById("codigo").value = "Datos incompletos";
        return;
    }
 
    let codigoGenerado = `${codigo} ${concepto} ${actividad} ${actividad === 'INT' ? '' : serial} ${fechaFormateada}`;
    
    if (concepto === 'TRANS') {
        const transporteVisible = document.getElementById('camposTransporte').style.display !== 'none';
        if (transporteVisible && (!lugarInicial || !lugarFinal)) {
            document.getElementById("codigo").value = "Seleccione lugares de transporte";
            return;
        }
 
        if (transporteVisible) {
            codigoGenerado = `${codigo} ${concepto} ${lugarInicial}-${lugarFinal} ${actividad} ${actividad === 'INT' ? '' : serial} ${fechaFormateada}`;
        }
    }
 
    document.getElementById("codigo").value = codigoGenerado;
 });const baseDatos = [
	{ CLIENTE: '23 M&M', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '19110469', CODIGO: '(1100-105)' },
    { CLIENTE: 'ALMAVIVA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1903215', CODIGO: '(1100-101)' },
    { CLIENTE: 'AVON', EQUIPO: 'CUBISCAN 125', CIUDAD: 'MEDELLÍN', SERIAL: '7130697', CODIGO: '(5000-102)' },
    { CLIENTE: 'COOPIDROGAS', EQUIPO: 'CUBISCAN 325', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1903216', CODIGO: '(1100-103)' },
    { CLIENTE: 'COORDINADORA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '16030055', CODIGO: '(1100-104)' },
    { CLIENTE: 'COORDINADORA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '16030056', CODIGO: '(1100-104)' },
    { CLIENTE: 'CRUZ VERDE', EQUIPO: 'CUBISCAN 125', CIUDAD: 'COTA', SERIAL: '19050084', CODIGO: '(2140-106)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BUCARAMANGA', SERIAL: '7050281', CODIGO: '(6800-107)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CARTAGENA', SERIAL: '7050283', CODIGO: '(1300-107)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CUCUTA', SERIAL: '7050282', CODIGO: '(5400-107)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'PEREIRA', SERIAL: '7050180', CODIGO: '(6600-107)' },
    { CLIENTE: 'DEPRISA', EQUIPO: 'CUBISCAN 150', CIUDAD: 'SANTA MARTA', SERIAL: '7050284', CODIGO: '(4700-107)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200B', CIUDAD: 'CALI', SERIAL: '96120030', CODIGO: '(7600-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '1416246', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '18102975', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200B', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '96120043', CODIGO: '(1100-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'MEDELLÍN', SERIAL: '21418169', CODIGO: '(5000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BARRANQUILLA', SERIAL: '19110183', CODIGO: '(8000-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'CARTAGENA', SERIAL: '19110025', CODIGO: '(1300-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 150', CIUDAD: 'BUCARAMANGA', SERIAL: '7050238', CODIGO: '(6800-100)' },
    { CLIENTE: 'DHL EXPRESS', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070056', CODIGO: '(1100-100)' },
    { CLIENTE: 'ELITE FLOWER', EQUIPO: 'CUBISCAN 150', CIUDAD: 'FACATATIVA', SERIAL: '19110184', CODIGO: '(2690-108)' },
    { CLIENTE: 'FRESH LOGISTIK', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'QUITO', SERIAL: '14164250', CODIGO: '(2391-109)' },
    { CLIENTE: 'GLOBAL -TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'MEDELLÍN', SERIAL: '17070263', CODIGO: '(5000-122)' },
    { CLIENTE: 'GLOBAL -TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070264', CODIGO: '(1100-122)' },
    { CLIENTE: 'GLOBAL-TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'CALI', SERIAL: '17070262', CODIGO: '(7600-122)' },
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 125', CIUDAD: ' ', SERIAL: '7130180', CODIGO: ' ' },
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 100', CIUDAD: ' ', SERIAL: '5012591', CODIGO: ' ' },
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 100', CIUDAD: ' ', SERIAL: '5012592', CODIGO: ' ' },
    { CLIENTE: 'KUEHNE NAGEL', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '5011975', CODIGO: '(2860-110)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010228', CODIGO: '(2391-111)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010492', CODIGO: '(2391-111)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'QUITO', SERIAL: '19030115', CODIGO: '(2391-111)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'SIBERIA FUNZA', SERIAL: '14164239', CODIGO: '(2860-112)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'SIBERIA FUNZA', SERIAL: '22409685', CODIGO: '(2860-112)' },
    { CLIENTE: 'LOGISPHARMA', EQUIPO: 'CUBISCAN 100', CIUDAD: ' ', SERIAL: '5011230', CODIGO: ' ' },
    { CLIENTE: 'LOGISTIK ALLIANCE', EQUIPO: 'CUBISCAN 200TS', CIUDAD: ' ', SERIAL: '14164247', CODIGO: ' ' },
    { CLIENTE: 'LOGYCA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130082', CODIGO: '(1100-113)' },
    { CLIENTE: 'MARKETING PERSONAL', EQUIPO: 'CUBISCAN 325', CIUDAD: 'MEDELLÍN', SERIAL: '17010192', CODIGO: '(5000-114)' },
    { CLIENTE: 'MAVESA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'GUAYAQUIL', SERIAL: '22090021', CODIGO: '(2392-115)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 325', CIUDAD: 'FUNZA', SERIAL: '23080072', CODIGO: '(2860-116)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '18090234', CODIGO: '(2860-116)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 150', CIUDAD: 'FUNZA', SERIAL: '19110110', CODIGO: '(2860-116)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'FINANCIERO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'ADMINISTRATIVO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-201)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'COMERCIAL', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-202)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'INGENIERÍA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-203)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'PUBLICIDAD', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-204)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'BIENESTAR', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-205)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'CAPACITACIÓN', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-206)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'HERRAMIENTA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-207)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'SGSST', CIUDAD: 'BOGOTÁ D.C.', SERIAL: ' ', CODIGO: '(1100-208)' },
    { CLIENTE: 'P&G', EQUIPO: 'CUBISCAN 110L', CIUDAD: ' ', SERIAL: '16020290', CODIGO: ' ' },
    { CLIENTE: 'PANAMERICANA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130909', CODIGO: '(1100-117)' },
    { CLIENTE: 'PANAMERICANA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130910', CODIGO: '(1100-117)' },
    { CLIENTE: 'SKECHERS', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '18090318', CODIGO: '(2860-118)' },
    { CLIENTE: 'SODIMAC', EQUIPO: 'CUBISCAN 150', CIUDAD: 'TENJO', SERIAL: '7050074', CODIGO: '(7990-119)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'SIBERIA TENJO', SERIAL: '19115740', CODIGO: '(7990-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '22404990', CODIGO: '(1100-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'MEDELLÍN', SERIAL: '17070342', CODIGO: '(5000-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'CALI', SERIAL: '22404991', CODIGO: '(7600-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'MEDELLÍN', SERIAL: '22401684', CODIGO: '(5000-120)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'CALI', SERIAL: '17070331', CODIGO: '(7600-102)' },
    { CLIENTE: 'TCC', EQUIPO: 'CUBISCAN 75', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '17070340', CODIGO: '(1100-120)' },
    { CLIENTE: 'TIA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'GUAYAQUIL', SERIAL: '19031006', CODIGO: '(2392-121)' }
];

const actividades = {
    "MANTENIMIENTO PREVENTIVO": "MAN P",
    "MANTENIMIENTO CORRECTIVO": "MAN C",
    "INTERNO": "INT",
    "VISITA EXTRA": "VIS EXT",
    "INSTALACIÓN": "INS",
    "GARANTÍA": "GAR"
 };
 
 const conceptos = {
    "TRANSPORTE": "TRANS",
    "CENA": "CENA",
    "ALMUERZO": "ALMU",
    "DESAYUNO": "DES",
    "HERRAMIENTA": "HERR",
    "HOTEL": "HOT",
    "CAFETERIA": "CAF",
    "BIENESTAR": "BIEN",
    "ASEO": "ASE",
    "PAGO POR EQUIVOCACIÓN": "CXC",
    "CLIENTE": "CLI"
 };
 
 const lugaresTransporte = {
    "CLIENTE": "CLI", 
    "HOTEL": "HOT", 
    "CASA": "CAS", 
    "AEROPUERTO": "AER", 
    "OFICINA": "OFI", 
    "CIT": "CIT"
 };
 
 function filtrarBaseDatos() {
    let datosFiltrados = [...baseDatos];
    const cliente = document.getElementById("cliente").value;
    const ciudad = document.getElementById("ciudad").value;
    const equipo = document.getElementById("equipo").value;
 
    if (cliente) {
        datosFiltrados = datosFiltrados.filter(item => 
            item.CLIENTE === cliente || 
            (item.CLIENTE.includes('TCC') && cliente.includes('TCC'))
        );
    }
    if (ciudad) {
        datosFiltrados = datosFiltrados.filter(item => 
            item.CIUDAD === ciudad || item.CIUDAD === ''
        );
    }
    if (equipo) {
        datosFiltrados = datosFiltrados.filter(item => 
            item.EQUIPO === equipo || item.EQUIPO === ''
        );
    }
 
    return datosFiltrados;
 }
 
 function actualizarSelect(selectId, propiedad) {
    const select = document.getElementById(selectId);
    const datosFiltrados = filtrarBaseDatos();
 
    const opciones = [...new Set(
        datosFiltrados
            .map(item => item[propiedad])
            .filter(valor => valor !== '')
    )];
 
    select.innerHTML = "<option value=''>Seleccione una opción</option>";
    opciones.sort().forEach(opcion => {
        let option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        select.appendChild(option);
    });
 
    if (opciones.length > 0) {
        select.disabled = false;
        if (opciones.length === 1) {
            select.value = opciones[0];
            select.dispatchEvent(new Event('change'));
        }
    } else {
        select.disabled = true;
    }
 }
 
 function llenarSelect(select, opciones) {
    select.innerHTML = "<option value=''>Seleccione una opción</option>";
    Object.entries(opciones).forEach(([key, value]) => {
        let option = document.createElement("option");
        option.value = value;
        option.textContent = key;
        select.appendChild(option);
    });
 }
 
 function limpiarFormulario() {
    document.getElementById("form").reset();
    document.getElementById('camposTransporte').style.display = 'none';
    document.getElementById('codigo').value = '';
 
    ['cliente', 'ciudad', 'equipo', 'serial', 'actividad', 'concepto'].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = "<option value=''>Seleccione una opción</option>";
        if (id !== 'cliente' && id !== 'actividad' && id !== 'concepto') {
            select.disabled = true;
        }
    });
 
    inicializarSelects();
 }
 
 function inicializarSelects() {
    const clientes = [...new Set(baseDatos.map(item => item.CLIENTE))]
        .map(cliente => cliente.includes('TCC') ? 'TCC' : cliente);
 
    const clienteSelect = document.getElementById("cliente");
 
    clienteSelect.innerHTML = "<option value=''>Seleccione una opción</option>";
    [...new Set(clientes)].forEach(cliente => {
        let option = document.createElement("option");
        option.value = cliente;
        option.textContent = cliente;
        clienteSelect.appendChild(option);
    });
 
    const actividadSelect = document.getElementById("actividad");
    const conceptoSelect = document.getElementById("concepto");
    const lugarInicialSelect = document.getElementById("lugarInicial");
    const lugarFinalSelect = document.getElementById("lugarFinal");
 
    llenarSelect(actividadSelect, actividades);
    llenarSelect(conceptoSelect, conceptos);
    llenarSelect(lugarInicialSelect, lugaresTransporte);
    llenarSelect(lugarFinalSelect, lugaresTransporte);
 }
 
 function showNotification(message) {
    let notification = document.querySelector('.notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
 }
 
 document.addEventListener("DOMContentLoaded", () => {
    inicializarSelects();
 
    document.getElementById("actividad").addEventListener('change', (e) => {
        if (e.target.value === 'INT') {
            document.getElementById("cliente").value = 'MONTRA COLOMBIA SAS';
            document.getElementById("cliente").dispatchEvent(new Event('change'));
        }
    });
 
    document.getElementById("cliente").addEventListener('change', () => {
        ['ciudad', 'equipo', 'serial'].forEach(id => {
            const select = document.getElementById(id);
            select.innerHTML = "<option value=''>Seleccione una opción</option>";
            select.disabled = false;
        });
 
        actualizarSelect("ciudad", "CIUDAD");
        actualizarSelect("equipo", "EQUIPO");
        actualizarSelect("serial", "SERIAL");
    });
 
    document.getElementById("ciudad").addEventListener('change', () => {
        actualizarSelect("equipo", "EQUIPO");
        actualizarSelect("serial", "SERIAL");
    });
 
    document.getElementById("equipo").addEventListener('change', () => {
        actualizarSelect("serial", "SERIAL");
    });
 
    document.getElementById("concepto").addEventListener('change', (e) => {
        document.getElementById('camposTransporte').style.display = 
            e.target.value === 'TRANS' ? 'block' : 'none';
    });
 
    document.getElementById("copiar").addEventListener('click', async () => {
        const codigoInput = document.getElementById("codigo");
        try {
            await navigator.clipboard.writeText(codigoInput.value);
            showNotification('');
        } catch (err) {
            codigoInput.select();
            document.execCommand('copy');
            showNotification('');
        }
    });
 
    document.getElementById("limpiar").addEventListener('click', limpiarFormulario);
 
    window.addEventListener('beforeunload', limpiarFormulario);
 });
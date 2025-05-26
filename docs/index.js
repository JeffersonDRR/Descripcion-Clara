// Versión de la aplicación - Incrementa este número cada vez que hagas un cambio
const APP_VERSION = '1.0.1';

// Función para comprobar y limpiar el caché si hay una nueva versión
function checkAndClearCache() {
    const savedVersion = localStorage.getItem('appVersion');
    console.log('Versión guardada:', savedVersion, 'Versión actual:', APP_VERSION);
    
    if (savedVersion !== APP_VERSION) {
        console.log('Nueva versión detectada. Limpiando caché...');
        
        // Limpiar todos los selectores
        ['cliente', 'ciudad', 'equipo', 'serial', 'actividad', 'concepto'].forEach(id => {
            const select = document.getElementById(id);
            if (select) {
                select.innerHTML = "<option value=''>Seleccione una opción</option>";
                if (id !== 'cliente' && id !== 'actividad' && id !== 'concepto') {
                    select.disabled = true;
                }
            }
        });
        
        // Limpiar campos de transporte y código
        if (document.getElementById('camposTransporte')) {
            document.getElementById('camposTransporte').style.display = 'none';
        }
        if (document.getElementById('codigo')) {
            document.getElementById('codigo').value = '';
        }
        
        // Limpiar localStorage excepto la versión
        const keysToPreserve = ['appVersion'];
        Object.keys(localStorage).forEach(key => {
            if (!keysToPreserve.includes(key)) {
                localStorage.removeItem(key);
            }
        });
        
        // Limpiar sessionStorage
        sessionStorage.clear();
        
        // Actualizar la versión guardada
        localStorage.setItem('appVersion', APP_VERSION);
        
        console.log('Caché limpiado correctamente');
    }
}

document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault();
    
    // Capturar todos los valores necesarios
    const cliente = document.getElementById("cliente").value;
    const ciudad = document.getElementById("ciudad").value;
    const equipo = document.getElementById("equipo").value;
    const serial = document.getElementById("serial").value;
    const actividad = document.getElementById("actividad").value;
    const concepto = document.getElementById("concepto").value;
    const lugarInicial = document.getElementById("lugarInicial").value;
    const lugarFinal = document.getElementById("lugarFinal").value;

    // Agregar console.log para depuración
    console.log("Valores del formulario:", { 
        cliente, ciudad, equipo, serial, actividad, concepto
    });

    // Fix the date handling
    const fecha = document.getElementById("fecha").value;
    console.log("Fecha seleccionada:", fecha);
    
    const fechaObj = new Date(fecha + 'T00:00:00'); // Ensure correct date parsing
    console.log("Fecha objeto:", fechaObj);
    
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'short'
    }).toUpperCase();
    console.log("Fecha formateada:", fechaFormateada);

    // Buscar el código en la base de datos con depuración
    let codigoEncontrado = null;
    for (const item of baseDatos) {
        const clienteCoincide = item.CLIENTE === cliente || 
                               (cliente === 'TCC' && item.CLIENTE.includes('TCC'));
        const equipoCoincide = item.EQUIPO === equipo || item.EQUIPO === '';
        const ciudadCoincide = item.CIUDAD === ciudad || item.CIUDAD === '';
        const serialCoincide = item.SERIAL === serial || item.SERIAL === '';
        
        if (clienteCoincide && equipoCoincide && ciudadCoincide && serialCoincide) {
            codigoEncontrado = item.CODIGO;
            break;
        }
    }
    
    const codigo = codigoEncontrado || "";
    console.log("Código encontrado:", codigo);

    // Validación de datos con mensaje más descriptivo
    if (!cliente) {
        document.getElementById("codigo").value = "Seleccione un cliente";
        return;
    }
    
    if (!actividad) {
        document.getElementById("codigo").value = "Seleccione una actividad";
        return;
    }
    
    if (!concepto) {
        document.getElementById("codigo").value = "Seleccione un concepto";
        return;
    }
    
    if (!serial && actividad !== 'INT') {
        document.getElementById("codigo").value = "Seleccione un serial";
        return;
    }
    
    if (!codigo) {
        document.getElementById("codigo").value = "No se encontró un código para esta combinación";
        return;
    }

    let codigoGenerado = `${codigo} ${concepto} ${actividad}${actividad === 'INT' ? '' : ` ${serial}`} ${fechaFormateada}`;
    console.log("Código generado inicial:", codigoGenerado);
    
    if (concepto === 'TRANS') {
        const transporteVisible = document.getElementById('camposTransporte').style.display !== 'none';
        if (transporteVisible && (!lugarInicial || !lugarFinal)) {
            document.getElementById("codigo").value = "Seleccione lugares de transporte";
            return;
        }

        if (transporteVisible) {
            codigoGenerado = `${codigo} ${concepto} ${lugarInicial}-${lugarFinal} ${actividad}${actividad === 'INT' ? '' : ` ${serial}`} ${fechaFormateada}`;
            console.log("Código generado para transporte:", codigoGenerado);
        }
    }

    // Asignar el código generado y verificar que se haya asignado
    document.getElementById("codigo").value = codigoGenerado;
    console.log("Código final asignado:", codigoGenerado);
});

const baseDatos = [
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
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 125', CIUDAD: '', SERIAL: '7130180', CODIGO: '' },
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 100', CIUDAD: '', SERIAL: '5012591', CODIGO: '' },
    { CLIENTE: 'GPF', EQUIPO: 'CUBISCAN 100', CIUDAD: '', SERIAL: '5012592', CODIGO: '' },
    { CLIENTE: 'KUEHNE NAGEL', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '5011975', CODIGO: '(2860-110)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010228', CODIGO: '(2391-111)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 100', CIUDAD: 'QUITO', SERIAL: '16010492', CODIGO: '(2391-111)' },
    { CLIENTE: 'LA FAVORITA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'QUITO', SERIAL: '19030115', CODIGO: '(2391-111)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200TS', CIUDAD: 'SIBERIA FUNZA', SERIAL: '14164239', CODIGO: '(2860-112)' },
    { CLIENTE: 'LANDFAST', EQUIPO: 'CUBISCAN 200SQ', CIUDAD: 'SIBERIA FUNZA', SERIAL: '22409685', CODIGO: '(2860-112)' },
    { CLIENTE: 'LOGISPHARMA', EQUIPO: 'CUBISCAN 100', CIUDAD: '', SERIAL: '5011230', CODIGO: '' },
    { CLIENTE: 'LOGISTIK ALLIANCE', EQUIPO: 'CUBISCAN 200TS', CIUDAD: '', SERIAL: '14164247', CODIGO: '' },
    { CLIENTE: 'LOGYCA', EQUIPO: 'CUBISCAN 125', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '7130082', CODIGO: '(1100-113)' },
    { CLIENTE: 'MARKETING PERSONAL', EQUIPO: 'CUBISCAN 325', CIUDAD: 'MEDELLÍN', SERIAL: '17010192', CODIGO: '(5000-114)' },
    { CLIENTE: 'MAVESA', EQUIPO: 'CUBISCAN 325', CIUDAD: 'GUAYAQUIL', SERIAL: '22090021', CODIGO: '(2392-115)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 325', CIUDAD: 'FUNZA', SERIAL: '23080072', CODIGO: '(2860-116)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 100', CIUDAD: 'FUNZA', SERIAL: '18090234', CODIGO: '(2860-116)' },
    { CLIENTE: 'MERCADO LIBRE', EQUIPO: 'CUBISCAN 150', CIUDAD: 'FUNZA', SERIAL: '19110110', CODIGO: '(2860-116)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'FINANCIERO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-200)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'ADMINISTRATIVO', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-201)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'COMERCIAL', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-202)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'INGENIERÍA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-203)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'PUBLICIDAD', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-204)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'BIENESTAR', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-205)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'CAPACITACIÓN', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-206)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'HERRAMIENTA', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-207)' },
    { CLIENTE: 'MONTRA COLOMBIA SAS', EQUIPO: 'SGSST', CIUDAD: 'BOGOTÁ D.C.', SERIAL: '', CODIGO: '(1100-208)' },
    { CLIENTE: "MONTRA COLOMBIA SAS", EQUIPO: "IVENTARIO", CIUDAD: "BOGOTÁ D.C.", SERIAL: "", CODIGO: "(1100-200)" },
    { CLIENTE: 'P&G', EQUIPO: 'CUBISCAN 110L', CIUDAD: '', SERIAL: '16020290', CODIGO: '' },
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
    "GARANTÍA": "GAR",
    "OTRO": "OTRO"
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
    // Obtener la lista de clientes únicos de la base de datos
    const clientes = [...new Set(baseDatos.map(item => item.CLIENTE))]
        .map(cliente => cliente.includes('TCC') ? 'TCC' : cliente);
 
    const clienteSelect = document.getElementById("cliente");
 
    // Limpiar y luego llenar el select de clientes
    clienteSelect.innerHTML = "<option value=''>Seleccione una opción</option>";
    [...new Set(clientes)].sort().forEach(cliente => {
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
    
    notification.textContent = message || "Código copiado";
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
 }
 
 document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded: Inicializando formulario");
    
    // Comprobar la versión y limpiar caché si es necesario
    checkAndClearCache();
 
    inicializarSelects();
 
    document.getElementById("actividad").addEventListener('change', (e) => {
        console.log("Actividad cambiada a:", e.target.value);
        if (e.target.value === 'INT') {
            document.getElementById("cliente").value = 'MONTRA COLOMBIA SAS';
            document.getElementById("cliente").dispatchEvent(new Event('change'));
        }
    });
 
    document.getElementById("cliente").addEventListener('change', () => {
        console.log("Cliente cambiado a:", document.getElementById("cliente").value);
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
        console.log("Ciudad cambiada a:", document.getElementById("ciudad").value);
        actualizarSelect("equipo", "EQUIPO");
        actualizarSelect("serial", "SERIAL");
    });
 
    document.getElementById("equipo").addEventListener('change', () => {
        console.log("Equipo cambiado a:", document.getElementById("equipo").value);
        actualizarSelect("serial", "SERIAL");
    });
 
    document.getElementById("concepto").addEventListener('change', (e) => {
        console.log("Concepto cambiado a:", e.target.value);
        document.getElementById('camposTransporte').style.display = 
            e.target.value === 'TRANS' ? 'block' : 'none';
    });
 
    document.getElementById("copiar").addEventListener('click', async () => {
        const codigoInput = document.getElementById("codigo");
        console.log("Copiando código:", codigoInput.value);
        try {
            await navigator.clipboard.writeText(codigoInput.value);
            showNotification('Código copiado');
        } catch (err) {
            codigoInput.select();
            document.execCommand('copy');
            showNotification('Código copiado');
        }
    });
 
    document.getElementById("limpiar").addEventListener('click', limpiarFormulario);
 
    // Verificar opciones disabled en selects
    const selects = ['cliente', 'ciudad', 'equipo', 'serial', 'actividad', 'concepto'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        const options = select.querySelectorAll('option');
        options.forEach(opt => {
            // Si es la primera opción, asegurarse de que no esté disabled
            if (opt.index === 0) {
                opt.disabled = false;
            }
        });
    });

    console.log("Inicialización completa");
});

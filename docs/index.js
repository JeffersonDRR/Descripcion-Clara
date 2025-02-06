document.addEventListener("DOMContentLoaded", () => {
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

    const actividades = {
        "MANTENIMIENTO PREVENTIVO": "MAN P",
        "MANTENIMIENTO CORRECTIVO": "MAN C",
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

    function llenarSelect(select, opciones, valorPorDefecto = true) {
        select.innerHTML = valorPorDefecto ? "<option value=''>Seleccione una opción</option>" : "";
        Object.keys(opciones).forEach(key => {
            let option = document.createElement("option");
            option.value = opciones[key];
            option.textContent = key;
            select.appendChild(option);
        });
    }

    function filtrarOpciones(selectOrigen, selectDestino, propiedad) {
        const valorSeleccionado = selectOrigen.value;
        const opcionesFiltradas = [...new Set(baseDatos
            .filter(item => item[propiedad.toUpperCase()] === valorSeleccionado)
            .map(item => item[selectDestino.id.toUpperCase()])
        )];

        llenarSelect(selectDestino, Object.fromEntries(opcionesFiltradas.map(v => [v, v])), false);
        selectDestino.disabled = opcionesFiltradas.length === 0;
    }

    function setupFiltradoProgresivo() {
        const selects = ['cliente', 'ciudad', 'equipo', 'serial'];
        
        selects.forEach((selectId, index) => {
            const selectActual = document.getElementById(selectId);
            
            selectActual.addEventListener('change', () => {
                if (index < selects.length - 1) {
                    const selectSiguiente = document.getElementById(selects[index + 1]);
                    selectSiguiente.innerHTML = "<option value=''>Seleccione una opción</option>";
                    selectSiguiente.disabled = true;
                    
                    if (selectActual.value) {
                        filtrarOpciones(selectActual, selectSiguiente, selectId);
                    }
                }
            });
        });
    }

    function cargarSelects() {
        const clienteSelect = document.getElementById("cliente");
        const ciudadSelect = document.getElementById("ciudad");
        const equipoSelect = document.getElementById("equipo");
        const serialSelect = document.getElementById("serial");
        const actividadSelect = document.getElementById("actividad");
        const conceptoSelect = document.getElementById("concepto");
        const lugarInicialSelect = document.getElementById("lugarInicial");
        const lugarFinalSelect = document.getElementById("lugarFinal");

        const clientes = [...new Set(baseDatos.map(item => item.CLIENTE))];
        const ciudades = [...new Set(baseDatos.map(item => item.CIUDAD))];
        const equipos = [...new Set(baseDatos.map(item => item.EQUIPO))];
        const seriales = [...new Set(baseDatos.map(item => item.SERIAL))];

        llenarSelect(clienteSelect, Object.fromEntries(clientes.map(c => [c, c])));
        llenarSelect(ciudadSelect, Object.fromEntries(ciudades.map(c => [c, c])));
        llenarSelect(equipoSelect, Object.fromEntries(equipos.map(e => [e, e])));
        llenarSelect(serialSelect, Object.fromEntries(seriales.map(s => [s, s])));
        llenarSelect(actividadSelect, actividades);
        llenarSelect(conceptoSelect, conceptos);
        llenarSelect(lugarInicialSelect, lugaresTransporte);
        llenarSelect(lugarFinalSelect, lugaresTransporte);

        setupFiltradoProgresivo();
    }

    document.getElementById("concepto").addEventListener('change', (e) => {
        const camposTransporte = document.getElementById('camposTransporte');
        camposTransporte.style.display = e.target.value === 'TRANS' ? 'block' : 'none';
    });

    document.getElementById("copiar").addEventListener('click', () => {
        const codigoInput = document.getElementById("codigo");
        codigoInput.select();
        document.execCommand('copy');
        alert('Código copiado al portapapeles');
    });

    document.getElementById("limpiar").addEventListener('click', () => {
        document.getElementById("form").reset();
        document.getElementById('camposTransporte').style.display = 'none';
        
        const selects = ['ciudad', 'equipo', 'serial'];
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            select.innerHTML = "<option value=''>Seleccione una opción</option>";
            select.disabled = true;
        });
    });

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

        const codigo = baseDatos.find(d => 
            d.CLIENTE === cliente && 
            d.EQUIPO === equipo && 
            d.CIUDAD === ciudad && 
            d.SERIAL === serial
        )?.CODIGO || "";
        
        if (codigo && actividad && concepto) {
            let codigoGenerado = `${codigo} ${concepto} ${actividad} ${serial} 15 ENE`;
            
            if (concepto === 'TRANS') {
                codigoGenerado = `${codigo} ${concepto} ${lugarInicial}-${lugarFinal} ${actividad} ${serial} 15 ENE`;
            }

            document.getElementById("codigo").value = codigoGenerado;
        } else {
            document.getElementById("codigo").value = "Datos incompletos";
        }
    });

    cargarSelects();
});
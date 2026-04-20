// js/main.js
import databaseOriginal from './data/database.js';
import { renderizarTabla } from './modules/ui.js';
import { guardarEnStorage, obtenerDeStorage } from './modules/storage.js';
import { abrirModal, cerrarModal } from './modules/modal.js';

// ── ESTADO GLOBAL ────────────────────────────────────────────────
let datosApp = obtenerDeStorage() || [...databaseOriginal];

// ── CATÁLOGOS ────────────────────────────────────────────────────
const actividades = {
  "MANTENIMIENTO PREVENTIVO":          "MAN P",
  "MANTENIMIENTO PREVENTIVO Y BANDAS": "MAN P+B",
  "MANTENIMIENTO CORRECTIVO":          "MAN C",
  "MANTENIMIENTO CORRECTIVO Y BANDAS": "MAN C+B",
  "INTERNO":      "INT",
  "VISITA EXTRA": "VIS EXT",
  "INSTALACIÓN":  "INS",
  "GARANTÍA":     "GAR",
  "OTRO":         "OTRO"
};

const conceptos = {
  "TRANSPORTE":           "TRANS",
  "CENA":                 "CENA",
  "ALMUERZO":             "ALMU",
  "DESAYUNO":             "DES",
  "HERRAMIENTA":          "HERR",
  "HOTEL":                "HOT",
  "CAFETERIA":            "CAF",
  "BIENESTAR":            "BIEN",
  "ASEO":                 "ASE",
  "PAGO POR EQUIVOCACIÓN":"CXC",
  "CLIENTE":              "CLI",
  "OTRO":                 "OTRO"
};

const lugaresTransporte = {
  "CLIENTE":    "CLI",
  "HOTEL":      "HOT",
  "CASA":       "CAS",
  "AEROPUERTO": "AER",
  "OFICINA":    "OFI",
  "CIT":        "CIT"
};

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!obtenerDeStorage()) guardarEnStorage(datosApp);

  // Fecha de hoy
  const fechaInput = document.getElementById('fecha');
  if (fechaInput) {
    const hoy = new Date();
    fechaInput.value = `${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,'0')}-${String(hoy.getDate()).padStart(2,'0')}`;
  }

  renderizarTabla(datosApp);
  inicializarGenerador();
  inicializarAdmin();
});

// ── GENERADOR ────────────────────────────────────────────────────
function inicializarGenerador() {
  llenarSelectObj('actividad', actividades);
  llenarSelectObj('concepto',  conceptos);
  llenarSelectObj('lugarInicial', lugaresTransporte);
  llenarSelectObj('lugarFinal',   lugaresTransporte);
  refrescarClientes();

  // Cascada de selects
  document.getElementById('cliente').addEventListener('change', () => {
    resetSelects(['ciudad','equipo','serial']);
    refrescarCiudades();
  });
  document.getElementById('ciudad').addEventListener('change', () => {
    resetSelects(['equipo','serial']);
    refrescarEquipos();
  });
  document.getElementById('equipo').addEventListener('change', () => {
    resetSelects(['serial']);
    refrescarSeriales();
  });

  // Actividad INTERNO → fuerza cliente MONTRA
  document.getElementById('actividad').addEventListener('change', (e) => {
    if (e.target.value === 'INT') {
      const sel = document.getElementById('cliente');
      sel.value = 'MONTRA COLOMBIA SAS';
      sel.dispatchEvent(new Event('change'));
    }
  });

  // Concepto TRANS → mostrar campos transporte
  document.getElementById('concepto').addEventListener('change', (e) => {
    document.getElementById('camposTransporte').style.display =
      e.target.value === 'TRANS' ? 'block' : 'none';
  });

  // Submit formulario generador
  document.getElementById('generador-codigo').addEventListener('submit', generarCodigo);

  // Copiar
  document.getElementById('copiar').addEventListener('click', async () => {
    const val = document.getElementById('codigo').value;
    if (!val) return;
    try { await navigator.clipboard.writeText(val); }
    catch { document.getElementById('codigo').select(); document.execCommand('copy'); }
    mostrarNotificacion('Código copiado ✓');
  });

  // Limpiar
  document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('generador-codigo').reset();
    document.getElementById('camposTransporte').style.display = 'none';
    document.getElementById('codigo').value = '';
    resetSelects(['ciudad','equipo','serial']);
    refrescarClientes();
  });
}

function refrescarClientes() {
  const clientes = [...new Set(datosApp.map(i => i.cliente))].sort();
  llenarSelectArr('cliente', clientes, 'Selecciona un cliente');
}

function refrescarCiudades() {
  const cliente = document.getElementById('cliente').value;
  const filtrado = datosApp.filter(i => i.cliente === cliente && i.ciudad);
  const ciudades = [...new Set(filtrado.map(i => i.ciudad))].sort();
  llenarSelectArr('ciudad', ciudades, 'Selecciona una ciudad');
  document.getElementById('ciudad').disabled = ciudades.length === 0;
  if (ciudades.length === 1) {
    document.getElementById('ciudad').value = ciudades[0];
    document.getElementById('ciudad').dispatchEvent(new Event('change'));
  }
}

function refrescarEquipos() {
  const cliente = document.getElementById('cliente').value;
  const ciudad  = document.getElementById('ciudad').value;
  const filtrado = datosApp.filter(i =>
    i.cliente === cliente && (!ciudad || i.ciudad === ciudad) && i.equipo
  );
  const equipos = [...new Set(filtrado.map(i => i.equipo))].sort();
  llenarSelectArr('equipo', equipos, 'Selecciona un equipo');
  document.getElementById('equipo').disabled = equipos.length === 0;
  if (equipos.length === 1) {
    document.getElementById('equipo').value = equipos[0];
    document.getElementById('equipo').dispatchEvent(new Event('change'));
  }
}

function refrescarSeriales() {
  const cliente = document.getElementById('cliente').value;
  const ciudad  = document.getElementById('ciudad').value;
  const equipo  = document.getElementById('equipo').value;
  const filtrado = datosApp.filter(i =>
    i.cliente === cliente &&
    (!ciudad || i.ciudad === ciudad) &&
    (!equipo || i.equipo === equipo) &&
    i.serial
  );
  const seriales = [...new Set(filtrado.map(i => i.serial))].sort();
  llenarSelectArr('serial', seriales, 'Selecciona un serial');
  document.getElementById('serial').disabled = seriales.length === 0;
  if (seriales.length === 1) {
    document.getElementById('serial').value = seriales[0];
  }
}

function generarCodigo(e) {
  e.preventDefault();
  const cliente   = document.getElementById('cliente').value;
  const ciudad    = document.getElementById('ciudad').value;
  const equipo    = document.getElementById('equipo').value;
  const serial    = document.getElementById('serial').value;
  const actividad = document.getElementById('actividad').value;
  const concepto  = document.getElementById('concepto').value;
  const fecha     = document.getElementById('fecha').value;
  const lugarIni  = document.getElementById('lugarInicial').value;
  const lugarFin  = document.getElementById('lugarFinal').value;
  const codigoEl  = document.getElementById('codigo');

  if (!cliente)   { codigoEl.value = '⚠ Seleccione un cliente'; return; }
  if (!actividad) { codigoEl.value = '⚠ Seleccione una actividad'; return; }
  if (!concepto)  { codigoEl.value = '⚠ Seleccione un concepto'; return; }
  if (!serial && actividad !== 'INT') { codigoEl.value = '⚠ Seleccione un serial'; return; }

  // Buscar código en datosApp
  let codigoBase = '';
  for (const item of datosApp) {
    const cliOk    = item.cliente === cliente;
    const ciudadOk = !item.ciudad || item.ciudad === ciudad;
    const equipoOk = !item.equipo || item.equipo === equipo;
    const serialOk = !item.serial || item.serial === serial;
    if (cliOk && ciudadOk && equipoOk && serialOk) {
      codigoBase = item.codigo;
      break;
    }
  }

  if (!codigoBase) { codigoEl.value = '⚠ No se encontró código para esta combinación'; return; }

  const fechaObj = new Date(fecha + 'T00:00:00');
  const fechaFmt = fechaObj.toLocaleDateString('es-ES', { day:'numeric', month:'short' }).toUpperCase();
  const serialPart = actividad !== 'INT' ? ` ${serial}` : '';

  let resultado = `${codigoBase} ${concepto} ${actividad}${serialPart} ${fechaFmt}`;

  if (concepto === 'TRANS') {
    const transVisible = document.getElementById('camposTransporte').style.display !== 'none';
    if (transVisible && (!lugarIni || !lugarFin)) {
      codigoEl.value = '⚠ Seleccione lugares de transporte';
      return;
    }
    if (transVisible) {
      resultado = `${codigoBase} ${concepto} ${lugarIni}-${lugarFin} ${actividad}${serialPart} ${fechaFmt}`;
    }
  }

  codigoEl.value = resultado;
}

// ── ADMIN ────────────────────────────────────────────────────────
function inicializarAdmin() {
  // Buscador
  document.getElementById('buscador').addEventListener('input', (e) => {
    const t = e.target.value.toLowerCase();
    renderizarTabla(datosApp.filter(i =>
      i.cliente.toLowerCase().includes(t) ||
      i.serial.toLowerCase().includes(t)  ||
      i.ciudad.toLowerCase().includes(t)
    ));
  });

  // Delegación de clicks en tabla
  document.getElementById('lista-database').addEventListener('click', (e) => {
    const btnDel  = e.target.closest('.btn-delete');
    const btnEdit = e.target.closest('.btn-edit');
    if (btnDel)  eliminarRegistro(Number(btnDel.dataset.index));
    if (btnEdit) abrirModal(Number(btnEdit.dataset.index), datosApp, onGuardar);
  });

  // Botón Nuevo
  document.getElementById('btn-nuevo').addEventListener('click', () => {
    abrirModal(null, datosApp, onGuardar);
  });
}

function eliminarRegistro(index) {
  const item = datosApp[index];
  if (confirm(`¿Eliminar ${item.equipo} de ${item.cliente}?`)) {
    datosApp.splice(index, 1);
    guardarEnStorage(datosApp);
    renderizarTabla(datosApp);
    refrescarClientes();
    mostrarNotificacion('Registro eliminado');
  }
}

// Callback cuando el modal guarda
function onGuardar(index, datos) {
  if (index === null) {
    datosApp.push(datos);
    mostrarNotificacion('Registro agregado ✓');
  } else {
    datosApp[index] = datos;
    mostrarNotificacion('Registro actualizado ✓');
  }
  guardarEnStorage(datosApp);
  renderizarTabla(datosApp);
  refrescarClientes();
  cerrarModal();
}

// ── HELPERS ──────────────────────────────────────────────────────
function llenarSelectArr(id, arr, placeholder) {
  const sel = document.getElementById(id);
  sel.innerHTML = `<option value="">${placeholder}</option>`;
  arr.forEach(v => { const o = document.createElement('option'); o.value = o.textContent = v; sel.appendChild(o); });
}

function llenarSelectObj(id, obj) {
  const sel = document.getElementById(id);
  sel.innerHTML = `<option value="">Selecciona</option>`;
  Object.entries(obj).forEach(([k,v]) => {
    const o = document.createElement('option');
    o.value = v; o.textContent = k; sel.appendChild(o);
  });
}

function resetSelects(ids) {
  ids.forEach(id => {
    const s = document.getElementById(id);
    s.innerHTML = '<option value="">Selecciona</option>';
    s.disabled = true;
  });
}

function mostrarNotificacion(msg) {
  const n = document.getElementById('notificacion');
  n.textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 2500);
}

export { datosApp, mostrarNotificacion };

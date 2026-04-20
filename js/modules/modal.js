// js/modules/modal.js

let _callbackGuardar = null;

/**
 * Abre el modal en modo "nuevo" (index === null) o "editar" (index = número)
 * @param {number|null} index  - posición en datosApp, null = nuevo
 * @param {Array}       datos  - array completo de datosApp
 * @param {Function}    onSave - callback(index, nuevosDatos)
 */
export function abrirModal(index, datos, onSave) {
  _callbackGuardar = onSave;

  const overlay    = document.getElementById('modal-overlay');
  const titulo     = document.getElementById('modal-titulo');
  const btnGuardar = document.getElementById('modal-guardar');
  const inputIndex = document.getElementById('modal-index');

  // Limpiar errores previos
  limpiarErrores();

  if (index === null) {
    // Modo NUEVO
    titulo.textContent       = 'Nuevo Registro';
    btnGuardar.textContent   = 'Guardar Registro';
    inputIndex.value         = '';
    limpiarCampos();
  } else {
    // Modo EDITAR
    const reg = datos[index];
    titulo.textContent       = 'Editar Registro';
    btnGuardar.textContent   = 'Guardar Cambios';
    inputIndex.value         = index;
    document.getElementById('m-cliente').value = reg.cliente || '';
    document.getElementById('m-equipo').value  = reg.equipo  || '';
    document.getElementById('m-ciudad').value  = reg.ciudad  || '';
    document.getElementById('m-serial').value  = reg.serial  || '';
    document.getElementById('m-codigo').value  = reg.codigo  || '';
  }

  overlay.classList.remove('oculto');

  // Foco en primer campo
  setTimeout(() => document.getElementById('m-cliente').focus(), 50);
}

export function cerrarModal() {
  document.getElementById('modal-overlay').classList.add('oculto');
  limpiarCampos();
  limpiarErrores();
}

// ── LISTENERS DEL MODAL ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-cerrar').addEventListener('click', cerrarModal);
  document.getElementById('modal-cancelar').addEventListener('click', cerrarModal);

  // Clic fuera del modal lo cierra
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) cerrarModal();
  });

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
  });

  // Submit del formulario modal
  document.getElementById('form-modal').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validar()) return;

    const indexVal = document.getElementById('modal-index').value;
    const index    = indexVal === '' ? null : Number(indexVal);

    const nuevoDato = {
      cliente: document.getElementById('m-cliente').value.trim().toUpperCase(),
      equipo:  document.getElementById('m-equipo').value.trim().toUpperCase(),
      ciudad:  document.getElementById('m-ciudad').value.trim().toUpperCase(),
      serial:  document.getElementById('m-serial').value.trim(),
      codigo:  document.getElementById('m-codigo').value.trim().toUpperCase(),
    };

    if (_callbackGuardar) _callbackGuardar(index, nuevoDato);
  });

  // Limpiar error al escribir
  ['m-cliente','m-equipo','m-codigo'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      document.getElementById(id).classList.remove('input-error');
    });
  });
});

// ── HELPERS ──────────────────────────────────────────────────────
function validar() {
  let ok = true;

  const campos = [
    { id: 'm-cliente', errId: 'err-cliente', msg: 'El cliente es obligatorio' },
    { id: 'm-equipo',  errId: 'err-equipo',  msg: 'El equipo es obligatorio'  },
    { id: 'm-codigo',  errId: 'err-codigo',  msg: 'El código es obligatorio'  },
  ];

  campos.forEach(({ id, errId, msg }) => {
    const inp = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!inp.value.trim()) {
      inp.classList.add('input-error');
      err.textContent = msg;
      ok = false;
    } else {
      inp.classList.remove('input-error');
      err.textContent = '';
    }
  });

  return ok;
}

function limpiarCampos() {
  ['m-cliente','m-equipo','m-ciudad','m-serial','m-codigo'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

function limpiarErrores() {
  ['m-cliente','m-equipo','m-codigo'].forEach(id => {
    document.getElementById(id).classList.remove('input-error');
  });
  ['err-cliente','err-equipo','err-codigo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}

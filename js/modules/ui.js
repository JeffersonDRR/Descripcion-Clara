// js/modules/ui.js

/**
 * Renderiza todas las filas de la tabla de administración.
 * @param {Array} datos - Array de objetos de la base de datos
 */
export function renderizarTabla(datos) {
  const tabla = document.getElementById('lista-database');
  if (!tabla) return;

  if (datos.length === 0) {
    tabla.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:32px; color:#b0b0b0; font-style:italic;">
          No se encontraron registros
        </td>
      </tr>`;
    return;
  }

  tabla.innerHTML = datos.map((item, index) => `
    <tr>
      <td>${item.cliente}</td>
      <td>${item.equipo}</td>
      <td>${item.ciudad || '—'}</td>
      <td style="font-family:'Space Mono',monospace; font-size:0.82rem;">${item.serial || '—'}</td>
      <td><strong>${item.codigo}</strong></td>
      <td class="acciones">
        <button class="btn-accion btn-edit" data-index="${index}" title="Editar">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Editar
        </button>
        <button class="btn-accion btn-delete" data-index="${index}" title="Eliminar">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
          Borrar
        </button>
      </td>
    </tr>
  `).join('');
}

/**
 * Llena un select con un array de strings
 */
export function llenarSelect(id, opciones, placeholder = 'Seleccione una opción') {
  const select = document.getElementById(id);
  if (!select) return;
  select.innerHTML = `<option value="">${placeholder}</option>`;
  opciones.forEach(op => {
    const o = document.createElement('option');
    o.value = o.textContent = op;
    select.appendChild(o);
  });
}

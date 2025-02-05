// src/index.js
import database from './database';

document.addEventListener('DOMContentLoaded', () => {
  const clienteSelect = document.getElementById('cliente');
  const equipoSelect = document.getElementById('equipo');
  const ciudadSelect = document.getElementById('ciudad');
  const serialSelect = document.getElementById('serial');
  const resultado = document.getElementById('resultado');

  // Poblamos los selects con los valores de la base de datos
  const clientes = [...new Set(database.map(item => item.cliente))];
  clientes.forEach(cliente => {
    const option = document.createElement('option');
    option.value = cliente;
    option.textContent = cliente;
    clienteSelect.appendChild(option);
  });

  // Listener para los cambios de selección
  clienteSelect.addEventListener('change', updateOptions);
  equipoSelect.addEventListener('change', updateOptions);
  ciudadSelect.addEventListener('change', updateOptions);
  serialSelect.addEventListener('change', generateCode);

  function updateOptions() {
    const selectedCliente = clienteSelect.value;
    const filteredData = database.filter(item => item.cliente === selectedCliente);

    equipoSelect.innerHTML = '';
    ciudadSelect.innerHTML = '';
    serialSelect.innerHTML = '';

    // Populate equipo, ciudad, and serial based on selected cliente
    filteredData.forEach(item => {
      const equipoOption = document.createElement('option');
      equipoOption.value = item.equipo;
      equipoOption.textContent = item.equipo;
      equipoSelect.appendChild(equipoOption);

      const ciudadOption = document.createElement('option');
      ciudadOption.value = item.ciudad;
      ciudadOption.textContent = item.ciudad;
      ciudadSelect.appendChild(ciudadOption);

      const serialOption = document.createElement('option');
      serialOption.value = item.serial;
      serialOption.textContent = item.serial;
      serialSelect.appendChild(serialOption);
    });

    generateCode(); // Regenera el código cuando cambian los selects
  }

  function generateCode() {
    const selectedCliente = clienteSelect.value;
    const selectedEquipo = equipoSelect.value;
    const selectedCiudad = ciudadSelect.value;
    const selectedSerial = serialSelect.value;

    if (selectedCliente && selectedEquipo && selectedCiudad && selectedSerial) {
      const filteredData = database.filter(item =>
        item.cliente === selectedCliente &&
        item.equipo === selectedEquipo &&
        item.ciudad === selectedCiudad &&
        item.serial === selectedSerial
      );

      if (filteredData.length > 0) {
        const data = filteredData[0];
        const codigo = `${data.codigo} ${selectedCiudad === 'CALI' ? 'CAS-AER' : 'CAS'} MAN P ${data.serial} 15 ENE`;
        resultado.textContent = codigo;
      }
    }
  }
});
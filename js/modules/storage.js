// js/modules/storage.js

const DB_KEY = 'cubiscan_db_local';

export function guardarEnStorage(datos) {
  localStorage.setItem(DB_KEY, JSON.stringify(datos));
}

export function obtenerDeStorage() {
  const datos = localStorage.getItem(DB_KEY);
  return datos ? JSON.parse(datos) : null;
}

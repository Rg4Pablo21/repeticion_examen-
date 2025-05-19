
const BASE_URL = 'http://localhost:4000/api/personas';

export const api = {
  // GET → lista completa
  obtenerTodos: () => fetch(BASE_URL).then(r => r.json()),

  // POST  crea nueva persona
  crear: (data) =>
    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(r => r.json()),

  // DELETE  borra una persona por id
  eliminar: (id) =>
    fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }).then(r => r.json())
};

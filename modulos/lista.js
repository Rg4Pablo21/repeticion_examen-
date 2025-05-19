/* Lista que muestra y permite eliminar personas */
import { api } from '../servicios/api.js';

export function Lista() {
  let lista4 = document.createElement('div');
  lista4.className = 'lista';

  // Carga datos y los pinta
  async function pintar() {
    lista4.innerHTML = '';
    let personas = await api.obtenerTodos();

    personas.forEach(({ id, nombre, edad }) => {
      let fila = document.createElement('div');
      fila.className = 'fila';

      fila.innerHTML = `
        <span>${nombre} – ${edad} años</span>
        <button data-id="${id}">Eliminar</button>
      `;

      
      fila.querySelector('button').onclick = async () => {
        await api.eliminar(id);
        pintar(); 
      };

      lista4.appendChild(fila);
    });
  }

  pintar();
  lista4.refrescar = pintar;   
  return lista4;
}

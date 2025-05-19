/* Formulario para crear personas */
import { api } from '../servicios/api.js';

export function Formulario(refrescarLista) {
  let formulario2 = document.createElement('form');
  formulario2.className = 'formulario';

  // Plantilla HTML del formulario
  formulario2.innerHTML = `
    <input name="nombre" placeholder="Nombre" required>
    <input name="edad"   type="number" min="1" max="120" placeholder="Edad" required>
    <button>Registrar</button>
  `;

  formulario2.addEventListener('submit', async (e) => {
    e.preventDefault();                          
    const datos = Object.fromEntries(new FormData(formulario2)); 
    await api.crear(datos);                      
    formulario2.reset();                                
    refrescarLista();                            
  });

  return formulario2;
}

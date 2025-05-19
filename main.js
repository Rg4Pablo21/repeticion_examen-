import { registroView } from './vistas/registro.js';

const rutas = { '': registroView, '#/registro': registroView };

function router() {
  const root = document.getElementById('app');
  if (!root) {                         
    console.error('No se encontró #app en el DOM');
    return;
  }
  root.innerHTML = '';

  const vista = rutas[location.hash] || rutas[''];
  vista(root);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

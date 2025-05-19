import { Header }     from '../modulos/header.js';
import { Formulario } from '../modulos/formulario.js';
import { Lista }      from '../modulos/lista.js';
import { Footer }     from '../modulos/footer.js';


export function registroView(root) {
  const lista = Lista(); // necesitamos acceso para refrescar luego

  root.append(
    Header(),
    Formulario(() => lista.refrescar()),
    lista,
    Footer()
  );
}

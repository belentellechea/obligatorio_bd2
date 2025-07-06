export function eleccionActiva() {
  const inicio = new Date(localStorage.getItem("fecha_inicio"));
  const fin = new Date(localStorage.getItem("fecha_fin"));
  const ahora = new Date();

  return ahora >= inicio && ahora <= fin;
}

export function eleccionFinalizada() {
  const fin = new Date(localStorage.getItem("fecha_fin"));
  const ahora = new Date();

  return ahora > fin;
}

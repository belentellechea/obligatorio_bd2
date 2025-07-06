export function formatearFecha(fechaString) {
  const fecha = new Date(fechaString);
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
  const año = fecha.getFullYear();
  return `${dia}/${mes}/${año}`;
}

export function generateColors(count) {
  const baseColors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
  ];
  return Array.from({ length: count }, (_, i) => baseColors[i % baseColors.length]);
}

export function formatLabel(label) {
  if (label === "anulado") {
    return "Anulado";
  }
  if (label === "valido_en_blanco") {
    return "En blanco";
  }
  
  return label;
}


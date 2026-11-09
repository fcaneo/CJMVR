// Utilidades compartidas por las herramientas (se carga antes del script de cada página).

// Escapa texto para insertarlo en HTML, incluidas comillas: es seguro
// tanto en contenido como dentro de atributos (aria-label="...").
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

# Club Juegos de Mesa Quinta Región

Sitio web del **Club Juegos de Mesa Quinta Región**, Viña del Mar.

🌐 **Web en vivo:** https://fcaneo.github.io/CJMVR/

📍 **Encuentros:**
- **Jueves 19:30** en [Curva 54](https://www.instagram.com/barcurva54/) — abierto a todos, gratis, +18
- **Lunes 20:00** en [Gato Arcano](https://gatoarcano.cl/) — solo socios

📱 [Instagram @clubjuegosdemesaquintaregion](https://www.instagram.com/clubjuegosdemesaquintaregion) · [Grupo de WhatsApp](https://chat.whatsapp.com/GYmennwlxbxDE3G6Ljhrbh)

---

## Páginas

| URL | Descripción |
|-----|-------------|
| [`/`](https://fcaneo.github.io/CJMVR/) | Sitio principal: hero, encuentros, ludoteca, eventos, FAQ, alianzas |
| [`/mesa.html`](https://fcaneo.github.io/CJMVR/mesa.html) | **Mesa de juego** — landing de las 4 herramientas |
| [`/dado.html`](https://fcaneo.github.io/CJMVR/dado.html) | Recomendador al azar del top 50 BoardGameGeek |
| [`/sorteo.html`](https://fcaneo.github.io/CJMVR/sorteo.html) | Sorteo de orden de turno (hasta 12 jugadores) |
| [`/marcador.html`](https://fcaneo.github.io/CJMVR/marcador.html) | Marcador de partidas con persistencia y podio |
| [`/temporizador.html`](https://fcaneo.github.io/CJMVR/temporizador.html) | Chess clock para juegos de mesa largos (hasta 12 jugadores) |
| [`/dados.html`](https://fcaneo.github.io/CJMVR/dados.html) | Multi-dado D4 a D20, hasta 10 dados con suma e historial |
| [`/tichu.html`](https://fcaneo.github.io/CJMVR/tichu.html) | Marcador de Tichu con cálculo de Tichu/Gran Tichu/1-2 y dragones animados |
| [`/404.html`](https://fcaneo.github.io/CJMVR/404.html) | Página de error con personalidad |

## Estructura del repositorio

```
CJMVR/
├── index.html              # Sitio principal
├── mesa.html               # Landing de herramientas (Mesa de juego)
├── dado.html               # Herramienta: recomendador BGG
├── sorteo.html             # Herramienta: sorteo de orden
├── marcador.html           # Herramienta: marcador con persistencia
├── temporizador.html       # Herramienta: chess clock multi-jugador
├── dados.html              # Herramienta: multi-dado D4-D20
├── tichu.html              # Herramienta: marcador de Tichu
├── 404.html                # Página de error
├── robots.txt              # Permite indexación, apunta al sitemap
├── sitemap.xml             # Sitemap XML para buscadores
├── README.md               # Este archivo
└── assets/
    ├── tools.css           # Estilos compartidos de las 3 herramientas
    ├── images/
    │   ├── og-image.png    # Imagen al compartir (1200x630, fondo negro + logo)
    │   ├── curva-54.jpg    # Foto del club jugando en Curva 54
    │   └── gato-arcano.jpg # Foto del equipo de Gato Arcano
    └── logo/
        └── cjmvr-logo-blanco.png  # Logo oficial del club (transparente)
```

## Stack técnico

- **HTML estático** — sin frameworks pesados, sin builds, sin servidor
- **Tailwind CSS** vía CDN para el sitio principal
- **CSS custom** (tools.css) para las herramientas standalone
- Tipografías: [Anton](https://fonts.google.com/specimen/Anton) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) (monospace)
- **Persistencia local:** `localStorage` para el marcador (nombres, scores e historial), nunca se sube a ningún servidor
- **SEO:** Schema.org `SportsClub` + `WebSite`, Open Graph, Twitter Cards, sitemap.xml, robots.txt
- **Accesibilidad:** focus visible, aria-labels, focus trap en modales, `prefers-reduced-motion`

## Características destacadas

- 🎲 **Easter egg:** 5 clics rápidos al dado del nav abre el modal de recomendación
- 🟢 **Estado en vivo:** los jueves desde las 19:30 muestra "ESTAMOS JUGANDO AHORA"
- 📅 **Próximo encuentro automático:** calcula el próximo jueves dinámicamente
- 🏆 **Marcador con personalidad:** frases sarcásticas en sorteo, rondas intermedias y podio
- 📜 **Histórico de partidas:** guarda las 3 últimas en el navegador del usuario
- 📱 **Layout dual mobile/desktop:** marcador con cards apiladas en mobile, tabla en desktop
- 🟢 **Botones flotantes:** acceso permanente a WhatsApp y compartir tras hacer scroll

## Cómo editar

1. Abrir cualquier `.html` con un editor de texto
2. Modificar lo necesario (textos, imágenes, links)
3. Subir el cambio:

   ```bash
   git add -A
   git commit -m "descripción del cambio"
   git push
   ```

4. En 1-2 minutos GitHub Pages actualiza la web pública

### Activar banner de evento próximo

En `index.html`, busca el bloque `<div id="event-banner" hidden ...>` y **quita el atributo `hidden`**. Edita el texto del evento. Cuando el evento pase, vuelve a poner `hidden`.

### Cambiar el WhatsApp del grupo

Buscar y reemplazar `https://chat.whatsapp.com/GYmennwlxbxDE3G6Ljhrbh` por la nueva URL en todos los archivos `.html`.

## Hosting

Servido gratis con [GitHub Pages](https://pages.github.com/) desde la rama `main`. Sin costo, sin servidor, sin mantención.

## Privacidad

- El sitio **no recolecta datos personales** ni tiene analytics
- El marcador guarda nombres y scores **solo en el navegador del usuario** (localStorage), nunca se transmiten
- Los únicos requests externos al cargar la página son a Google Fonts, Tailwind CDN y la API pública de Schema.org

## Licencia y atribuciones

- **Logo y branding:** propiedad del Club Juegos de Mesa Quinta Región
- **Foto Curva 54:** socios del club jugando en el local, con permiso del bar
- **Foto Gato Arcano:** del sitio oficial gatoarcano.cl, con permiso de la tienda
- **Top 50 juegos:** ranking oficial de [BoardGameGeek](https://boardgamegeek.com/browse/boardgame), descripciones propias
- **Código:** libre para que cualquier club o comunidad lo use de inspiración

---

*Página construida para mostrar el club, captar gente nueva los jueves, y dar imagen profesional para conversaciones con auspiciadores y postulaciones a fondos.*

# Club Juegos de Mesa Quinta Región

Sitio web del **Club Juegos de Mesa Quinta Región**, Viña del Mar.

🌐 **Web en vivo:** https://fcaneo.github.io/CJMVR/

📍 Nos juntamos los **jueves desde las 19:30 en [Curva 54](https://www.instagram.com/barcurva54/)** (abierto a todos, gratis) y los **lunes desde las 20:00 en [Gato Arcano](https://gatoarcano.cl/)** (solo socios).

📱 [Instagram @clubjuegosdemesaquintaregion](https://www.instagram.com/clubjuegosdemesaquintaregion) · [Grupo de WhatsApp](https://chat.whatsapp.com/GYmennwlxbxDE3G6Ljhrbh)

---

## Estructura del repo

```
CJMVR/
├── index.html              # Toda la web en un solo archivo
├── README.md
└── assets/
    ├── images/             # Fotos del club y los locales
    │   ├── curva-54.jpg
    │   └── gato-arcano.jpg
    └── logo/
        └── cjmvr-logo-blanco.png
```

## Stack

- **HTML estático** + **Tailwind CSS** (vía CDN)
- Tipografías: [Anton](https://fonts.google.com/specimen/Anton) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) (mono)
- Sin build, sin dependencias, sin servidor — abre `index.html` y funciona

## Cómo editar

1. Abrir `index.html` con cualquier editor de texto
2. Modificar lo que se necesite
3. Subir el cambio:

   ```bash
   git add -A
   git commit -m "descripción del cambio"
   git push
   ```

4. En 1-2 minutos GitHub Pages actualiza la web pública

## Hosting

Servido gratis con [GitHub Pages](https://pages.github.com/) desde la rama `main`.

---

*Página construida para mostrar el club, captar socios nuevos y dar imagen profesional para postular a fondos y conversar con auspiciadores.*

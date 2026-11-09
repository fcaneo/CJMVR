// Config de Tailwind para index.html (única página que usa Tailwind).
// Regenerar assets/site.css cuando cambien clases en index.html:
//   npx -y tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/tailwind.input.css -o assets/site.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E10',
        inkSoft: '#16161A',
        inkLine: '#26262C',
        gold: '#F5B700',
        cyan: '#3FA9D6',
        magenta: '#E91E63',
        paper: '#FFFFFF',
        dim: '#A0A0A8'
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      }
    }
  }
};

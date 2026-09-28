# CV Virtual — Berenice Toranza

Portfolio / CV personal, hecho como proyecto propio para practicar full-stack: un front-end en React con un diseño tipo "post-it" y ventanas de escritorio, y un backend liviano que envía los mensajes del formulario de contacto por email.

🔗 **Sitio en vivo:** [berenice-toranza.dev](https://berenice-toranza.dev)

## Preview

| Home | CV |
| --- | --- |
| ![Home](assets/home.png) | ![CV](assets/cv.png) |

| Projects | Contact |
| --- | --- |
| ![Projects](assets/projects.png) | ![Contact](assets/contact.png) |

## Funcionalidades

- **3 idiomas** (inglés, francés, español), con contenido separado en datos compartidos + traducidos.
- **Modo claro/oscuro**, respeta la preferencia del sistema si no hay una guardada.
- **Selector de paleta de colores** en vivo, con 6 combinaciones predefinidas, persistido en `localStorage`.
- **Totalmente responsive**: menú hamburguesa en mobile, nav compacta en tablet, grillas de 1 a 3 columnas según el ancho.
- **Formulario de contacto real**: valida, envía el email vía [Resend](https://resend.com), y muestra un toast + confetti al confirmar.
- **Descarga de CV en PDF**, con el archivo correcto según el idioma activo.
- **Proyectos con cards expandibles**, mostrando capturas, stack técnico y links a repo/demo.

## Stack técnico

**Frontend** (`client/`)
- React 19 + TypeScript + Vite
- SCSS Modules
- React Router 7
- [Phosphor Icons](https://phosphoricons.com)

**Backend** (`server/`)
- Node.js + Express
- [Resend](https://resend.com) para el envío de emails

## Estructura del proyecto

```
cv-virtual/
├── client/          # Frontend (Vite + React)
│   └── src/
│       ├── assets/       # Imágenes de los proyectos mostrados en el portfolio
│       ├── components/   # Componentes reutilizables (WindowCard, ProjectCard, etc.)
│       ├── content/       # Contenido en 3 idiomas (shared + en/fr/es)
│       ├── context/       # Theme, idioma y paleta de colores
│       ├── layout/         # Header, footer y layout general del sitio
│       └── pages/          # Home, Resume, Projects, Contact
└── server/          # Backend (Express)
    └── src/
        └── index.ts       # Endpoint /contact que envía el email
```

## Correrlo en local

### Frontend

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

### Backend

```bash
cd server
npm install
cp .env.example .env
```

Completá `server/.env` con:
- `GMAIL_USER`: el email que recibe los mensajes del formulario de contacto.
- `RESEND_API_KEY`: tu API key de [resend.com](https://resend.com) (plan free alcanza).

```bash
npm run dev
```

El frontend corre en `http://localhost:5173` y el backend en `http://localhost:3001`.

## Deploy

- **Frontend**: [Vercel](https://vercel.com), Root Directory `client`.
- **Backend**: [Render](https://render.com), Root Directory `server`, Build Command `npm install && npm run build`, Start Command `npm start`.

Variables de entorno necesarias en cada plataforma:
- Vercel: `VITE_API_URL` (la URL del backend en Render).
- Render: `GMAIL_USER` y `RESEND_API_KEY`.

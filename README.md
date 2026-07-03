# ¿Quieres salir conmigo?

Proyecto Next.js inspirado en el Reel de referencia: home con protocolo romántico, botón “No” evasivo, formulario de cita y pantalla final.

## Ejecutar local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Deploy recomendado

### Vercel
1. Sube este proyecto a GitHub.
2. Entra a Vercel y selecciona **New Project**.
3. Importa el repositorio.
4. Framework: Next.js.
5. Deploy.

### Cloudflare Pages
Build command: `npm run build`.

## Personalizar

Edita textos, opciones de formulario y rutas en:

```txt
src/lib/constants.ts
```

## Notas

El formulario actualmente muestra una pantalla de confirmación. Para recibir respuestas por correo, puedes conectarlo después a Formspree, Resend, Firebase o una API Route.

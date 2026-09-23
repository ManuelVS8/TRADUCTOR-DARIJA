// Service worker mínimo de Puente: solo existe para que el navegador
// permita instalar la app. No guarda nada en caché, así que Puente
// siempre necesita conexión para traducir (Gemini, Groq o NVIDIA).
const VERSION = 'puente-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// Deja pasar todas las peticiones tal cual, sin interceptarlas ni cachearlas.
self.addEventListener('fetch', () => {});

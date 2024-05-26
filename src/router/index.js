import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../views/Main.vue')
        },
        {
            path: '/features',
            name: 'features',
            component: () => import('../views/Features.vue')
        },
        {
            path: '/testimonials',
            name: 'testimonials',
            component: () => import('../views/Testimonials.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: () => import('../views/AboutUs.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('../views/NotFound.vue')
        }
    ]
})

export default router

/*
SECCIONES:
1.- FEATURES.
    1.1.- VIDEO ACERCA DEL PRODUCTO.
2.- TESTIMONIALS.
    2.1- DOWNLOADS.

- PREGUNTAS FRECUENTES.

3.- CONTACT.
4.- ABOUT US.

- FOOTER.

OPCIONAL:
- PREGUNTAS FRECUENTES (OPCIONAL).
- CONTACTO (OPCIONAL).

Para la sección de contacto, podrías usar algo como:

"¡Contáctanos para más información! Envíanos un correo electrónico a [tu correo electrónico aquí] y te responderemos lo antes posible. ¡Estamos aquí para ayudarte a proteger tus pertenencias mientras viajas!"

Y luego puedes agregar un botón con el texto "Contactar" que redirija a tu dirección de correo electrónico de Gmail.
 */